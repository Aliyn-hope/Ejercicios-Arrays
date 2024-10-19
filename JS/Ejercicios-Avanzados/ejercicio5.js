/*5. Comprobar si un arreglo está vacío
Escribe una función que verifique si un arreglo está vacío (sin usar length directamente).*/

function comprobarArregloVacio(arr) {
    return arr.some(() => true) ? "No está vacío" : "Está vacío"
}

let arreglo1 = []
console.log(comprobarArregloVacio(arreglo1))

let arreglo2 = [1, 2, 3]
console.log(comprobarArregloVacio(arreglo2))
