const request = require('request');
const apiKey = '9d898dfa2ae8a6d46bc4b8d4c798a270';

var getWeather = (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${apiKey}/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined,
        {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
    } else {
      callback('Unable to fetch weather data.');
    }
  });
};

module.exports.getWeather = getWeather;
