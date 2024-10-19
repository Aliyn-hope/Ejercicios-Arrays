/* 8. Buscar elemento
Escribe una función que reciba un arreglo y un valor, y retorne true si el valor existe
en el arreglo y false si no.*/


let falseTrue
function buscarElemento(arr, valor) {
    falseTrue = arr.includes(valor)
    return falseTrue
}
const valorBuscado = prompt("Ingresa el valor que deseas buscar:");
console.log(buscarElemento([1,2,3,4,5,6,7,8,9,10], Number(valorBuscado))); 
