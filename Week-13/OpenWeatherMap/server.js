const { response } = require("express");
const express = require("express");
const { get } = require("request");
const request = require("request");
const util = require("util");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const app = express();
const key = "7d7b7bc5ffba70ec1c13ddab4d9a901a";
//api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
let city = "";
let cnt = "";
app.get("/", (req, res) => {
  console.log(`your query is ${req.query}`);
  city = req.query.city;
  console.log(`this was my q` + city);
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`;
  request(url, (error, response, body) => {
    let weather_json = JSON.parse(body);
    let weather = {
      city: city,
      temperature: [],
    };

    weather.temperature.push(weather_json.main.temp);
    console.log("i am loging first");
    res.json(weather);
    res.end();
  });
});

app.get("/forecast", (req, res) => {
  city = req.query.city;
  cnt = Number(req.query.cnt);
  console.log(`this was my q` + city);
  let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&cnt=${cnt}&appid=${key}`;
  request(url, (error, response, body) => {
    let weather_json = JSON.parse(body);

    console.log(weather_json);
    // let weather = {
    //   city: city,
    //   temperature: weather_json.list[0][main],
    // };
    res.json(weather_json);
    res.end();
  });
});
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server is listening at port:${PORT}`);
});

// app.get("/cities", (req, res) => {
//   let result = {};

//   let cities_arr = req.query.city;

//   cities_arr.forEach((_city) => {
//     city = _city;
//     let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`;
//     new Promise((resolve, reject) => {
//       request(url, (error, response, body) => {
//         let weather_json = JSON.parse(body);
//         console.log(weather_json);
//         resolve(weather_json);
//         if (error) {
//           console.log(`error ${error}`);
//           reject(error);
//         }
//       });
//     })
//       .then((weather_json) => {
//         result[`${_city}`] = weather_json.main.temp;
//       })
//       .then((result) => {
//         res.json(result);
//         res.end();
//       });
//   });
// });
// const fetchNames = async () => {
//   try {
//     const res = await Promise.all([
//       fetch("./names.json"),
//       fetch("./names-mid.json"),
//       fetch("./names-old.json")
//     ]);
//     const data = await Promise.all(res.map(r => r.json()))
//     console.log(data.flat());
//   } catch {
//     throw Error("Promise failed");
//   }
// };

get("/cities", (req, res) => {
  let cities_arr = req.query.city;
  const response = Promise.all([
    cities_arr.forEach((_city) => {
      city = _city;
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`;
      return fetch(url);
    }),
  ])
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
});
