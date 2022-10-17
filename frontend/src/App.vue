<template>
  <img src="./assets/logo.png" alt="" width="470" height="150" />
  
  <div>
   <h4><label> cantidad de espacios {{autos}}</label></h4>
   <h4><label> cantidad de disponible {{}}</label></h4>

  </div>

  <div class="container" >
  <div class="abs-center">
    <form name="formulario " action="/formulario"
     class="border p-5 form"  target="_blank" method="post">
      <div class="form-group ">
        Ingrese rut:
        <input type="text" name="rut" id="rut"  v-model="rut"
        required pattern="[0-9]{8}[-]{1}[0-9-k]{1}"
         placeholder="ej:20846553-8 " class="form-control">
      </div>

      <div class="form-group">
        Nombre:
         <input type="text" name="nombre" id="nombre" v-model="nombre"
        required nombre="a" placeholder="Ejemplo:Jhon" class="form-control">
      </div>

      <div class="form-group">
        Ingrese su apellido
        <input type="text" name="apellido" id="apellido" v-model="apellido"
        required apellido="a" placeholder="Ejemplo:kaios" class="form-control">
      </div>

      <div class="form-group">
        Ingrese su patente:
          <input type="text" name="patente" id="patente" v-model="patente"
          required pattern="[A-Za-z-Az]{4}[0-9]{2}" placeholder="BBBB10" class="form-control">
      </div>

      <div>
        <button type="submit" value="confirmar" name="confirmar"  @click='calcular' 
        class="btn btn-primary">confirmar </button>
      </div>
    </form>
  </div>
</div>
<InfoForm></InfoForm>
<PatenteAuto></PatenteAuto>


</template>

<script setup>

//import { ref} from 'vue'
import PatenteAuto from './components/PatenteAuto.vue'
import InfoForm from './components/InfoForm.vue'

//import axios from 'axios'

let autos = 10;


/*let calcular = function(){
    axios
    .post('http://localhost:3000/formulario', {'autos': autos.value})
    .then(response => {
      autos.value = response.data.autos
    })

  }
*/
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
