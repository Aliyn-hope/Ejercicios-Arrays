/*7. Eliminar duplicados
Dado un arreglo de números, retorna un nuevo arreglo con los valores únicos (sin
duplicados).*/

let sinDuplicados;
function eliminarDuplicados(arr) {
    sinDuplicados = [...new Set(arr)]
    return sinDuplicados
}

console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]))