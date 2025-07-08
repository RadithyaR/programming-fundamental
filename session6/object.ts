//How To Create Object
const obj = {}; // common use

const obj1 = new Object();

//interface -> mendefinisikan tipe data dari sebuah object. Pakai (;)
interface Icar {
    brand: string;
    model: string;
    price: number;
    color?: string; // ? -> propertinya menjadi optional
}

const car: Icar = {
    brand: "BMW", 
    model: "BMW M3", 
    price:10000000
};

//Type -> mirip interface, tapi bukan hanya object saja. Pakai (;)
type Computer = {
    ram: number; 
    processor: string;
    vga: string;
    turnOn: () => void;
};

const comp: Computer = {
    ram : 16,
    processor : "AMD",
    vga: "nvidia",
    turnOn: () => {}, //method
};

type Count = Number;
const count: Count = 0;

//interface extend
interface IUser {
    id:number;
    name:string;
    email:string;
}

interface IArticle extends IUser{
    title: string;
    description: string;
}

const article: IArticle = {
    id : 2,
    name: "Radithya Romero",
    email: "radithya.romero@gmail.com",
    title: "Title Article",
    description: "Ini Description"
}

/**properti adalah asosiasi dari key dan value
A property's value can be a function, in
which case the property is known as a method. */

//===== add & delete =====
interface IPerson {
    name: string;
    age?: number;
    hobby?: string;
};

const person: IPerson = {
    name: "Radithya Romero",
    age: 22,
};

// add property
person.hobby = "Membaca"

console.log(person);

//delete property
delete person.age;

console.log(person);

// accessing the value within the object
console.log(person.name); // i <--- use for static key

console.log(person["name"]); //2 <--- use for dynamic key

//optional chaining, safe way to access nested object properties

const customer = {
    address: {
        street: "asd"
    }
};

console.log(customer.name); //undefined
console.log(customer.name?.firstName); 
 
// ==== Accessing Key ====
const customerC = {
    name: "Radithya Romero",
    email: "radithyaromero@gmail.com",
};

console.log(Object.keys(customerC)); //["name", "email"] <--- array of keys, bisa ditambah built-in array

// ==== Mutable & Immutable ====

//Immutable
let firstName = "Radithya";

let newFirstName = firstName;

newFirstName = "Romero";

console.log(firstName);
console.log(newFirstName);

//Mutable
let personA = {
    name: "Radithya",
    age: 22
}
let personB = personA;

personB.age = 30;

console.log(personA);
console.log(personB);

// for in loop perulangan untuk sebuah object
const personC = {
    name: "Purwadhika",
    age: 22
}

for (let key in personC){
    console.log(key);

    console.log(personC[key]);
}

//=== Destructuring Assignment ===
const personD = {
    nama: "Purwadhika",
    umur: 40
};

//const nama = personD.nama;
//const nama = personD.umur;
const { nama, umur } = personD;

console.log(nama);
console.log(umur);

//bisa juga digunakan pada array
const arrPerson = ["Radithya", "Romero"];

const [namaDepan, namaBelakang] = arrPerson;
console.log(namaDepan);
console.log(namaBelakang);

// === Spread Operator ===\
/***
 * to quickly copy all or
 * part of an existing array or object into another array
 * or object.
 */
const personE = {
    nama: "Purwa",
    umur: 40
};
const personEE = {
    nama: "Dhika",
    umur: 20
};

const arrPersonA = ["Radithya", "Romero"];

const personF = {...personE, ...personEE}; //jika key sama, yang diambil di object yg terakhir
console.log(personF);

// ===== this keyword ====
const personG = {
    name: "Radithya",
    age: 22,
    greet() {
        return `Halo ${this.name}`;
    }
};

console.log(personG.greet());

//built-in Method
const personH = {
    name: "Radithya",
    age: 22,
};

//(string | number)[] ---> bisa berisi string or number
//el ----> [key,value]
Object.entries(personH).forEach(([key,value]: (string | number)[]) => {
    console.log(`${key} = ${value}`);
});