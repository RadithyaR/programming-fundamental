"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var obj = {
    name: "Radithya",
    age: 22,
    Email: "radit$gmail.com",
};
var jsonObj = JSON.stringify(obj);
console.log(JSON.stringify(obj)); //dari obj ke json
console.log(JSON.parse(jsonObj)); //dari json ke obj
exports.default = obj;
