const { country, activity } = require('../../db');

const getAllCountries = async () => {
  const allCountryDb = await country.findAll();
  return allCountryDb;
};

const getCountryByName = async (name) => {
  const countryName = await country.findAll({
    where: { name: name },
    include: [
      {
        model: activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: { attributes: [] },
      },
    ],
  });
  return countryName;
};

const getCountriesById = async (id) => {
  const countryId = await country.findByPk(id, {
    include: {
      model: activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: { attributes: [] },
    },
  });
  return countryId;
};

module.exports = {
  getCountriesById,
  getAllCountries,
  getCountryByName,
};