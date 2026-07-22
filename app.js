//Dependencias
const express = require("express");

const app = express();


//Servidor
app.listen(3008, () => {
    console.log('Servidor corriendo en puerto: 3008');
});