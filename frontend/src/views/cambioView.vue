<template>
<div>
    <form> 
      
            
            <div class="abs-center">
              <div class="form-group">


                <div class="form-group">
                Precio
                <input type="number"  v-model="precioM"  min="1"
                class="form-control">

                <label  >precio actual {{precio}}</label>
                </div>

                <div class="form-group">
                Cantidad de autos
                <input type="number"  v-model="cantidadAutos"  min="1"
                class="form-control">
                <label  >cantidad de autos actual {{cantidad}}</label>
                </div>

                <div class="form-group">
                Editar Precio
                <input type="number"  v-model="EdprecioM"  min="1" max="9999999999"
                class="form-control">
                </div>

                <div class="form-group">
                Editar Cantidad de autos
                <input type="number"  v-model="EdcantidadAutos"  min="1" max="999999999"
                class="form-control">
                </div>
                
                <div>
                    <button type="button"  class="btn btn-danger mx-3 " @click="guardar" >guardar</button>

                    <button type="button"  class="btn btn-danger " @click="editar" >editar </button>
              
                </div>
                
              </div>
  
             </div>


    </form>
  </div>

</template>


<script>
import axios from 'axios';
import { ref } from 'vue';

export default{
    name:"cambioVar",
    data(){
        return {
            precioM:"",
            cantidadAutos:"",
            EdprecioM:ref(this.precioM),
            EdcantidadAutos:ref(this.cantidadAutos),
            listaAutos:"",
            largo:"",
            ids:"",
            precio:ref("debe agregar precio"),
            cantidad:ref("debe agregar cantidad"),
            token:""
        }
    },
    methods:{

        guardar(){

          console.log(this.largo)

          if (this.largo>=1) {
            alert("no puede agregar mas")
          }
          else{

          console.log(this.precioM,this.cantidadAutos)

          axios.post("http://localhost:3000/api/vars/add",{precioM:this.precioM,cantidadAutos:this.cantidadAutos,token: this.token 
      })
            .then(data =>{
            console.log(data);
              
            })
            
            document.location.reload();
          }
          },
          editar(){

            console.log(this.token)
            axios.put("http://localhost:3000/api/vars/"+this.ids,{precioM:this.EdprecioM,cantidadAutos:this.EdcantidadAutos,
            token:this.token })
            .then(data =>{
              console.log(data);

            document.location.reload();
          
            })
          }


},

mounted:function(){
  this.token = localStorage.getItem("token");
            console.log(this.token) 
        
        let direccion = "http://localhost:3000/api/vars/all" ;
        axios.get(direccion).then( response=>{
            console.log(response.data);
            this.largo=response.data.length;
            this.listaAutos=response.data
            let asd = response.data;
            this.ids=asd[0]._id;
            this.precio=asd[0].precioM;   
            this.cantidad=asd[0].cantidadAutos; 
                        
                });
}
}
</script>