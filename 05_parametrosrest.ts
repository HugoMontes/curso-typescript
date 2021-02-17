// Crear una funcion que permita ingresar un nombre de curso y varios estudiantes
const curso = (nombreCurso:string, ...estudiantes:string[]):void => {
    console.log(`El curso ${nombreCurso} tiene inscritos ${estudiantes}`)
}
curso('TYPESCRIPT', 'MATEO', 'MARCOS', 'LUCAS', 'JUAN')