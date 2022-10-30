<template>
  <div>
    <h5><label id="rutconf">Su rut es: {{rut1}}</label></h5>
    <h5><label id="nomconf"> Su nombre es: {{nombre1}}</label></h5>
    <h5><label id="apconf"> Su apellido es: {{apellido1}}</label></h5>
    <h5><label id="patconf"> Su patente es: {{patente1}}</label></h5>
  </div>
 
</template>

<script setup>

import axios from 'axios'
import {ref} from 'vue'
 const rut1 = ref();
  const nombre1 = ref();
  const apellido1 = ref();
  const patente1 = ref();

  

  axios
  .get('http://localhost:3000/formulario')
  .then(response => (this.info = response.data.nombre1))

  
</script>