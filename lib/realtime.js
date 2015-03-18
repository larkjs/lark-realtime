'use strict';

module.exports = Realtime;

var util = require('util');
var io   = require('lark-io');
var lark = require('lark');

var extend_io     = require('./io');
var extend_io_dir = require('./io_dir');

var _config = {
    type : 'ws',
};

util.inherits(Realtime, lark);
function Realtime(config){
    if(!(this instanceof Realtime)) return new Realtime(config);
    lark.call(this, config);

    realtime(this, this.config.io);
};

Realtime.realtime = realtime;

function realtime(app, config){
    if('object' != typeof config)
        config = _config;
    if(!config.type)
        config.type = _config.type;

    extend_io(app, config);
    extend_io_dir(app, config);
};
