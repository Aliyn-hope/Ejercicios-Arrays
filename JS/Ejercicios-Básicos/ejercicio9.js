/*9. Filtrar números pares
Dado un arreglo de números, retorna solo los números pares usando filter().*/

let numerosPares
function filtrarPares(arr) {
    numerosPares = arr.filter(num => num % 2 === 0)
    return numerosPares
}
console.log(filtrarPares([1, 2, 3, 4, 5, 6, 12, 17, 38, 97]))
