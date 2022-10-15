
<template>
    <div id="cronometro">
        <div id="reloj">
            00 00 00 00
          </div>
        <form name="cron" action="#">
          <input type="button" value="Empezar" name="boton1"   />
          <input type="button" value="Parar" name="boton2"  /><br/>
          
        </form>
      </div>
    </template>

<script type="text/javascript">
let visor;
var cro=0;
let actual;
let elcrono;
let emp;
let cr;
let cs;
let sg;
let mn;
let ho;

window.onload = function() {

    visor=document.getElementById("reloj"); //localizar pantalla del reloj
    //asociar eventos a botones: al pulsar el botón se activa su función.
    document.cron.boton1.onclick = activo; 
    document.cron.boton2.onclick = pausa;
    
    }
    
    //botón Empezar 
    function activo (){   
         if (document.cron.boton1.value=="Empezar") { //botón en "Empezar"
         emp=new Date() //fecha inicial (en el momento de pulsar)
         elcrono=setInterval(tiempo,10); //función del temporizador.
  
         document.cron.boton2.disabled=false; //activar botón de pausa
            }
         }
      //parar el cronómetro
      function pausa() { 
        clearInterval(elcrono); //parar el crono
   
        }		

    //función del temporizador			
    function tiempo() { 
        
         actual=new Date(); //fecha a cada instante
            //tiempo del crono (cro) = fecha instante (actual) - fecha inicial (emp)
         cro=actual-emp; //milisegundos transcurridos.
         cr=new Date(); //pasamos el num. de milisegundos a objeto fecha.
         cr.setTime(cro); 
            //obtener los distintos formatos de la fecha:
         cs=cr.getMilliseconds(); //milisegundos 
         cs=cs/10; //paso a centésimas de segundo.
         cs=Math.round(cs); //redondear las centésimas
         sg=cr.getSeconds(); //segundos 
         mn=cr.getMinutes(); //minutos 
         ho=cr.getHours()-21; //horas 
            //poner siempre 2 cifras en los números		 
         if (cs<10) {cs="0"+cs;} 
         if (sg<10) {sg="0"+sg;} 
         if (mn<10) {mn="0"+mn;} 
            //llevar resultado al visor.		 
         visor.innerHTML=ho+" "+mn+" "+sg+" "+cs; 
         } 

</script>


