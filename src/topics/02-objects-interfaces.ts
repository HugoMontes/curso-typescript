// INTERFACES
interface IPerson {
  name: string;
  lastName: string;
  age: number;
}

interface IStudent extends IPerson {
  career: string;
  university: string;
}

// OBJECTS
// const tony =  { nombre: 'Tony Stark' };
// const tony: IPerson = { nombre: 'Tony Stark' };
// const tony: IPerson = { name: '', lastName: '', age: 0 };

const juan: IPerson = {
  name: 'Juan',
  lastName: 'Perez',
  age: 45,
};

const studentMaria: IStudent = {
  name: 'Maria',
  lastName: 'Gonzales',
  age: 18,
  career: 'Ingenieria Comercial',
  university: 'Universidad Mayor de San Andres',
};

console.log('Datos de Juan: ', juan);
console.log('Datos de Maria: ', studentMaria);
console.log('Edad del estudiante Maria: ', studentMaria.age);

export {};
