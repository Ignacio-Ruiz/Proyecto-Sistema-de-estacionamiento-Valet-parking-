<template>
  <img src="../assets/logo3.png" alt="" width="390" height="120" />
  
  <div >
   <h4>
      <label> Espacios que quedan:{{cantidadAutos-autos2}}</label>
  </h4>
  </div>

  <div  class="container" >
  <div class="abs-center">
    <form   >
   
      <div class="form-group">
        Nombre:
        <input type="text" id="nombre"  
        pattern="[a-zA-Z������????����??����??����������??��??��?��������?????��������???����������??��??��ǌ�?��?� ,.'-]{2,48}"
         v-model="form.nombre" 
        required  placeholder="Ejemplo: Jhon" class="form-control">
      </div>

      <div class="form-group">
        apellido
        <input type="text" id="apellido" v-model="form.apellido" required  pattern="[a-zA-Z������????����??����??����������??��??��?��������?????��������???����������??��??��ǌ�?��?� ,.'-]{2,64}"
          placeholder="Ejemplo: Gonzalez" class="form-control">
      </div>

      <div class="form-group">
        patente:
        <input type="text"  id="patente" v-model="form._id" required pattern="[A-Za-z-A]{4}[0-9]{2}" placeholder="BBBB10" class="form-control">
      </div>


        <div class="form-row">
    <div class="col">
     hora de entrada
      <input type="time"  id="time1" class="form-control" required v-model="form.time">
    </div>

  </div>
  <br>
      <div>
       
          <button   @click='info' class="btn btn-primary" >Enviar </button>
         
      </div>
    </form>

 
</div>
</div><br />


</template>



<script >



import axios from 'axios'
import { ref } from 'vue';



export default{

name:"FormNue",




data:function(){
    return { 
      cantidadAutos: ref(10),
      autos2:'',
        form:{

        }
    }
},
methods:{

    info(){
      
           
            if ((this.cantidadAutos-this.autos2) <= 0) {

              alert("El estacionamiento esta lleno");
              
            }
            else{
        
              
        var input1 = document.getElementById('time1');
        var date1 = input1.valueAsDate;
        var date3=date1;
        console.log(date3);

        this.form.date3=String(date3);
        console.log(date3);      
        
        axios.post("http://localhost:3000/api/users/add",this.form)
        .then(data =>{
        console.log(data);      
        }) 

            }

        
      } 

},
mounted:function(){
        let direccion = "http://localhost:3000/api/vars/all" ;
        axios.get(direccion).then( response=>{
            console.log(response.data);
            this.autos=response.data
            let asd = response.data;
            console.log(asd[0].cantidadAutos)
            this.cantidadAutos=asd[0].cantidadAutos
            
            
          
                                
                });

        let asd = "http://localhost:3000/api/users/all" ;
        axios.get(asd).then( data =>{
            console.log(data.data);     
            this.autos2=data.data.length; 
            console.log(this.autos2);            
                        
        });
        } 
        

}


</script>