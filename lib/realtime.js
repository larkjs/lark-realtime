'use strict';

module.exports = realtime;

var util = require('util');
var io   = require('vi-io');

var extend_io     = require('./io');
var extend_io_dir = require('./io_dir');

function realtime(app, config){
    if('object' == typeof config) app.config.io = config;

    extend_io(app);
    extend_io_dir(app);
};
