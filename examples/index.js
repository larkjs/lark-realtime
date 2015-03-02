var realtime = require('..');
var lark     = require('lark');

var app = realtime(lark());

app.run(8300, function(){
    console.log("Lark system listening at 8300...");   
});
