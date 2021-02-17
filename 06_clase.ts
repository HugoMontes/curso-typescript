class Empleado {
    // Atributos de la clase    
    public nombre:string   
    public sueldo:number
    public contrato:boolean
    // Constructor de la clase
    constructor(nombre:string, sueldo:number, contrato:boolean){
        this.nombre = nombre
        this.sueldo = sueldo
        this.contrato = contrato
    }
    // Metodos de la clase
    mostrarDatos():void{
        console.log(`DATOS EMPLEADO`);        
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Sueldo: ${this.sueldo}`)
        console.log(`Contrato: ${this.contrato}`)
    }
}
// Instanciando un objeto
const emp1 = new Empleado('Juan', 4500, true)
console.log(`Bienvenido ${emp1.nombre}`)
emp1.mostrarDatos();