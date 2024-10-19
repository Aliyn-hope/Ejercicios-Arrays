/*4. Reemplazar valores en un arreglo
Dado un arreglo de números, usa map() para reemplazar cada número negativo con
su valor absoluto.*/

let arregloTransformado

function reemplazarNegativosConAbsolutos(arr) {
    arregloTransformado = arr.map(numero => Math.abs(numero))
    return arregloTransformado
}
let arregloNumeros = [-1, -2, 3, -4, 5]
console.log(reemplazarNegativosConAbsolutos(arregloNumeros))

