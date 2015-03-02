var realtime = require('lark-realtime');

var app = realtime({
    directory : 'examples/config',
});

app.run(8300, function(){
    console.log("Lark system listening at 8300...");   
});
