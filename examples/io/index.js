module.exports = function(io, app){
    io.use(function*(next){
        console.log("Connected");
        yield next;
        console.log("Disconnected");
    });

    io.route("message", function*(next){
        var message = this.args[0];
        console.log("Receive [" + process.pid + "]: " + message);
        yield next;
    });
}
