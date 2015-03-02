'use strict';

module.exports = extend_io;

var io = require('vi-io');

function extend_io(app, config){
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

    app.run = (function(old_run){
        return function(){
            var server = old_run.apply(this, arguments);
            this.io.attachTo(server);
            return server;
        };
    })(app.run);
};
