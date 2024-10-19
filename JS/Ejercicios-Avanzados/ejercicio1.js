/*ejercicios Avanzados 1. Crear un arreglo a partir de un string
Escribe una función que reciba una cadena de texto y la convierta en un arreglo de
palabras.*/


let arregloPalabras

function convertirCadenaEnArreglo(cadena) {
    arregloPalabras = cadena.split(" ")
    return arregloPalabras
}

let texto = "Hola, esta soy yo programando, animos."
console.log(convertirCadenaEnArreglo(texto))

