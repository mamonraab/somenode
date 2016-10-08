    var x = {
        requireAuthentication: function(req, res, next) {
            console.log('private area ');
            next();
        },
        loger: function(req, res, next) {
            console.log(req.method + '   ' + req.originalUrlm + '   ' + new Date().toString());
            next();
        }
    };

    module.exports = x;