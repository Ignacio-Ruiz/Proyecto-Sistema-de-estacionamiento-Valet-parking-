<template>
  <img src="./assets/logo.png" alt="" width="350" height="100" />
  
  <div>
   
    <p><label> cantidad de espacios {{autos}}</label></p>

  </div>

       
  <form action="procesar" method="post" >

    ingrese rut:
    <input type="text" id="rut"  required pattern="[0-9]{8}[-]{1}[0-9-k]{1}" placeholder="ej:20846553-8">
      <br>  
   
 

<p>Nombre: <input type="text" name="nombre" required nombre="a" placeholder="Ejemplo:Jhon"></p>

<p>Apellido: <input type="text" name="apellido" required apellido="a" placeholder="Ejemplo:kaios"></p>

<p>

  Ingrese su patente:
      <input type="text" id="patente" required pattern="[A-Za-z-Az]{4}[0-9]{2}" placeholder="BBBB10">
      <br> 
</p>

<p>

  <input type="submit" value="confirmar">

</p>

</form>

</template>

<script setup>


import {ref} from 'vue'
let autos = ref(10)




</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
