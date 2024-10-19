/*6. Concatenar arreglos
Escribe una función que tome dos arreglos y los combine en uno solo.*/

let arregloConcatenado;

function concatenarArreglos(arr1, arr2) {
    arregloConcatenado = arr1.concat(arr2)
    return arregloConcatenado
}

console.log(concatenarArreglos([1, 2], [4, 6]))
