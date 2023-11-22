const axios = require('axios');
const Country = require('../../models/CountriesModel');

// Función que obtiene datos, procesa y almacena en la base de datos
const fetchAndStoreCountriesData = async (conn) => {
  try {
    const response = await axios.get('http://localhost:5000/countries'); // Reemplaza con la URL real de tu JSON
    const jsonData = response.data;

    const countries = [];

    for (const countryData of jsonData) {
      const country = {
        id: 'No information',
        name: 'No information',
        flag: 'No information',
        continent: 'No information',
        capital: 'No information',
        subregion: 'No information',
        area: 0,
        population: 0,
      };

      if (countryData.cca3) country.id = countryData.cca3;
      if (countryData.name && countryData.name.official) country.name = countryData.name.official;
      if (countryData.flags && countryData.flags.png) country.flag = countryData.flags.png;
      if (countryData.region) country.continent = countryData.region;
      if (countryData.capital && countryData.capital[0]) country.capital = countryData.capital[0];
      if (countryData.subregion) country.subregion = countryData.subregion;
      if (countryData.area) country.area = countryData.area;
      if (countryData.population) country.population = countryData.population;

      countries.push(country);
    }

    // Insertar los datos en la base de datos
    await Country(conn).bulkCreate(countries);

    console.log('Datos de países insertados en la base de datos.');
  } catch (error) {
    console.error('Error al obtener y almacenar datos en la base de datos:', error);
  }
};

module.exports = { fetchAndStoreCountriesData };