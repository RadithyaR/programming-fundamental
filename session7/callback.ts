// ====== Callback Function =======
//function utama
const test =(cb: () => string):string => {
    return cb();
}

//callback function
const cb = () => {
    return "test";
}

console.log(test(cb));

//===== function sequence =====
let result : string;

function greet(str: string){
    result = str;
}

function hello(){
    greet("hello");
}

function arigatou(){
    greet("arigatou");
}

arigatou();
hello();
console.log(result);

function calculator(a:number,b:number, callback :() => number){
    callback(a + b);
}

// === Synchronus ===
console.log("Seq 1");
console.log("Seq 2");
console.log("Seq 3");

//=== Asynchronus ===
function message(){
    console.log("Ini Pesan");

}
console.log("async task 1");
setTimeout(message, 3000);
console.log("async task 3");
