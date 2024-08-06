console.log("****************************************");
console.log("****************OBJECTS*****************");
console.log("****************************************");

interface ICustomer {
  name: string;
  lastName: string;
  email: string;
  address: {
    description: string;
    city: string;
    country: string;
  };
}

const customer: ICustomer = {
  name: "Melani",
  lastName: "Perez",
  email: "melani.perez@gmail.com",
  address: {
    description: "Av. Buenos Aires 123",
    city: "La Paz",
    country: "Bolivia",
  },
};

console.log("*** Sin usar destructuracion");
console.log("Nombre: ", customer.name);
console.log("Apellido: ", customer.lastName);
console.log("Ciudad: ", customer.address.city);

console.log("*** Usando destructuracion");
const { name, lastName, address: { city } } = customer;
console.log("Nombre: ", name);
console.log("Apellido: ", lastName);
console.log("Ciudad: ", city);

// const email = customer.email;
const { email } = customer;
console.log("Email: ", email);

console.log("****************************************");
console.log("****************ARRAYS******************");
console.log("****************************************");

console.log("*** Sin usar destructuracion");
const frutas: string[] = ["Limon", "Manzana", "Frutilla"];
console.log("Fruta 1: ", frutas[0]);
console.log("Fruta 2: ", frutas[1]);

console.log("*** Usando destructuracion");
const [fru1, fru2] = frutas;
console.log("Fruta 1: ", fru1);
console.log("Fruta 2: ", fru2);

const [ , , myfru] = frutas;
console.log("Fruta 3: ", myfru);

const [ , , , otherfru = 'No existe la fruta'] = frutas;
console.log("Fruta 4: ", otherfru);

export {};
