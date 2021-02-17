// Declarar una variable generica
let titulo = 'Hola TypeScript'      
// Variable de tipo cadena
let nombre:string = 'Juan Peres'
// No se puede asignar un valor que no corresponde
// nombre = 50             // out: Error   
// Variable de tipo numero
let edad:number = 25                
// Variable de tipo booleano
let esMayor:boolean = true  
// Variable de tipo vector    
let colores:Array<string> = ['Rojo', 'Amarillo', 'Verde']
// Alternativa para declarar array
let frutas:string[] = ['Limon', 'Piña', 'Sandia']
// Tupla que permite contener distintos tipos
let tupla: [number, string, boolean]
tupla = [23, 'Pedro', true]
// Mostrar los valores
console.log(titulo)
console.log(nombre)
console.log(edad)
console.log(esMayor)
console.log(colores)
console.log(tupla)



