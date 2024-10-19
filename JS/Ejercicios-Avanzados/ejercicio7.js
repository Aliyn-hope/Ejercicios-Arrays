/*7. Contar ocurrencias de un valor
Dado un arreglo de valores, cuenta cuántas veces aparece un valor específico
usando reduce().*/


let contador

function contarOcurrencias(arr, valorBuscado) {
    contador = arr.reduce((acc, valor) => (valor === valorBuscado ? acc + 1 : acc), 0)
    return contador
}

let arregloValores = [1, 2, 3, 2, 4, 2, 5];
console.log(contarOcurrencias(arregloValores, 2))

