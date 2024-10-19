/*5. Buscar el índice de un elemento
Escribe una función que reciba un arreglo y un valor, y retorne el índice del valor en
el arreglo (o -1 si no existe).*/

let indiceElemento
function buscarIndice(arr, valor) {
    indiceElemento = arr.indexOf(valor)
    return indiceElemento
}
let arreglo = [10, 20, 30, 40, 50]
let valorABuscar = 30
console.log(buscarIndice(arreglo, valorABuscar)) // Salida: 2

// Si el valor no existe aparecera la salida: -1
valorABuscar = 70
console.log(buscarIndice(arreglo, valorABuscar))
// La variable 'indiceElemento' ahora está accesible fuera de la función, entoces la Salida: -1 (si no existe) o el índice correspondiente

