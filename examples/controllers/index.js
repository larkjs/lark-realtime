/**
 * Created by mdemo on 14/12/4.
 */

module.exports = function (router) {
    router.get('/', function *(next) {
        this.locals = {
            title : "Welcome, Lark-Realtime",
            body  : this.pageServices['demo'].render(),
            io_type : this.config.io.type,
        };
        yield this.render('index');
    });
    return router;
};


