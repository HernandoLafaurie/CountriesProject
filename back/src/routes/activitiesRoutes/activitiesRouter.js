const {Router} = require('express');
const { getActivitiesHandler, postActivitiesHandler } = require('../../handlers/activitiesHandlers/activitiesHandlers')
const activitiesRouter = Router();

//Rutas de acivities

activitiesRouter.get('/', getActivitiesHandler); //LLama al handler que maneja esa ruta.

activitiesRouter.post('/', postActivitiesHandler); //LLama al handler que maneja esa ruta.

module.exports = activitiesRouter;