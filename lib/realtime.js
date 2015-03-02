'use strict';

module.exports = realtime;

var util = require('util');
var io   = require('vi-io');

var extend_io     = require('./io');
var extend_io_dir = require('./io_dir');

var config = {
    directory: 'io',
    type : 'ws',
};

function realtime(app, _config){
    if('object' == typeof config) config = _config;

    extend_io(app, config);
    extend_io_dir(app, config);
};
