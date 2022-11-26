<template>
<h5>
  <div class="container">
  
  <table class="table">
<thead>
<tr>
  <th scope="col">Patente</th>
  <th scope="col">Nombre</th>
  <th scope="col">Apellido</th>
  <th scope="col">Hora de entrada</th>

</tr>
</thead>
<tbody>
  <tr v-for="usuario in ListaUsuario" :key="usuario._id">
                        <th scope="row">{{ usuario._id}}</th>
                        <td>{{ usuario.nombre }}</td>
                        <td>{{ usuario.apellido }}</td>
                        <td>{{ usuario.time}}</td>
                    </tr>
</tbody>
</table>
</div>
</h5>

<div class="container">

  <div class="abs-center">  
    <form >

      <div>
        <div>
       </div>
      </div>
      
      <div class="form-group">
              hora de salida
              <input type="time" id="minutos"  
            class="form-control">
            </div>
      <div>

        <select   v-model="selected1" class="custom-select" id="inputGroupSelect01">
    <option disabled value="">Sacar precio/eliminar</option>
    <option v-for="usuario in ListaUsuario" :key="usuario._id"> {{usuario._id}}/ Hora de entrada {{usuario.time}} </option>
   
    </select>

    <div>
      <br>
      <button type="button"  class="btn btn-danger mx-3 " @click="precio" >Sacar precio</button>
      <button type="button"  class="btn btn-danger " @click="eliminar" >eliminar</button>
    </div>

     </div>
     <h5>
      <label >Precio final es {{preciofinal2}}</label>
     </h5>
 

    </form>
  </div>

</div>

</template>

<script >


import axios from 'axios';
import { ref } from 'vue';
export default {
  

    name:"AboutForm",


    data(){
        return {
          selected1:'',
            ListaUsuario:null,
            preciofinal2:"",
            token:"",
            precioM:ref(20),
            
        }
    },

    mounted:function(){


        let direccion = "http://localhost:3000/api/users/all" ;
        axios.get(direccion).then( data =>{
          this.ListaUsuario= data.data;
            console.log(data.data)
            this.token = localStorage.getItem("token");
            console.log(this.token)
            
        });

        let pre = "http://localhost:3000/api/vars/all" ;
        axios.get(pre).then( response=>{
            console.log(response.data);
            this.autos=response.data
            let asd = response.data;
            console.log(asd[0].precioM)
            this.precioM=asd[0].precioM
          });

    },

    methods:{

      eliminar(){
      
      axios.delete("http://localhost:3000/api/users/"+this.selected1.split('/')[0],{
        headers: { "Access-Control-Allow-Origin": "*" },
        params: { token: this.token }
      })
      .then( data => {
          console.log(data);
     
      });
      document.location.reload();

    },
    precio(){

      console.log(this.selected1.split('/')[0]);
      axios.get("http://localhost:3000/api/users/"+this.selected1.split('/')[0])
      .then( data => {
        console.log(data.data)
          var string=data.data.date3;
          console.log(string)
        
        var input1 = document.getElementById('minutos');
        var strMsg = '';        
        var date1 = input1.valueAsDate;
        // se le asigna el valor date la funcion porque en la base de datos esta como string(date3)
        var date2 = new Date(string);
        
        var s = (date1.getTime()- date2.getTime());
        
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
        
        strMsg = hrs *60 + mins ;

        
        if (strMsg<1 || strMsg==0) {

        alert("La hora de salida no puede ser menor que la entrada!");

        }
        else{
        this.preciofinal2=strMsg*this.precioM;
    
        }
     
      });
    }
    }

     
};
</script>

