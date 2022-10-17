const axios = require('axios');

//inicializaciones
const app = axios();

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