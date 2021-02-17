// // Declarar una función tradicional
// function sumar(num1:number, num2:number):void {
//     console.log(num1 + num2)
// }
// sumar(10, 20)

// // Convertir a funcion flecha
// const sumar = (num1:number, num2:number):void => {
//     console.log(num1 + num2)
// }
// sumar(10, 50)

// Parametro opcional
// Indicar que num2 sea opcional con ?
const sumar = (num1:number, num2?:number):void => {
    // Verificar si la variable fue definida
    if(typeof num2 === 'undefined'){
        console.log(num1)        
    }else{
        console.log(num1 + num2)
    }    
}
sumar(10, 50)
sumar(10)

// // Funcion con un solo argumento
// // En este caso los parentesis son opcionales
// const sumar = num1 => {
//     console.log(num1 + 1)
// }
// sumar(10)

// // Retornar un valor
// const sumar = num1 => {
//     return num1 + 1
// }
// console.log(sumar(10))

// // Retornar un valor
// // Las llaves y el return se pueden omitir
// const sumar = num1 => num1 + 1
// console.log(sumar(10))

// // Parametros por defecto
// const sumar = (num1 = 5) => (
//     'La suma es: ' + (num1 + 1)
// )
// let resultado = sumar()
// console.log(resultado);
