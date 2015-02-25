'use strict';

module.exports = Realtime;

var util = require('util');
var io   = require('vi-io');
var lark = require('lark');

var main = require('./main');

util.inherits(Realtime, lark);
function Realtime(config){
    if(!(this instanceof Realtime)) return new Realtime(config);
    lark.call(this, config);

    /**
     * Bind io to this.io
     **/
    this.io = io();
    var io_type;
    switch(this.config.io.type){
        case 'socket.io' :
            io_type = io.socketio;
            break;
        case 'ws' :
        default :
            io_type = io.ws;
            break;
    }
    if(!io_type) throw new Error("Invalid IO type");
    this.io.io(io_type);

    main(this);
};

Realtime.prototype.run = (function(old_run){
    return function(){
        var server = old_run.apply(this, arguments);
        this.io.attachTo(server);
        return server;
    };
})(Realtime.prototype.run);
