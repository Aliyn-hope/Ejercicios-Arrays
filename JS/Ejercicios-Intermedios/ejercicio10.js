/*10. Producto de todos los elementos
Escribe una función que reciba un arreglo de números y use reduce() para calcular
el producto de todos los números.*/


let productoTotal
function calcularProducto(arr) {
    productoTotal = arr.reduce((producto, numero) => producto * numero, 1)
    return productoTotal
}
let arregloNumeros = [1, 2, 3, 4, 5];
console.log(calcularProducto(arregloNumeros))


