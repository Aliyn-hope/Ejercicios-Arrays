/*7. Todos los números son mayores que "n"
Dado un arreglo de números y un número n, usa every() para verificar si todos los
números son mayores que n.*/

let todosMayores

function verificarTodosMayores(arr, n) {
    todosMayores = arr.every(numero => numero > n)
    return todosMayores
}

let arregloNumeros = [10, 20, 30, 40, 50];
let n = 5;
console.log(verificarTodosMayores(arregloNumeros, n))
n = 35;
console.log(verificarTodosMayores(arregloNumeros, n))

