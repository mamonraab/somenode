var request = require('request');
var url = "http://ipinfo.io/";
var Promise = require('promise');

module.exports = function() {

    return new Promise(function(resolve, reject) {


        request({
            url: url,
            json: true

        }, function(error, response, body) {
            if (error) {
                reject({
                    error: "location not found !!"
                });

            } else {
                var bdy = JSON.stringify(body, null, 4);
                var bdyobjct = JSON.parse(bdy);

                resolve(bdyobjct.country);
            }


        });


    });
}