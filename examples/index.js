var realtime = require('..');
var lark     = require('lark');

var app = lark();

realtime(app, app.config.io);

app.run(8300, function(){
    console.log("Lark system listening at 8300...");   
});
