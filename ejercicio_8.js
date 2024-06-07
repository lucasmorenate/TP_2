
function encontrarPrimeraVocal(texto) {
    // Convertimos el texto a minusculas para comparar con las vocales con toLowerCase
    texto = texto.toLowerCase();
    var vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
    for (var i = 0; i < texto.length; i++) {
        for (var j = 0; j < vocales.length; j++) {
            if (texto[i] === vocales[j]) {
                return "la letra '" + texto[i] + "' es la primer vocal y esta en la posicion " + (i + 1);
            }
        }
    }
    // Si no se encuentra ninguna vocal, se devuelve un mensaje 
    return "no se encontraron vocales en el texto.";
}
var textoUsuario = prompt("introduce un texto: ");
var resultado = encontrarPrimeraVocal(textoUsuario);
document.write(resultado);
