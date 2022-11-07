<template>

<h5>
  <div class="container">
  
  <table class="table">
<thead>
<tr>

  <th scope="col">Rut</th>
  <th scope="col">Nombre</th>
  <th scope="col">Apellido</th>
  <th scope="col">Patente</th>
  <th scope="col">Hora de Salida</th>
  <th scope="col">Hora de entrada</th>
  <th scope="col">Precio</th>
</tr>
</thead>
<tbody>
  <tr v-for="usuario in ListaUsuario" :key="usuario._id">
                        <th scope="row">{{ usuario._id}}</th>
                        <td>{{ usuario.nombre }}</td>
                        <td>{{ usuario.apellido }}</td>
                        <td>{{ usuario.patente}}</td>
                        <td><div id="reloj"> 00 00 00 </div></td>
                        <td><div id="reloj1"> 00 00 00 </div></td>
                      
                    </tr>
</tbody>
</table>
</div>
</h5>

<div class="container">

  <div class="abs-center">  
    <form >

      <div class="form-group ">
        Ingrese rut para eliminar:
        <input type="text"  id="_id"     required pattern="[0-9]{8}[-]{1}[0-9-k]{1}" placeholder="ej: 20846553-8 " class="form-control">
        <button type="button" class="btn btn-danger margen" v-on:click="eliminar()" >Eliminar</button>
      </div>

    </form>
  </div>

</div>


Fecha1: <input id="time1" type="time" value="00:00"><br>
Fecha2: <input id="time2" type="time" value="00:00"><br>


<form name="cron2">

  <div id="cronometro">

<button type="button" value="sumar" name="boton3" >Clic me</button><br>
</div>
</form>



    <h5>
    <div id="reloj2">
      Minutos transcurridos     
    </div>
   
     
    <div id="resultado">
      Tiempo final   
    </div>
      </h5>
    

<form name="cron">
<div id="cronometro">

  <button id="boton"  value="Empezar" name="boton1" class="btn btn-primary" >Confirmar y agregar usuario </button>

</div>

</form>
    <form name="cron1">
    <div  id="cronometro">
    <button type="button" value="Parar" name="boton2" class="btn btn-primary" >Stop </button>
    </div>
    </form>
    <br />



   

</template>

<script >



import axios from 'axios';
export default {
    name:"AboutForm",
    data(){
        return {
            ListaUsuario:null,

        }
    },

    mounted:function(){
        let direccion = "http://localhost:3000/api/users/all" ;
        axios.get(direccion).then( data =>{
          this.ListaUsuario= data.data;
            console.log(data);
        });
    },
    eliminar(){

        axios.delete("http://localhost:3000/api/users/")
        .then( datos => {
            console.log(datos);
        });

      }

      
  


}


 var input1;
  var input2; 
  var strMsg;
  var date1;
  var date2 ;
  var s ;
  var ms ;
  var mins;
  var hrs;
  var secs;
  
  let visor3;

  window.onload = function () {

    visor3 = document.getElementById('resultado');
    document.cron2.boton3.onclick = Sumar;
    
  }

  function Sumar(){
	
  input1 = document.getElementById('time1');
   input2 = document.getElementById('time2');
   strMsg = '';
 
 date1 = input1.valueAsDate;
  date2 = input2.valueAsDate;
 
 s = (date1.getTime() + date2.getTime());
 
  ms = s % 1000;
 s = (s - ms) / 1000;
  secs = s % 60;
 s = (s - secs) / 60;
  mins = s % 60;
  hrs = (s - mins) / 60;
 
 strMsg = hrs + ':' + mins + ':' + secs;

 visor3.innerHTML = strMsg;
 


    
 

}








let visor,visor1,visor2;
var cro=0;
let actual;
let elcrono;
let emp;
let cr;
let cs;
let sg,mn,ho;
let precio;
let tiempoMi;




window.onload = function() {

    visor=document.getElementById("reloj"); //localizar pantalla del reloj
    visor1=document.getElementById("reloj1");
    visor2=document.getElementById("reloj2");
    //asociar eventos a botones: al pulsar el bot�n se activa su funci�n.
    document.cron.boton1.onclick = activo; 
    document.cron1.boton2.onclick = pausa;
}


    
    //bot�n Empezar 
    function activo (){   

        
         if (document.cron.boton1.value=="Empezar") { //bot�n en "Empezar"
         emp=new Date() //fecha inicial (en el momento de pulsar)
         elcrono=setInterval(tiempo,10); //funci�n del temporizador.
         document.getElementById('boton').disabled=true;
  
            }
         }
      //parar el cron�metro
      function pausa() { 

        if(document.cron1.boton2.value=="Parar"){
          clearInterval(elcrono); //parar el crono

        }
      }		

    //funci�n del temporizador			
    function tiempo() { 
      
        
         actual=new Date(); //fecha a cada instante
            //tiempo del crono (cro) = fecha instante (actual) - fecha inicial (emp)
         cro=actual-emp; //milisegundos transcurridos.
         cr=new Date(); //pasamos el num. de milisegundos a objeto fecha.
         cr.setTime(cro); 
            //obtener los distintos formatos de la fecha:
         cs=cr.getMilliseconds(); //milisegundos 
         cs=cs/10; //paso a cent�simas de segundo.
         cs=Math.round(cs); //redondear las cent�simas
         sg=cr.getSeconds(); //segundos 
         mn=cr.getMinutes(); //minutos 
         ho=cr.getHours()-21; //horas 
            //poner siempre 2 cifras en los n�meros		 
         if (cs<10) {cs="0"+cs;} 
         if (sg<10) {sg="0"+sg;} 
         if (mn<10) {mn="0"+mn;}
         if (ho<10) {ho="0"+ho;} 
            //llevar resultado al visor.		 
         
         precio=(ho*60)*20+(mn*20);
         tiempoMi=(ho*60)+(mn*1);
         
         visor.innerHTML=ho+" "+mn+" "+sg;

         visor1.innerHTML="Su precio actual es "+precio;
         visor2.innerHTML ="Minutos transcurridos "+ tiempoMi;


         } 

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  

  

}



.abs-center {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  min-height: 10vh;
  
}
.form {
  width: 450px;
}
.table{

  color: #ffffff;

}
</style>

