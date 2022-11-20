<template>   


  <nav class="navbar navbar-expand-lg   navbar navbar-dark bg-dark  ">
    <a class="navbar-brand" href="/#home">inicio</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/#about">Usuarios <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">login</a>
        </li>
     
      </ul>
    </div>
  </nav>
  <br><br>



  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #000000;
  min-height: 100vh;
 
  background-image: url(./assets/fondo.jpg);
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

tachment:fixed;
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
