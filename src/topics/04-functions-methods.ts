console.log("****************************************");
console.log("****************METHODS*****************");
console.log("****************************************");

// function showMessage() {
function showMessage(): void {
  console.log("Hellow World!");
}

const greet = (name: string): void => {
  console.log(`Hola ${name}`);
};

showMessage();
greet("Juan");

console.log("****************************************");
console.log("****************FUNCTIONS***************");
console.log("****************************************");

function sum1(a: number, b: number) {
  return a + b;
}

const sum2 = (a: number, b: number) => {
  return a + b;
};

console.log("1) Suma de números: ", sum1(5, 6));
console.log("2) Suma de números: ", sum2(10, 6));

// *************************************
// ***** Esto es una mala practica *****
// *************************************
const showStudentData = (
  name: string,
  lastName: string,
  age: number,
  career: string,
  university: string,
  cycle: number
) => {
  console.log("****Los datos del estudiante son los siguientes:***");
  console.log("Name: ", name);
  console.log("Apellidos: ", lastName);
  console.log("Edad: ", age);
  console.log("Carrera: ", career);
  console.log("Universidad: ", university);
  console.log("Ciclo actual: ", cycle);
};

showStudentData("Bill", "Gates", 50, "Ingenieria", "UMSA", 5);

// *************************************
// ***** Refactorizando el codigo  *****
// *************************************
interface IPerson {
  name: string;
  lastName: string;
  age: number;
}

interface IStudent extends IPerson {
  career: string;
  university: string;
  cycle?: number;
}

const showStudentDataRefactor = (data: IStudent) => {
  console.log("****Los datos del estudiante son los siguientes:***");
  console.log("Name: ", data.name);
  console.log("Apellidos: ", data.lastName);
  console.log("Edad: ", data.age);
  console.log("Carrera: ", data.career);
  console.log("Universidad: ", data.university);
  console.log("Ciclo actual: ", data.cycle);
  console.log(data.cycle! + 10);
};

const studentMaria: IStudent = {
  name: "Maria",
  lastName: "Gonzales",
  age: 18,
  career: "Ingenieria Comercial",
  university: "Universidad Mayor de San Andres",
};

showStudentDataRefactor(studentMaria);

export {};
