const {Sequelize} = require('sequelize');
require('dotenv').config(); //Para usar el archivo .env

const CountriesModel = require ('./models/CountriesModel');
const ActivitiesModel = require ('./models/ActivitiesModel');

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {logging: false});


// DEFINICION DE MODELOS A USAR 
CountriesModel(sequelize);
ActivitiesModel(sequelize);


// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {country, activity} = sequelize.models;

//Crear las relaciones
country.belongsToMany(activity, {through: "country_activity"});
activity.belongsToMany(country, {through: "country_activity"});

module.exports = {
    ...sequelize.models,
    conn: sequelize
};