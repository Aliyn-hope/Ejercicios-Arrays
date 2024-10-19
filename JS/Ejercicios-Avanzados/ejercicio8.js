/*8. Transforma un arreglo de objetos
Dado un arreglo de objetos con propiedades {nombre: string, edad: number}, usa
map() para crear un nuevo arreglo que solo contenga los nombres.*/

let arregloNombres

function transformarArregloDeObjetos(arr) {
    arregloNombres = arr.map(objeto => objeto.nombre)
    return arregloNombres
}
let arregloObjetos = [
    { nombre: 'Alicia', edad: 30 },
    { nombre: 'Brenda', edad: 25 },
    { nombre: 'Carlos', edad: 35 }
]
console.log(transformarArregloDeObjetos(arregloObjetos))
