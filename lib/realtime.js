'use strict';

module.exports = realtime;

var util = require('util');
var io   = require('vi-io');

var extend_io     = require('./io');
var extend_io_dir = require('./io_dir');

var _config = {
    type : 'ws',
};

function realtime(app, config){
    if('object' != typeof config)
        config = _config;
    if(!config.type)
        config.type = _config.type;

    extend_io(app, config);
    extend_io_dir(app, config);
};
