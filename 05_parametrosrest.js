// Crear una funcion que permita ingresar un nombre de curso y varios estudiantes
var curso = function (nombreCurso) {
    var estudiantes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        estudiantes[_i - 1] = arguments[_i];
    }
    console.log("El curso " + nombreCurso + " tiene inscritos " + estudiantes);
};
curso('TYPESCRIPT', 'MATEO', 'MARCOS', 'LUCAS', 'JUAN');
