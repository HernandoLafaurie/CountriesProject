const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes/mainRoutes/mainRouter');
const cors = require("cors");

const app = express();

// Middlewares = Filtros (Se ejecutan en el orden que los declaras)

app.use(cors());

app.use(morgan("dev")); //Registra request en la terminal (Tambien muestra errores)

app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
}); // Para que mi servidor no se rompa al conectar con el browser.

app.use(express.json()); //Funcion de parseo

app.use(mainRouter); //Usa a la ruta principal cuando se inicia el servidor.

module.exports = app;