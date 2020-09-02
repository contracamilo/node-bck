const { command } = require('./utils/utils');
const argv = require('yargs').options({command}).argv;
const { geo } = require('./site/site');
const { getWeather } = require('./weather/weather');


const getResponse =  (weatherObj = {}) => {
    try {
        let { main,  weather} = weatherObj;
        const celcius = ((main.temp || 0) - 273.15).toFixed(1); 
        console.log(`Current weather on ${argv.d}: ${celcius}°C - ${weather[0].description}`)
    } catch (error) {
       console.error(error, 'Unresolved Request');
    }
};


geo(argv.d).then((res) => {
    const { latitude, longitude, name} = res;
    getWeather(latitude, longitude, name, getResponse);
});

