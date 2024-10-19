/* 3. Promedio de números
Dado un arreglo de números, crea una función que calcule y retorne el promedio de
esos números.*/

function calcularPromedio(arr) {
    const suma = arr.reduce((acc, num) => acc + num, 0)
    return suma / arr.length
}

console.log(calcularPromedio([10, 8, 10, 9,8.5]))