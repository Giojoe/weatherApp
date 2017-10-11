const request = require('request');

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=chiangmai',
    json: true
}, (err, res, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});