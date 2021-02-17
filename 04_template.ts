// // Ejemplo sin template string
// const saludar = (nombre:string):string => {
//     return 'Buenas noches ' + nombre 
// }
// const mensaje = saludar('Pedro')
// console.log(mensaje) 

// // Usando template string
// const saludar = (nombre:string):string => {
//     // Adicionar backtils con ALT 96
//     return `Buenas noches ${nombre}` 
// }
// const mensaje = saludar('Pedro')
// console.log(mensaje) 

// Ejecutar operadores logico aritmeticos
const sumar = (num1:number, num2:number):string => {
    return `La suma de ${num1} + ${num2} = ${num1 + num2}` 
}
const resultado = sumar(10,20)
console.log(resultado)
