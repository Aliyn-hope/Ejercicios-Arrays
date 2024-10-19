/*8. Algunos números son pares
Dado un arreglo de números, usa some() para verificar si al menos uno es par.*/


const numeros = [1, 3, 5, 7, 10]
function hayNumeroPar(arr) {
    return arr.some(numero => numero % 2 === 0)
}
const resultado = hayNumeroPar(numeros);

if (resultado) {
    console.log("En este arreglo hay al menos un número par.")
} else {
    console.log("No hay números pares en este arreglo.")
}

// Ejemplo de que no hay numeros pares
const numerosImpares = [1, 3, 5, 7]
const resultado2 = hayNumeroPar(numerosImpares)

if (resultado2) {
    console.log("En este arreglo hay al menos un número par en el arreglo.")
} else {
    console.log("No hay números pares en este arreglo.")
}
