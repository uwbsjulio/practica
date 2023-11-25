function dinero(){

var prestamo = document.getElementById("nombre").value;
var cuotas = Number(document.getElementById("cabecera3").value);
var liquidacion; 

if(prestamo ==""){
    alert("ingresa prestamo")

}else{
    liquidacion = prestamo * cuotas ;
       alert( "su interes es de "+  liquidacion)
}
}