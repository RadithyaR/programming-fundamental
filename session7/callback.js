// ====== Callback Function =======
//function utama
var test = function (cb) {
    return cb();
};
//callback function
var cb = function () {
    return "test";
};
console.log(test(cb));
//===== function sequence =====
var result;
function greet(str) {
    result = str;
}
function hello() {
    greet("hello");
}
function arigatou() {
    greet("arigatou");
}
arigatou();
hello();
console.log(result);
function calculator(a, b, callback) {
    callback(a + b);
}
// === Synchronus ===
console.log("Seq 1");
console.log("Seq 2");
console.log("Seq 3");
//=== Asynchronus ===
function message() {
    console.log("Ini Pesan");
}
console.log("async task 1");
setTimeout(message, 3000);
console.log("async task 3");
