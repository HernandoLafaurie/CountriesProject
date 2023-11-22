const { createActivityDB, getAllActivities, getActivitiesByName, createActivityDb} = require("../../controllers/activitiesControllers/activitiesControllers");

const getActivitiesHandler = async (req, res) => {

    const {name} = req.query;

    if(name) {
        
        // Llama al controlador para crear la actividad
        const activityByName = await getActivitiesByName(name);

        // Responde con un mensaje de éxito
        res.status(200).json(activityByName);

    } else {

        // Llama al controlador para crear la actividad
        const allActivities = await getAllActivities();

         // Responde con un mensaje de éxito
        res.status(200).json(allActivities);

    };
};

const postActivitiesHandler = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countryIds } = req.body;

    // Llama al controlador para crear la actividad
    const newActivity = await createActivityDb(name, difficulty, duration, season, countryIds);

    // Responde con un mensaje de éxito y el objeto de actividad creado
    res.status(200).json({ message: 'Actividad creada exitosamente', activity: newActivity });
  } catch (error) {
    // Maneja los errores y responde con un mensaje de error
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
    getActivitiesHandler,
    postActivitiesHandler,
};

/* 1. Recibe la request, 
   2. Invoca al controller,
   3. Unifica datos,
   4. Devolver respuesta 
   5. IMPORTANTE: HANDLER NO  INTERACTUA CON FUENTES EXTERNAS (API, DB, etc...)
*/