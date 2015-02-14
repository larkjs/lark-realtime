var realtime = require('..');

var app = realtime();

var html = require('fs').readFileSync('./index.html').toString();
app.http.use(function*(next){
    this.body = html;
    yield next;
});

app.io.use(function*(next){
    console.log("Connected");
    yield next;
    console.log("Disconnected");
});

app.io.route("message", function*(next){
    var message = this.args[0];
    console.log("Receive : " + message);
    yield next;
});

app.run(8300, function(){
    console.log("Realtime system listening at 8300...");   
});
