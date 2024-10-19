/* Ejercicios básicos:
1. Suma de los elementos de un arreglo
Escribe una función que reciba un arreglo de números y retorne la suma de todos
sus elementos.*/


let suma = 0
function sumarElementos(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i]
       }
    return suma
}

const numeros = [1, 2, 3, 4, 5] 
const resultado = sumarElementos(numeros)
console.log("La suma de los elementos es:", resultado)