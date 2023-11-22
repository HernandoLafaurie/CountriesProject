const { activity, country } = require('../../db');

const getAllActivities = async () => {
    const allActivityDb = await activity.findAll();
    return allActivityDb;
};

const getActivitiesByName = async (name) => {
    const activityName = await activity.findAll({ where: { name: name } });
    return activityName;
};

const createActivityDb = async (name, difficulty, duration, season, countryIds) => {
  try {
    // Crea la actividad en la base de datos.
    const newActivity = await activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    // Relaciona la actividad con los países indicados (countryIds).
    if (countryIds && countryIds.length > 0) {
      const countries = await country.findAll({ where: { id: countryIds } });
      if (countries && countries.length > 0) {
        await newActivity.addCountries(countries);
      } else {
        throw new Error('No se encontraron países válidos en la base de datos.');
      }
    } else {
      throw new Error('Debes seleccionar al menos un país.');
    }

    return newActivity; // Devuelve la actividad creada.

  } catch (error) {
    throw error;
  }
};

module.exports = {
    createActivityDb,
    getAllActivities,
    getActivitiesByName
};