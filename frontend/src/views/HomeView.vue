<template>
  <img src="../assets/logo3.png" alt="" width="390" height="120" />
  
  <div >
   <h4>
      <label> Espacios que quedan:{{Math.abs(autos-10)}}</label>
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

export default{

name:"FormNue",




data:function(){
    return { 
      
      autos:'',
        form:{

        }
    }
},
methods:{

    info(){
      let direccion = "http://localhost:3000/api/users/all" ;
        axios.get(direccion).then( data =>{
            console.log(data.data);
            console.log('el largo es '+data.data.length);
            //cuenta el array de datos
            if (data.data.length>=10) {

              alert("El estacionamiento esta lleno");
              
            }
            else{

        var input1 = document.getElementById('time1');
   
        var date1 = input1.valueAsDate;
       

        var date3=date1;
        console.log(date3);

        this.form.date3=String(date3);
        console.log(date3);      
        
        axios.post("http://localhost:3000/api/users/addp",this.form)
        .then(data =>{
        console.log(data);      
        }) 

            }

        });
      } 

},
mounted:function(){
        let direccion = "http://localhost:3000/api/vars/all" ;
        axios.get(direccion).then( data =>{
            console.log(data);  
            var string=data.data
              
            this.autos=data.data.length; 
            console.log(string);            
                        
        });
}

}


</script>
