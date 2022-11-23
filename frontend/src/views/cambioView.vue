<template>
<div>
    <form> 

        <container class="container">


            <div class="abs-center">

                
            <div class="form-group">
        Precio
        <input type="text" id="precio1" v-model="precioM" required 
         class="form-control">
      </div>
      <div class="form-group">
        cantidad de autos:
        <input type="text"  id="cantidad1" v-model="cantidadAutos" class="form-control">
      </div>
      <div>
        guardar precio y cantidad de autos
      <button type="button"  class="btn btn-danger " @click="guardar" >guardar</button>
      </div>

            </div>



        </container>


 

    </form>
  </div>

</template>


<script>
import axios from 'axios';

export default{
    name:"cambioVar",
    data(){
        return {
            precioM:"",
            cantidadAutos:""
        }
    },
    methods:{

        guardar(){

console.log(this.precioM,this.cantidadAutos)

axios.post("http://localhost:3000/api/vars/add",{precioM:this.precioM,cantidadAutos:this.cantidadAutos})
  .then(data =>{
  console.log(data);      
  }) 
}
    }




}

</script>