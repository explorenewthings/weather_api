// const request = require("request");

const request = require("request");

// const url =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/delhi.json?access_token=pk.eyJ1IjoicmV3YXRpcmFtYW43MjUwIiwiYSI6ImNrY2l1cGludjFkMTUyeHBmN2poajc0OWQifQ.0esqeJqgmYQ3z38ek4kyrw&limit=1";
// // "http://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=3d260231c6bb7dd3e49bc5e3e3ffbe41";
// //  api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// request({ url: url, json: true }, (err, resp) => {
//   if (!err) {
//     const cordinate = resp.body.features[0].center;
//     const lat = cordinate[0];
//     const lon = cordinate[1];
//     console.log(cordinate);
//     const Whether_Url =
//       "http://api.openweathermap.org/data/2.5/weather?lat=" +
//       lat +
//       "&lon=" +
//       lon +
//       "&appid=3d260231c6bb7dd3e49bc5e3e3ffbe41";
//     const w_response = request({ url: Whether_Url }, (error, res) => {
//       if (!error) {
//         console.log(JSON.parse(res.body));
//       }
//     });
//   } else {

//   }
// });

const geoCode = require("./geocode.js");
const forecast = require("./forecast.js");

//get geocode
geoCode(process.argv[2], (err, { latitude, longitude }) => {
  if (!err) {
    console.log(latitude, longitude);
    forecast(latitude, longitude, (err, res) => {
      if (!err) {
        console.log(res);
      } else {
        console.log(err);
      }
    });
  } else {
    console.log(err);
  }
});
