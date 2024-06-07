let dato, resultado;
//crea dos variables dato y resultado
val1 = window.prompt("Introduce tu nombre", "...");
//solicita ingresar el nombre y se almacena en una nueva variable val1
val2 = window.prompt("Introduce tu apellido", "...");
//solicita ingresar el apellido y se almacena en una nueva variable val2
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
//concatena una cadena agregando lo almacenado en val1 y val2, luego lo almacena en resultado
document.write(resultado);
//imprime por pantalla la cadena almacenada en la variable resultado