/*9. Agrupar por edades
Dado un arreglo de personas con edades, agrúpalas en diferentes grupos según la
década en la que se encuentren (20s, 30s, etc.) usando reduce().*/


const personas = [
    { nombre: "Alice", edad: 25 },
    { nombre: "Bob", edad: 32 },
    { nombre: "Charlie", edad: 45 },
    { nombre: "David", edad: 28 },
    { nombre: "Eve", edad: 38 },
    { nombre: "Frank", edad: 52 },
]
const agruparPorDecadas = (arr) => {
    return arr.reduce((acumulador, persona) => {
      
        const decada = Math.floor(persona.edad / 10) * 10; // Ej: 20 para 25, 30 para 32
        if (!acumulador[decada]) {
            acumulador[decada] = []
        }
        acumulador[decada].push(persona)
        
        return acumulador
    }, {})
}

const gruposPorDecadas = agruparPorDecadas(personas)

console.log(gruposPorDecadas)
