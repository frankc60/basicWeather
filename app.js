// app.js
const request = require("request");
const argv = require('yargs').argv;

let apiKey = "39ac30c6ef7955abaab77a05eafb5a09";
let city = argv.c || 'London, UK';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

//run from terminal (with yargs)
//>node app.js -c Auckland,NZ
//>node app.js -c London,UK



request(url, (err,res,body) => {
  if(err) console.error(`Error $err`);
  let jparsed = JSON.parse(body);

  //console.log(jparsed);

  console.log(`The current weather in ${jparsed.name}, ${jparsed.sys.country} is ${jparsed.weather[0].description}.

  Temperature is ${jparsed.main.temp} C, humidity at ${jparsed.main.humidity}%.

  Wind speed is ${jparsed.wind.speed}km/h.`);
});

/*
{ coord: { lon: -0.13, lat: 51.51 },
  weather:
   [ { id: 521, main: 'Rain', description: 'shower rain', icon: '09d' } ],
  base: 'stations',
  main:
   { temp: 11.36,
     pressure: 1000,
     humidity: 47,
     temp_min: 10,
     temp_max: 13 },
  visibility: 10000,
  wind: { speed: 2.6 },
  clouds: { all: 40 },
  dt: 1521201000,
  sys:
   { type: 1,
     id: 5091,
     message: 0.0059,
     country: 'GB',
     sunrise: 1521180688,
     sunset: 1521223650 },
  id: 2643743,
  name: 'London',
  cod: 200 }
*/

