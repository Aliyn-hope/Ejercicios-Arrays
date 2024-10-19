/*9. Suma acumulada
Dado un arreglo de números, usa reduce() para retornar la suma acumulada de los
elementos.*/

let sumaAcumulada
function calcularSumaAcumulada(arr) {
    sumaAcumulada = arr.reduce((acumulador, numero) => acumulador + numero, 0)
    return sumaAcumulada
}

let arregloNumeros = [1, 3, 6, 20]
console.log(calcularSumaAcumulada(arregloNumeros)) 

console.log(sumaAcumulada) // Aparecera la sumatoria de calcularSumAcumulada, es decir la suma cumulada de los elementos.
