const request = require("request");

const getWhether = (latitude, longitute, callback) => {
  const whether_Url =
    "http://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +
    "&lon=" +
    longitute +
    "&appid=3d260231c6bb7dd3e49bc5e3e3ffbe41";
  const w_response = request({ url: whether_Url, json: true }, (error, res) => {
    if (error) {
      callback("Unable to get forecast", undefined);
    } else if (res.body.error) {
      callback("No Data found", undefined);
    } else {
      callback(undefined, res.body.weather);
    }
  });
};

module.exports = getWhether;
