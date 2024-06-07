var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// 1. Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras.
var textoMayor = "";
for (var i = 0; i < valores.length; i++) {
    if (typeof valores[i] === "string" && valores[i].length > textoMayor.length) {
        textoMayor = valores[i];
    }
}

// 2. Imprimir estos elementos de menor a mayor cantidad de letras.
var textosOrdenados = [];
for (var i = 0; i < valores.length; i++) {
    if (typeof valores[i] === "string") {
        var inserted = false;
        for (var j = 0; j < textosOrdenados.length; j++) {
            if (valores[i].length < textosOrdenados[j].length) {
                textosOrdenados.splice(j, 0, valores[i]);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            textosOrdenados.push(valores[i]);
        }
    }
}

document.write("Elementos de menor a mayor cantidad de letras: ", textosOrdenados, "<br>");

// 3. Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta, multiplicación y división) realizadas con los dos elementos numéricos
var numeros = [];
for (var i = 0; i < valores.length; i++) {
    if (typeof valores[i] === "number") {
        numeros.push(valores[i]);
    }
}
var suma = numeros[0] + numeros[1];
var resta = numeros[0] - numeros[1];
var multiplicacion = numeros[0] * numeros[1];
var division = numeros[0] / numeros[1];

document.write("Suma:", suma, "<br>");
document.write("Resta:", resta, "<br>");
document.write("Multiplicación:", multiplicacion, "<br>");
document.write("División:", division, "<br>");