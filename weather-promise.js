var request = require("request");
var Promise = require('promise');
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=627edf4c40d2fb3ce8ad3ef816a7e950'; 

 
module.exports = function(location){
return new Promise(function(resolve , reject){
if(!location){

   reject('no location proivded  !!');
}

var urlok = url + '&q='+encodeURIComponent(location)+'&units=imperial';


console.log(url);
 request({
    url: urlok ,
    json: true
},function (error , response , body){

if (error){
 reject('somthing went wrong !!!');

} else {
    var bdy = JSON.stringify(body , null , 4);
var bdyobjct = JSON.parse(bdy);
var temp = bdyobjct.main.temp;
var location = bdyobjct.name;
resolve("its "+ temp + ' in '+ location);
}

});

});
};
