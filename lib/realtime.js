module.exports = Realtime;

var io   = require('vi-io');
var koa  = require('koa');
var http = require('http');

var main = require('./main');

function Realtime(config){
    if(!(this instanceof Realtime)) return new Realtime(config);
    this.config = config;
    this.io     = io().io(io.socketio);
    this.http   = koa();

    main(this);
};

Realtime.prototype.run = function(){
    var server = http.createServer(this.http.callback());
    this.io.attachTo(server);
    return server.listen.apply(server, arguments);
};
