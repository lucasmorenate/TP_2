var notas = [];
let temp;
for (let i = 0; i < 5; i++) {
    temp = parseInt(prompt("ingrese una calificacion: "));
    if (temp >= 1 && temp < 11) {
        notas.push(temp);
    } else {
        alert("vuelva a ingresar la calificacion.");
        i = i - 1;
    }

}
function promedio(prom) {
    let suma = 0
    for (let i = 0; i < 5; i++) {
        suma = suma + prom[i];
    }
    suma = suma / 5;
    if (suma < 6) {
        document.write("Reprobado");
    } else if (suma >= 6 && suma <= 8) {
        document.write("Aprobado");
    } else {
        document.write("Sobresaliente");
    }

}
promedio(notas);