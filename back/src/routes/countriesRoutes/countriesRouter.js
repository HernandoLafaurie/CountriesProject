const {Router} = require('express');
const { getCountriesHandler, getCountriesDetailHandler} = require('../../handlers/countriesHandlers/countriesHandler');

const countriesRouter = Router();

//Rutas de countries

countriesRouter.get('/', getCountriesHandler); //LLama al handler que maneja esa ruta.

countriesRouter.get('/:id', getCountriesDetailHandler); //Llama al handler que maneja esa ruta. 


module.exports = countriesRouter; 