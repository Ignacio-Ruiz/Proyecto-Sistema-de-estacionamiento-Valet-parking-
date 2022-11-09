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
    <option disabled value="">Please select one</option>
    <option v-for="usuario in ListaUsuario" :key="usuario._id"> {{usuario._id}}</option>
    
    </select>
    <br>
    <span>Va a eliminar al rut: {{ selected }}</span>
  
      </div>
        <button type="button"  class="btn btn-danger margen mx-3" @click="eliminar" >Eliminar</button>
        <button type="button" onclick="document.location.reload();"  class="btn btn-primary" >Precionar para aplicar cambios</button>
      </div>

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
          selected: '',
            ListaUsuario:null,
            
        }
    },

    mounted:function(){
        let direccion = "http://localhost:3000/api/users/all" ;
        axios.get(direccion).then( data =>{
          this.ListaUsuario= data.data;
            console.log(data);
            
         
            
        });
      
    },

    methods:{

      eliminar(){
      
      axios.delete("http://localhost:3000/api/users/"+this.selected)
      .then( data => {
          console.log(data);
     
      });

    }

    }


}

</script>

