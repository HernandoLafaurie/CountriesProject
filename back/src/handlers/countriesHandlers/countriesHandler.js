const {getCountriesById, getAllCountries, getCountryByName} = require('../../controllers/countriesControllers/countriesControllers')

const getCountriesHandler = async (req, res) => {

    const {name} = req.query

    if(name) {

        // Llama al controlador para crear la actividad
        const countryByName = await getCountryByName(name)

        // Responde con un mensaje de éxito
        res.status(200).json(countryByName)

    } else {

        // Llama al controlador para crear la actividad
        const allCountries = await getAllCountries();

        // Responde con un mensaje de éxito
        res.status(200).json(allCountries)

    }
};

const getCountriesDetailHandler = async (req, res) => {

    const {id} = req.params 

    try {

        // Llama al controlador para crear la actividad
        const response = await getCountriesById(id)

        // Responde con un mensaje de éxito
        res.status(200).json(response)
        
    } catch (error) {

        //Maneja los errores y responde con un mensaje de error
        res.status(400).json({error:error.message});
        
    }
};


module.exports = {
    getCountriesHandler, 
    getCountriesDetailHandler,
};

/* 
  a) id => params
  b) query => ?name=name&raza=raza
  c) body => info 
*/

/* 1. Recibe la request, 
   2. Invoca al controller,
   3. Unifica datos,
   4. Devolver respuesta 
   5. IMPORTANTE: HANDLER NO  INTERACTUA CON FUENTES EXTERNAS (API, DB, etc...)
*/