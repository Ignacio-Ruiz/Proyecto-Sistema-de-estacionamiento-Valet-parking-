const express = require('express');

//inicializaciones
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 3000);
//Variables intermedias

// Variables Globales

//Rutas

//Static file

//Inicializacion del servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

// mongodb+srv://Register:<password>@cluster0.dhxdbpw.mongodb.net/?retryWrites=true&w=majority