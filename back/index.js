const { conn } = require('./src/db');
const app = require('./src/app');
const PORT = 3001;
const { fetchAndStoreCountriesData } = require('./src/controllers/countriesControllers/dbCountriesController');

conn.sync({ force: true }) // Esto reemplazará la base de datos cada vez que inicies el servidor
  .then(() => {
    // Llama a la función para obtener y almacenar los datos
    fetchAndStoreCountriesData(conn);

    // Continúa con la configuración y el inicio del servidor
    app.listen(PORT, () => {
      console.log(`Port ${PORT} is working`);
    });
  })
  .catch((error) => {
    console.error('Error syncing the database:', error);
  });