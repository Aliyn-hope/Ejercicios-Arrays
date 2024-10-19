/*2. Encuentra el mayor número
Escribe una función que encuentre el número más grande en un arreglo de
números.*/


let mayor
function numeroGrande(arr) {
    mayor = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i]
        }
    }
    return mayor 
}
const NumeroGrande = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
console.log("El número más grande es: " + numeroGrande(NumeroGrande))
