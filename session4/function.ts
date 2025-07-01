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
const subtraction = function (
    number1: number, 
    number2: number, 
    name: string = "Radithya", //default parameter
    name1?: string //optional parameter, bisa tidak dipanggil argumentnya
    ){ 
    console.log(name);
    return number1 - number2
};

console.log(subtraction(5,3, "Romero")); // memanggil dengan nama variable

const myFunc = function (a:string, b:string, ...args:string[]){ // rest parameter, bebas menambahkan argumen apa pun
    console.log(a);
    console.log(b);
    console.log(args);
}

console.log(myFunc("Radithya", "Romero", "tes1", "tes2", "tes3"));

function getMessage(firstName:string) {
    function sayHello(){
        return "Hello" + " " + firstName;
    }

    function welcomeMessage(){
        return "Welcome to Purwadhika";
    }

    return `${sayHello()}, ${welcomeMessage()}`;
}

const message:string = getMessage("Radithya");
console.log(message);

//recursive fucntion
function countDown(fromNumber: number) {
    console.log(fromNumber);

    let nextNumber: number  = fromNumber - 1;

    if(nextNumber > 0){
        countDown(nextNumber);
    }
    
}
countDown(5);

// ====== Arrow Function ======
const square2 = (number: number) => number * number; // jika tidak ada statement sebelum return

const square3 = (number: number, number2: number) => { //setelah deklarasi langsung return
    console.log(number2);
    
    return number * number;
};

console.log(square2(2));
console.log(square3(3, 1));

//isNan
console.log(isNaN(5)); //false

