// app.js
const request = require("request");

request("http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22", (err,doc) => {
if(err) console.error(`Error $err`);
console.log(doc);

})