<template>
    <div>


        <nav class="navbar navbar-expand-lg   navbar navbar-dark bg-dark  ">
    <a class="navbar-brand" href="/#">inicio</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/#about">Usuarios <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#login">login</a>
        </li>
        
          <li class="nav-item" >
          <a v-if="this.rols==='ADMIN'" class="nav-link"  href="/#cambio">cambios admin</a>
        </li>
    
      </ul>
    </div>
  </nav>
  <br><br>



    </div>
</template>


<script>


export default{
  name:"AppVue",


data(){
    return {
    rols:""
        
    }
},
mounted:function(){

  this.rols = localStorage.getItem("roles");
        console.log(this.rols)
        

}

}
</script>