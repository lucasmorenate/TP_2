let meses =["Enero" ,"Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let mesesNumero = prompt("Ingrese el mes del 1 al 12: ");
if (mesesNumero<1 || mesesNumero>12){
    alert("Error! Dato no Permitido.")
}else{
    let numMes=parseInt(mesesNumero);
    document.write("el dia ingresado es: "+ meses[numMes-1]);
}