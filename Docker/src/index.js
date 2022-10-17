const axios = require('axios');
const app = axios();

//Configuraciones; configuracions de la aplicacion
app.set('port', process.env.PORT || 3000);
//varibales intermedias: funciones ejecutadas antes que lleguen al servidor 

//Variables globlales: Colocar ciertos datos para que toda nuestra aplicacion tenga acceso 

//Routes

//Static file

//Inicializacion del servidor 
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});