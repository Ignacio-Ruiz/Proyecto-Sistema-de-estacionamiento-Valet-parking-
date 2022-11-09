<template>
  <img src="../assets/logo2.png" alt="" width="290" height="120" />
  
  <div >
   <h4><label> Total de espacios: 10</label></h4>
   <h4><label> Cantidad de espacios disponibles: {{}} </label></h4>

  </div>

  <div  class="container" >
  <div class="abs-center">
    <form   name="cron">
      <div class="form-group ">
        Ingrese rut:
        <input type="text"  id="_id" v-model="form._id" required pattern="\d{3,8}-[\d|kK]{1}" placeholder="ej: 20846553-8 " class="form-control">
      </div>

      <div class="form-group">
        Nombre:
        <input type="text" id="nombre" v-model="form.nombre" 
        required  placeholder="Ejemplo: Jhon" class="form-control">
      </div>

      <div class="form-group">
        Ingrese su apellido
        <input type="text" id="apellido" v-model="form.apellido" required  placeholder="Ejemplo: Gonzalez" class="form-control">
      </div>

      <div class="form-group">
        Ingrese su patente:
        <input type="text"  id="patente" v-model="form.patente" required pattern="[A-Za-z-A]{4}[0-9]{2}" placeholder="BBBB10" class="form-control">
      </div>


        <div class="form-row">
    <div class="col">
      entrada
      <input type="time" id="time" class="form-control" required v-model="form.time">
    </div>
    <div class="col">
      salida
      <input type="time" id="time1" class="form-control" required v-model="form.time1">
    </div>
  </div>
  <br>
      
      <div id="cronometro" >
       
          <button   @click='info' class="btn btn-primary" >reservar </button>
         
      </div>
    </form>

 
</div>
</div><br />
</template>

<script >

import axios from 'axios'
export default{


name:"FormNue",



data:function(){
    return { 
        form:{
              
            "form._id" : "",
            "form.nombre": "", 
            "form.apellido" : "",
            "form.patente":"",
            "form.time":"",
            "form.time1":"",
            
        }
    }
},
methods:{

  
  
    info(){


      axios.post("http://localhost:3000/api/users/add",this.form)
      .then(data =>{
      console.log(data);      
        }) 
        
      }




  

      
      

}

};



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #182a3f;
  min-height: 100vh;
 
  background-image: url(../assets/fondo.jpg);
  background-repeat: no-repeat;
  background-attachment:fixed;
  background-size:cover;
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
