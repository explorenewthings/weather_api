const request = require("request");

const getGeoCode = (place, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(place) +
    ".json?access_token=pk.eyJ1IjoicmV3YXRpcmFtYW43MjUwIiwiYSI6ImNrY2l1cGludjFkMTUyeHBmN2poajc0OWQifQ.0esqeJqgmYQ3z38ek4kyrw&limit=1";
  request({ url: url, json: true }, (err, res) => {
    if (err) {
      callback(err);
    } else if (res.body.features.length === 0) {
      callback("No Value Found", err);
    } else {
      const cordinate = res.body.features[0].center;
      callback(undefined, {
        latitude: cordinate[0],
        longitute: cordinate[1],
      });
    }
  });
};

module.exports = getGeoCode;
