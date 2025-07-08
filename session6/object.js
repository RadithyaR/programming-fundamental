var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
//How To Create Object
var obj = {}; // common use
var obj1 = new Object();
var car = {
    brand: "BMW",
    model: "BMW M3",
    price: 10000000
};
var comp = {
    ram: 16,
    processor: "AMD",
    vga: "nvidia",
    turnOn: function () { }, //method
};
var count = 0;
var article = {
    id: 2,
    name: "Radithya Romero",
    email: "radithya.romero@gmail.com",
    title: "Title Article",
    description: "Ini Description"
};
;
var person = {
    name: "Radithya Romero",
    age: 22,
};
// add property
person.hobby = "Membaca";
console.log(person);
//delete property
delete person.age;
console.log(person);
// accessing the value within the object
console.log(person.name); // i <--- use for static key
console.log(person["name"]); //2 <--- use for dynamic key
//optional chaining, safe way to access nested object properties
var customer = {
    address: {
        street: "asd"
    }
};
console.log(customer.name); //undefined
console.log((_a = customer.name) === null || _a === void 0 ? void 0 : _a.firstName);
// ==== Accessing Key ====
var customerC = {
    name: "Radithya Romero",
    email: "radithyaromero@gmail.com",
};
console.log(Object.keys(customerC)); //["name", "email"] <--- array of keys, bisa ditambah built-in array
// ==== Mutable & Immutable ====
//Immutable
var firstName = "Radithya";
var newFirstName = firstName;
newFirstName = "Romero";
console.log(firstName);
console.log(newFirstName);
//Mutable
var personA = {
    name: "Radithya",
    age: 22
};
var personB = personA;
personB.age = 30;
console.log(personA);
console.log(personB);
// for in loop perulangan untuk sebuah object
var personC = {
    name: "Purwadhika",
    age: 22
};
for (var key in personC) {
    console.log(key);
    console.log(personC[key]);
}
//=== Destructuring Assignment ===
var personD = {
    nama: "Purwadhika",
    umur: 40
};
//const nama = personD.nama;
//const nama = personD.umur;
var nama = personD.nama, umur = personD.umur;
console.log(nama);
console.log(umur);
//bisa juga digunakan pada array
var arrPerson = ["Radithya", "Romero"];
var namaDepan = arrPerson[0], namaBelakang = arrPerson[1];
console.log(namaDepan);
console.log(namaBelakang);
// === Spread Operator ===\
/***
 * to quickly copy all or
 * part of an existing array or object into another array
 * or object.
 */
var personE = {
    nama: "Purwa",
    umur: 40
};
var personEE = {
    nama: "Dhika",
    umur: 20
};
var arrPersonA = ["Radithya", "Romero"];
var personF = __assign(__assign({}, personE), personEE); //jika key sama, yang diambil di object yg terakhir
console.log(personF);
// ===== this keyword ====
var personG = {
    name: "Radithya",
    age: 22,
    greet: function () {
        return "Halo ".concat(this.name);
    }
};
console.log(personG.greet());
//built-in Method
var personH = {
    name: "Radithya",
    age: 22,
};
//(string | number)[] ---> bisa berisi string or number
//el ----> [key,value]
Object.entries(personH).forEach(function (_a) {
    var key = _a[0], value = _a[1];
    console.log("".concat(key, " = ").concat(value));
});
