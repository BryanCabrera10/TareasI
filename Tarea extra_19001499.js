//noprotect

function getRandomInt(max) {
  return Math.floor(Math.random() * 9);
}

var NumRandom = (getRandomInt(9)+1);
alert(+NumRandom);
var NumIngresado = prompt("Ingrese numero del 3 al 6");

   while(NumIngresado <=3 || NumIngresado >=6){
        var NumIngresado= prompt("Ingrese otro numero");
   }

var Adivinar = prompt("Adivine si su numero es MAYOR, MENOR O IGUAL");
var mayor = 'MAYOR';
var menor = 'MENOR';
var igual = 'IGUAL';

   if(Adivinar == mayor && NumRandom < NumIngresado){
    alert("La computadora eligio "+NumRandom +" Usted Ingreso " +NumIngresado+ "Su eleccion es Mayor Ha Adivinado!");
   } else if (Adivinar == menor && NumRandom > NumIngresado){
    alert("La computadora eligio "+NumRandom +" Usted Ingreso " +NumIngresado+ "Su eleccion es Menor Ha Adivinado!");
  } else if (Adivinar == igual && NumRandom == NumIngresado){
    alert("La computadora eligio "+NumRandom +" Usted Ingreso " +NumIngresado+ "Su eleccion es Igual Ha Adivinado!");
  }else{
    alert("La computadora eligio "+NumRandom +" Usted Ingreso " +NumIngresado+ "No ha Adivinado!");
  }

var si = 'SI';
var no = 'NO';
var Jugar = prompt("Quiere Jugar Otra Vez SI O NO?");

    while(Jugar == si){
      
function getRandomInt(max) {
  return Math.floor(Math.random() * 9);
}

var NumRandom = (getRandomInt(9)+1);
alert(+NumRandom);
var NumIngresado = prompt("Ingrese numero del 3 al 6");

   while(NumIngresado <=1 || NumIngresado >=9){
        var NumIngresado= prompt("Ingrese otro numero");
   }

var Adivinar = prompt("Adivine si su numero es MAYOR, MENOR O IGUAL");
var mayor = 'MAYOR';
var menor = 'MENOR';
var igual = 'IGUAL';

   if(Adivinar == mayor && NumRandom < NumIngresado){
    alert("La computadora eligio "+NumRandom +" Usted Ingreso " +NumIngresado+ "Su eleccion es Mayor Ha Adivinado!");
   } else if (Adivinar == menor && NumRandom > NumIngresado){
    alert("La computadora eligio "+NumRandom +" Usted Ingreso " +NumIngresado+ "Su eleccion es Menor Ha Adivinado!");
  } else if (Adivinar == igual && NumRandom == NumIngresado){
    alert("La computadora eligio "+NumRandom +" Usted Ingreso " +NumIngresado+ "Su eleccion es Igual Ha Adivinado!");
  }else{
    alert("La computadora eligio "+NumRandom +" Usted Ingreso " +NumIngresado+ "No ha Adivinado!");
  }

var si = 'SI';
var no = 'NO';
var Jugar = prompt("Quiere Jugar Otra Vez SI O NO?"); 
    }

alert("Bryan Cabrera 19001499");
