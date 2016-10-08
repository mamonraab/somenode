//var Promise = require('promise');

var weather = require('./weather-promise.js');
var loc = undefined;
var location = require('./location.js');


module.exports = function() {

    return new Promise(function(resolve, reject) {
        location().then(
            function(loc) {

                weather(loc).then(
                    function(msg) {
                        resolve(msg);
                    },
                    function(err) {
                        reject(err);
                    }
                );

            },
            function(error) {
                reject(error);
            }

        );

    });
}