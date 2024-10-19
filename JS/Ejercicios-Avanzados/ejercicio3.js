/*3. Plana un arreglo anidado
Dado un arreglo que contiene arreglos anidados, usa flat() para aplanarlo en un solo
nivel.*/

const arregloAnidado = [1, 2, [3, 4], [5, [6, 7]], 8]
const arregloAplanado = arregloAnidado.flat(2)

console.log(arregloAplanado)
