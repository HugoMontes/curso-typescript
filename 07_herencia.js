var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Crear la clase padre
var Padre = /** @class */ (function () {
    // Constructor de clase
    function Padre(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // Metodo de clase
    Padre.prototype.mostrarDatosPadre = function () {
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + this.edad);
    };
    return Padre;
}());
// Crear la clase hijo que hereda de padre
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    // Constructor de clase hijo
    function Hijo(nombre, edad, apellido) {
        var _this = 
        // Llamar al constructor de la clase padre
        _super.call(this, nombre, edad) || this;
        _this.apellido = apellido;
        return _this;
    }
    // Metodo de la clase
    Hijo.prototype.mostrarDatosHijo = function () {
        this.mostrarDatosPadre();
        console.log("Apellido: " + this.apellido);
    };
    return Hijo;
}(Padre));
// Instanciar una clase
var hijo1 = new Hijo('Pedro', 22, 'Perez');
console.log("Bienvenido " + hijo1.nombre);
hijo1.mostrarDatosHijo();
