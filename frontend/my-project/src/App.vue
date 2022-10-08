<template>
  <img src="./assets/logo.png" alt="" width="350" height="100" />

  
  <div>
   
    <p><label> cantidad de espacios {{autos}}</label></p>

  </div>
 

  <form action="procesar-datos.php" method="post" >

<p>Nombre: <input type="text" name="nombre" required nombre="a"></p>

<p>Apellido: <input type="text" name="apellido" required apellido="a"></p>

<p>

  Ingrese su patente:
      <input type="text" id="patente" required pattern="[A-Za-z-b]{4}[0-9]{2}">
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
