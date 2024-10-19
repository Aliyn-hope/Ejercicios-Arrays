/* 10. Multiplicar por 2
Crea una función que multiplique cada número de un arreglo por 2 usando map().*/

let multiplicarNumeros
function multiplicarPorDos(arr) {
   multiplicarNumeros = arr.map(num => num * 2)
    return multiplicarNumeros
}


console.log(multiplicarPorDos([10, 3, 45, 8, 19]))
