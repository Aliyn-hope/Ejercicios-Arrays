/*4. Invertir un arreglo
Escribe una función que tome un arreglo y lo devuelva invertido (sin usar reverse()).*/


let invertido = []

function invertirArreglo(arr) {
    invertido = []; 
    arr.forEach(num => invertido.unshift(num))
    return invertido
}

console.log(invertirArreglo([2, 4, 8, 12]))
