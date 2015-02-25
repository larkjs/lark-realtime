'use strict';

var dirname = require('app-root-path').toString();
var path    = require('path');

module.exports = main;

var root = module.main

function main(app){
    var io_app = require(path.join(dirname, app.config.io.directory));
    io_app(app.io, app);
};
