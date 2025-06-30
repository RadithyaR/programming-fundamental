// && -> and
// || -> or
// ! -> not

const car: string = "Honda";
if(car === "BMW" || car === "Toyota" ){
    console.log("1. This car is awesome");
}

const car1: string = "BMW";
const car2: string = "Toyota";

if(car1 === "BMW" && car2 === "Toyota" ){
    console.log("2. This car is awesome");
}

if (!(car === "Honda")){
    console.log("3. This car is awesome");
}

//short-circuiting
const value1: string = "Hello";
const result: string = value1 && "Truthy Value"; // jika true menampilkan yang kanan
console.log(result);

const myName: string = "Radit";
const result2: string = value1 || "Guest"; //jika true, menampilkan yang kanan. jika keduanya false, tidak ada yang ditampilkan.
console.log(result2);