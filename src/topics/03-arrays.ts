// INTERFACES
interface IPet {
  name: string;
  age: string;
  specie: string;
  isFemale: boolean;
  vaccines: string[];
}

// const elements = [];
// const elements = [2];
const elements = [2, "abc", false, { name: "Pedro" }];
console.log("Elementos: ", elements);

const messages: string[] = ["Hello", "World"];
console.log("Messages: ", messages);

// objetos mascotas
const petBoby: IPet = {
  name: "Boby",
  age: "9 años",
  specie: "Perro",
  isFemale: false,
  vaccines: ["Rabia"],
};

const petKitty: IPet = {
  name: "Kitty",
  age: "5 años",
  specie: "Gato",
  isFemale: true,
  vaccines: ["Rabia", "Distemper"],
};

const petPula: IPet = {
  name: "Paula",
  age: "2 años",
  specie: "Loro",
  isFemale: true,
  vaccines: ["Rabia"],
};

// array de objetos
const pets: IPet[] = [petBoby, petKitty, petPula];
console.log("Mis mascotas : ", pets);

const petsFemale = pets.filter((pet) => {
  return pet.isFemale;
});

console.log("Mascotas hembras: ", petsFemale);

export {};
