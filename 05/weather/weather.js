const https = require("follow-redirects").https;
const {WEATHER_API_kEY, WEATHER_URL} = require("../utils/utils");


const getWeather = (latitude, longitude, name, cb) => {
	const options = {
		method: "GET",
		hostname: `${WEATHER_URL}`,
		path: `/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_kEY}`,
		headers: {},
		maxRedirects: 20,
	};
   
	const req = https.request(options, (res) => {
        const chunks = [];
        

		res.on("data", (chunk) => chunks.push(chunk));

		res.on("end", (chunk) => {
			const body = Buffer.concat(chunks);
            let str = body.toString();
            let weatherObj = JSON.parse(str);
            cb(weatherObj);
		});

		res.on("error", (error) => console.error(error));
    });
    
    req.end();
    
};

module.exports = {
	getWeather,
};
