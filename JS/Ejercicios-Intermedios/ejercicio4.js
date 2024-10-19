/*4. Unir en una cadena
Dado un arreglo de palabras, únelas en una sola cadena separada por comas.*/

let cadenaUnida; 
function unirEnCadena(arr) {
    cadenaUnida = arr.join(", ")
    return cadenaUnida
}
let palabras = ["manzana", "pera", "chocolate", ]
console.log(unirEnCadena(palabras))


