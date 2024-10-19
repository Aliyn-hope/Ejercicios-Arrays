/*3. Palabras más largas que "n" letras
Escribe una función que, dado un arreglo de palabras y un número n, devuelva las
palabras que tengan más de nletras.*/


let palabrasFiltradas;  

function palabrasMasLargas(arr, n) {
    palabrasFiltradas = arr.filter(palabra => palabra.length > n);
    return palabrasFiltradas;
}
let palabras = ["Pero", "Luciernaga", "Banana", "Leche", "Atardecer", "Pan"];
let n = 5;
console.log(palabrasMasLargas(palabras, n)); 


