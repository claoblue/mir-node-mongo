// Conexión a la base de datos
const mongoose = require('mongoose');

function dataBaseConnect() {
  const dbURL = process.env.MONGODB_URI; // mongodb://localhost:27017/party

  mongoose.connect(dbURL);

  const db = mongoose.connection;
  
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", () => {
    console.log("Connection Succeeded");
  });
}

module.exports = { dataBaseConnect };
