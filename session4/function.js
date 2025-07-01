//function
/**
 *
 * function namaFunction(parameter) {
 *      function body yang berisi statement
 *      yang akan dijalankan dan akan me-return
 *      sebuah value.
 * }
 */
//function declaration
function nama() {
    //function body ada di dalam scope
    return "Didit";
}
console.log(nama());
//function expression
//anonymus function, function yang tidak memiliki nama dan diwakili oleh variable
var subtraction = function (number1, number2, name, //default parameter
name1 //optional parameter, bisa tidak dipanggil argumentnya
) {
    if (name === void 0) { name = "Radithya"; }
    console.log(name);
    return number1 - number2;
};
console.log(subtraction(5, 3, "Romero")); // memanggil dengan nama variable
var myFunc = function (a, b) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    console.log(a);
    console.log(b);
    console.log(args);
};
console.log(myFunc("Radithya", "Romero", "tes1", "tes2", "tes3"));
function getMessage(firstName) {
    function sayHello() {
        return "Hello" + " " + firstName;
    }
    function welcomeMessage() {
        return "Welcome to Purwadhika";
    }
    return "".concat(sayHello(), ", ").concat(welcomeMessage());
}
var message = getMessage("Radithya");
console.log(message);
//recursive fucntion
function countDown(fromNumber) {
    console.log(fromNumber);
    var nextNumber = fromNumber - 1;
    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(5);
// ====== Arrow Function ======
var square2 = function (number) { return number * number; }; // jika tidak ada statement sebelum return
var square3 = function (number, number2) {
    console.log(number2);
    return number * number;
};
console.log(square2(2));
console.log(square3(3, 1));
//isNan
console.log(isNaN(3));
