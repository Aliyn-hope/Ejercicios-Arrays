/*10. Combinar objetos de dos arreglos
Dado dos arreglos de objetos, usa map() para combinar los objetos con el mismo
índice en un solo arreglo de objetos.*/

let objetosCombinados

function combinarObjetos(arr1, arr2) {
    objetosCombinados = arr1.map((obj, index) => ({
        ...obj,               // Spread operator para incluir propiedades de obj
        ...(arr2[index] || {}) // Verifica si arr2[index] existe, si no, usa un objeto vacío
    }));
    return objetosCombinados
}
const arr1 = [{a: 1}, {a: 2}]
const arr2 = [{b: 3}, {b: 4}]

console.log(combinarObjetos(arr1, arr2))

 