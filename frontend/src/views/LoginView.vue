<template>

  <HederViewVue></HederViewVue>
<div class="wrapper">
  <img src="../assets/logo3.png" alt="" width="390" height="120" />
  <br>
<div  class="container" >
  <div class="abs-center">
    <form >
   
      <div class="form-group">
        usuario:
        <input type="text" id="nombre"  
        pattern="[a-zA-Z������????����??����??����������??��??��?��������?????��������???����������??��??��ǌ�?��?� ,.'-]{2,48}"
         
        required  placeholder="Ejemplo: admin" class="form-control" v-model="nombre">
      </div>

      <div class="form-group">
        contraseña
        <input type="text" id="pass"  required v-model="pass"
          class="form-control">
      </div>

  <br>
      <div>
        <input @click='login'  class="btn btn-primary" value="Log In">
       
         
      </div>
    </form>

</div>
</div>
</div>
</template>

<script>

import axios from 'axios'
import HederViewVue from '@/components/HederView.vue'

export default {
  name: 'LoginView',

  components:{
  HederViewVue
},
  data: function(){
    return {
      nombre: "",
      pass: "",
      error: false,
      error_msg: "",
      
    }
  },
  methods:{
    login(){
        let json={
           "Username": this.nombre,
           "password":this.pass
        }
        
        axios.post('http://localhost:3000/api/users/autenticate', json)
        .then( data =>{
          console.log(data.data.role)

            if(data.data.role== "ADMIN"){
             
              localStorage.token = data.data.token;
              localStorage.roles=data.data.role;
              this.$router.replace("/cambio");
              
             
            }
            if(data.data.role== "OPERADOR"){
              localStorage.token = data.data.token;
                this.$router.push("/about");
            }
            
        })
    }
  }
}

</script>


<style>
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 40px;
}
</style>