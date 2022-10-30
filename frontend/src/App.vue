<template>
  <img src="./assets/logo.png" alt="" width="470" height="150" />
  
  <div>
   <h4><label> cantidad de espacios 10</label></h4>
   <h4><label> cantidad de espacios disponible {{autos}}</label></h4>

  </div>

  <div class="container" >
  <div class="abs-center">
    <form  action="#" name="cron">
      <div class="form-group ">
        Ingrese rut:
        <input type="text"  id="rut"  v-model="rut" required pattern="[0-9]{8}[-]{1}[0-9-k]{1}" placeholder="ej: 20846553-8 " class="form-control">
      </div>

      <div class="form-group">
        Nombre:
        <input type="text" id="nombre" v-model="nombre" 
        required nombre="a" placeholder="Ejemplo: Jhon" class="form-control">
      </div>

      <div class="form-group">
        Ingrese su apellido
        <input type="text" id="apellido" v-model="apellido" required apellido="a" placeholder="Ejemplo: Gonzalez" class="form-control">
      </div>

      <div class="form-group">
        Ingrese su patente:
        <input type="text"  id="patente" v-model="patente" required pattern="[A-Za-z-Az]{4}[0-9]{2}" placeholder="BBBB10" class="form-control">
      </div>

      <div id="cronometro" >
       
          <button id="boton" type="submit" @click='info' value="Empezar" name="boton1" class="btn btn-primary" >confirmar </button>
         
          
          
      </div>
    </form>

</div><br />

  </div>


  <h5>
    Su tiempo es:
    <div id="reloj">
    
    00 00 00
   
          
 </div>
  </h5>

    <h5><label id="rutconf">Su rut es: {{rut1}}</label></h5>
    <h5><label id="nomconf"> Su nombre es: {{nombre1}}</label></h5>
    <h5><label id="apconf"> Su apellido es: {{apellido1}}</label></h5>
    <h5><label id="patconf"> Su patente es: {{patente1}}</label></h5>

    <h5>
    <div id="reloj1">
    Su precio actual es       
    </div>
    </h5>

    <h5>
    <div id="reloj2">
      Minutos transcurridos      
    </div>
    </h5>

    

    <form name="cron1">
    <div  id="cronometro">
    <button type="button" value="Parar" name="boton2" class="btn btn-primary" >Ya me voy </button>
    </div>
    </form>
    <br />


    

</template>

<script setup>

  import {ref} from 'vue'
  import axios from 'axios'
  //import PatenteAuto from './components/PatenteAuto.vue'


  const rut1 = ref();
  const nombre1 = ref();
  const apellido1 = ref();
  const patente1 = ref();
  let rut = ref();
  let nombre = ref();
  let apellido = ref();
  let patente = ref();
  let autos = ref();


 
  let info = function(){
    axios.post('http://localhost:3000/formulario', {'rut': rut.value, 'nombre': nombre.value, 'apellido': apellido.value, 'patente': patente.value})
    .then(response => {
      rut1.value = response.data.rut
      nombre1.value = response.data.nombre
      apellido1.value = response.data.apellido
      patente1.value = response.data.patente
      autos.value=response.data.autos
    })

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
  color: #222c35;
  margin-top: 70px;
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
</style>
