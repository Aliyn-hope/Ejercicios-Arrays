/*2. Eliminar falsy values
Dado un arreglo que contiene valores truthy y falsy, elimina todos los valores falsy
usando filter().**/


let arregloFiltrado
function eliminarFalsyValues(arr) {
    arregloFiltrado = arr.filter(valor => Boolean(valor))
    return arregloFiltrado
}

let arregloValores = [0, 1, false, 2, '', 3, null, 'texto', undefined, NaN]
console.log(eliminarFalsyValues(arregloValores))

