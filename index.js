require("dotenv").config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { dataBaseConnect } = require('./src/db');

const guestRoutes = require("./src/routes/guests");

// Express server
const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

// Se estable conexión con la base de datos
dataBaseConnect();

// Rutas para manejar los requests
app.use("/guests", guestRoutes);

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`App is running on port ${port}`);
});