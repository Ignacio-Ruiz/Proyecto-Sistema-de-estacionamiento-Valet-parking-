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
  <th scope="col">Hora de entrada</th>
  <th scope="col">Hora de salida</th>
  <th scope="col">Precio</th>
</tr>
</thead>
<tbody>
  <tr v-for="usuario in ListaUsuario" :key="usuario._id">
                        <th scope="row">{{ usuario._id}}</th>
                        <td>{{ usuario.nombre }}</td>
                        <td>{{ usuario.apellido }}</td>
                        <td>{{ usuario.patente}}</td>
                        <td>{{ usuario.time}}</td>
                        <td>{{ usuario.time1}}</td>
                        <td>{{ usuario.precio}}</td>            
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
    <option disabled value="">Eliminar</option>
    <option v-for="usuario in ListaUsuario" :key="usuario._id"> {{usuario._id}}/{{usuario.nombre}}</option>
    
    </select>
    <br>
  
      </div>
        <button type="button"  class="btn btn-danger " @click="eliminar" >Eliminar</button>
        
      </div>
      <div>
        <div>

<h5>
  <span> a selecionado: {{ selected }}</span>
</h5>

</div>
      </div>
      <div class="form-group">
        Ingrese nueva hora de salida
        <input type="time" id="minutos"  
       class="form-control">
      </div>

      <div>

        <select   v-model="selected1" class="custom-select" id="inputGroupSelect01">
    <option disabled value="">Precio a editar</option>
    <option v-for="usuario in ListaUsuario" :key="usuario._id"> {{usuario._id}}/ hora de entrada{{usuario.time}} </option>
   
    </select>
    <div>
      <br>
      <button type="button"  class="btn btn-danger " @click="precio" >precio final</button>
    </div>

      </div>
      <label >precio final es {{preciofinal2}}</label>

    </form>
  </div>

</div>

</template>

<script >

import axios from 'axios';
export default {
  
    name:"AboutForm",
    data(){
        return {
          selected1:'',
          selected: '',
            ListaUsuario:null,
            preciofinal2:""
            
        }
    },

    mounted:function(){
        let direccion = "http://localhost:3000/api/users/all" ;
        axios.get(direccion).then( data =>{
          this.ListaUsuario= data.data;
            console.log(data.data)
            
        });
      
    },

    methods:{

      eliminar(){
      
      axios.delete("http://localhost:3000/api/users/"+this.selected.split('/')[0])
      .then( data => {
          console.log(data);
     
      });
      document.location.reload();

    },
    precio(){

      console.log(this.selected1.split('/')[0]);
      axios.get("http://localhost:3000/api/users/"+this.selected1.split('/')[0])
      .then( data => {
          console.log(data.data);
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
        this.preciofinal2=strMsg*20;
    
        }
     
      });
    }
    }
};
</script>

