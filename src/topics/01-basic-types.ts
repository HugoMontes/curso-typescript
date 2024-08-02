// Tipos de datos en TypeScript
// number, string, boolean, Date, any

//#region NUMBER

console.log("****************************************");
console.log("****************NUMBER******************");
console.log("****************************************");

const age = 15;
//age = 18;
console.log(age);

let weight1 = 70.5;
//weight1 = 'abc';
console.log(weight1);

let weight2: number;
//weight2 = 'abc';
weight2 = 45;
console.log(weight2);

// Pasar texto a entero
const ageText = "31";
console.log("parseInt => ", parseInt(ageText));

// Pasar texto a decimal
const weightText = "70.1";
console.log("parseFloat => ", parseFloat(weightText));

// Opcion general para manejar enteros y decimales
console.log("Number => ", Number(weightText));
console.log("Number => ", Number("abc"));

//#endregion

//#region STRING
console.log("****************************************");
console.log("****************STRING******************");
console.log("****************************************");

// Es redundante especificar el tipo si yha lo inicialisaste con un valor
const name: string = "Juan";
const lastName = "Peres";
console.log("Nombre: ", name);
console.log("Apellido: ", lastName);

console.log("************CONCATENACION***************");
console.log(name + " " + lastName);
// Concatenar usando Template Strings o String Interpolation
// Usar los bagtils ALT + 96
const fullName = `Template String => ${name} ${lastName}`;
console.log(fullName);

//#endregion

// Exportar el archivo
export {};
