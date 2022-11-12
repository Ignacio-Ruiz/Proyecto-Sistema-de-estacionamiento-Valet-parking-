<template>
  <img src="../assets/logo2.png" alt="" width="290" height="120" />
  
  <div >
   <h4><label> Total de espacios: 10 {{}}</label></h4>


  </div>

  <div  class="container" >
  <div class="abs-center">
    <form   name="cron">
      <div class="form-group ">
        Ingrese rut:
        <input type="text"  id="_id" v-model="form._id" required pattern="\d{8}-[\d|kK]{1}" placeholder="ej: 20846553-8 " class="form-control">
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
      <input type="time" id="time1" class="form-control" required v-model="form.time">
    </div>
    <div class="col">
      salida
      <input type="time" id="time2" class="form-control" required v-model="form.time1">
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

        }

        
    }
},
methods:{


    info(){

      let direccion = "http://localhost:3000/api/users/all" ;
        axios.get(direccion).then( data =>{
            console.log(data.data);
            console.log('el largo es '+data.data.length)
            //alert('actualmente hay '+data.data.length)

            if (data.data.length>=10) {

              alert("El estacionamiento esta lleno")
              
            }
            else{


        var precio;
        var input1 = document.getElementById('time1');
        var input2 = document.getElementById('time2');
        var strMsg = '';
        
        var date1 = input1.valueAsDate;
        var date2 = input2.valueAsDate;
        
        var s = (date2.getTime() - date1.getTime());
        
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
        
        strMsg = hrs *60 + mins ;


        if (strMsg<1 || strMsg==0) {

        alert("La hora de salida no puede ser menor que la entrada!")

        }
        else{
        precio=strMsg*20;

        }
        this.form.precio=String(precio);

        console.log(this.form);      
        

        axios.post("http://localhost:3000/api/users/add",this.form)
        .then(data =>{
        console.log(data);      
        }) 

            }

        });


      
        
      } 

}

};



let direccion = "http://localhost:3000/api/users/all" ;
        axios.get(direccion).then( data =>{
            console.log(data.data);
           //window.alert('actualmente hay '+data.data.length)
            
          });

        


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
