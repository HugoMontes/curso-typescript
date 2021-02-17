var Empleado = /** @class */ (function () {
    // Constructor de la clase
    function Empleado(nombre, sueldo, contrato) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.contrato = contrato;
    }
    // Metodos de la clase
    Empleado.prototype.mostrarDatos = function () {
        console.log("DATOS EMPLEADO");
        console.log("Nombre: " + this.nombre);
        console.log("Sueldo: " + this.sueldo);
        console.log("Contrato: " + this.contrato);
    };
    return Empleado;
}());
// Instanciando un objeto
var emp1 = new Empleado('Juan', 4500, true);
console.log("Bienvenido " + emp1.nombre);
emp1.mostrarDatos();
