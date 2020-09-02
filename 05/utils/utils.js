require('dotenv').config();

const command = {
    direction: {
        alias: 'd',
        desc: 'city address to obtain the weather',
        demand: true
    }
};

const GEOLOCATION_URL = 'http://api.positionstack.com/v1/forward?';
const GEOLOCATION_API_kEY = process.env.API_KEY_GEO; 
const WEATHER_API_kEY = process.env.API_KEY_WEATHER;
const WEATHER_URL = "api.openweathermap.org";

module.exports = {
    command,
    GEOLOCATION_URL,
    GEOLOCATION_API_kEY,
    WEATHER_API_kEY,
    WEATHER_URL
}