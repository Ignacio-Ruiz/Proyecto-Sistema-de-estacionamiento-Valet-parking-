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
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Options</label>
  </div>
  <select  v-model="selected" class="custom-select" id="inputGroupSelect01">
    <option disabled value="">Please select one</option>
    <option v-for="usuario in ListaUsuario" :key="usuario._id"> {{usuario._id}}</option>
    
    </select>
    <br>
    <span>Selected: {{ selected }}</span>
  
      </div>
        <button type="button"  class="btn btn-danger margen mx-3" @click="eliminar" >Eliminar</button>
        <button type="button" onclick="document.location.reload();"  class="btn btn-primary" >Precionar para aplicar cambios</button>
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





</template>

<script >






import axios from 'axios';
export default {

    name:"AboutForm",
    data(){
        return {
          selected: '',
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

    methods:{

      eliminar(){
      
      axios.delete("http://localhost:3000/api/users/"+this.selected)
      .then( data => {
          console.log(data);
     
      });

    }

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

