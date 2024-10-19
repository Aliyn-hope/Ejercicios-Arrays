/*6. Encontrar un elemento específico
Dado un arreglo de objetos, encuentra el primer objeto que tenga una propiedad
específica usando find().*/

const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Pedro", edad: 20 },
    { nombre: "Maria", edad: 28 }
]

function encontrarPersonaPorNombre(arr, nombreBuscado) {
    const personaEncontrada = arr.find(persona => persona.nombre === nombreBuscado)
    return personaEncontrada
}

const resultado = encontrarPersonaPorNombre(personas, "Ana");
console.log(resultado); 

const resultado2 = encontrarPersonaPorNombre(personas, "Luis");
console.log(resultado2); // Imprime: undefined (si no se encuentra). *Nota; El valor undefined aparece cuando la función find() 
                          //no encuentra un objeto en el arreglo que cumpla con la condición especificada, como ene ste caso.
