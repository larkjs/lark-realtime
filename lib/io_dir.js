'use strict';

var path    = require('path');

module.exports = main;

var root = module.main

function main(app, config){
    if(!config || !config.directory) return;
    var io_app = require(path.join(path.dirname(process.mainModule.filename), config.directory));
    io_app(app.io, app);
};
