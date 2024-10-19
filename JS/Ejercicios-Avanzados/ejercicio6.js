/*6. Combina varios arreglos y ordena
Dado varios arreglos de números, combínalos todos en un solo arreglo y ordénalo de
menor a mayor.*/


let arregloCombinado

function combinarYOrdenarArreglos(...arreglos) {
    arregloCombinado = arreglos.flat().sort((a, b) => a - b)
    return arregloCombinado
}

let arreglo1 = [3, 1, 4]
let arreglo2 = [2, 5, 0]
let arreglo3 = [6, 9, 8]
console.log(combinarYOrdenarArreglos(arreglo1, arreglo2, arreglo3))
