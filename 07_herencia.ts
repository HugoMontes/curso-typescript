// Crear la clase padre
class Padre{
    // Atributos de clase
    public nombre:string
    public edad:number
    // Constructor de clase
    constructor(nombre:string, edad:number){
        this.nombre = nombre
        this.edad = edad
    }
    // Metodo de clase
    mostrarDatosPadre():void{
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Edad: ${this.edad}`)
    }
}
// Crear la clase hijo que hereda de padre
class Hijo extends Padre{
    // Atributos de clase
    public apellido:string
    // Constructor de clase hijo
    constructor(nombre:string, edad:number, apellido:string){
        // Llamar al constructor de la clase padre
        super(nombre, edad)
        this.apellido = apellido
    }
    // Metodo de la clase
    mostrarDatosHijo():void {
        this.mostrarDatosPadre();
        console.log(`Apellido: ${this.apellido}`);
    }
}
// Instanciar una clase
const hijo1 = new Hijo('Pedro', 22, 'Perez')
console.log(`Bienvenido ${hijo1.nombre}`);
hijo1.mostrarDatosHijo()


