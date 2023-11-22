const {Router} = require('express');
const countriesRouter = require('../countriesRoutes/countriesRouter');
const activitiesRouter = require('../activitiesRoutes/activitiesRouter');


const mainRouter = Router();

//Rutas Principales

mainRouter.use('/countries', countriesRouter); //LLama a las rutas de countries.

mainRouter.use('/activities', activitiesRouter); //LLama a las rutas de activities.

module.exports = mainRouter; 