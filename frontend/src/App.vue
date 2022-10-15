<template>
  <img src="./assets/logo.png" alt="" width="470" height="150" />
  
  <div>
   <h4><label> cantidad de espacios {{autos}}</label></h4>

  </div>

  <div class="container" >
  <div class="abs-center">
    <form action="#" class="border p-5 form"  target="_blank" method="get">
      <div class="form-group ">
        Ingrese rut:
        <input type="text" name="rut" id="rut"  
        required pattern="[0-9]{8}[-]{1}[0-9-k]{1}"
         placeholder="ej:20846553-8 " class="form-control">
      </div>

      <div class="form-group">
        Nombre:
         <input type="text" name="nombre" id="nombre"
        required nombre="a" placeholder="Ejemplo:Jhon" class="form-control">
      </div>

      <div class="form-group">
        Ingrese su apellido
        <input type="text" name="apellido" id="apellido"
        required apellido="a" placeholder="Ejemplo:kaios" class="form-control">
      </div>

      <div class="form-group">
        Ingrese su patente:
          <input type="text" name="patente" id="patente"
          required pattern="[A-Za-z-Az]{4}[0-9]{2}" placeholder="BBBB10" class="form-control">
      </div>

      <div>
        <button type="submit" value="confirmar" class="btn btn-primary">confirmar </button>
      </div>
    </form>
  </div>
</div>
<PatenteAuto></PatenteAuto>



</template>

<script setup>


import {ref} from 'vue'
import PatenteAuto from './components/PatenteAuto.vue'


let autos = ref(10)


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
