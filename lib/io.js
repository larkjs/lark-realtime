'use strict';

module.exports = extend_io;

var io = require('vi-io');

function extend_io(app, config){
    if('function' != typeof app.listen)
        throw new Error('app.listen is required to be a function');

    app.io = io();

    var io_type;
    switch(config.type){
        case 'socket.io' :
            io_type = io.socketio;
            break;
        case 'ws' :
        default :
            io_type = io.ws;
            break;
    }
    if(!io_type) throw new Error("Invalid IO type");
    app.io.io(io_type);

    app.listen = attach(app.listen);
};

function attach(func) {
    return function() {
        var server = func.apply(this, arguments);
        this.io.attachTo(server);
        return server;
    };
};
