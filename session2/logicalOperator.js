// && -> and
// || -> or
// ! -> not
var car = "Honda";
if (car === "BMW" || car === "Toyota") {
    console.log("1. This car is awesome");
}
var car1 = "BMW";
var car2 = "Toyota";
if (car1 === "BMW" && car2 === "Toyota") {
    console.log("2. This car is awesome");
}
if (!(car === "Honda")) {
    console.log("3. This car is awesome");
}
//short-circuiting
var value1 = "";
var result = value1 && "Truthy Value";
console.log(result);
