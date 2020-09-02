const axios = require ('axios');
const { GEOLOCATION_URL, GEOLOCATION_API_kEY } = require('../utils/utils');

const geo = async city => {
  let encodedCity = encodeURI (city);

  let config = {
    method: 'get',
    url: `${GEOLOCATION_URL}access_key=${GEOLOCATION_API_kEY}&query=${encodedCity}`,
  };

  let request = await axios (config)
    .then (response => JSON.stringify (response.data))
    .catch (error => console.log (error));

  let result = await JSON.parse (request);

  if (result.data.length === 0) {
    throw new Error (`No entries for ${city}`);
  }

  let reference = result.data.shift();
  let {latitude, longitude, name} = reference;

  return {
    latitude,
    longitude,
    name,
  };
};

module.exports = {
  geo,
};
