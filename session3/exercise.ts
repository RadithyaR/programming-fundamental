//display the multiplication table of a given integer
const input: number = 9;
const limit: number = 10;

for(let i = 1; i <= limit; i++){
    console.log(input + " x " + i);
}

//check whether a string is a palindrome or not.
const isPalindrome = (str:string) => {
    const arrStr = str.split("");

    const reverseArr = arrStr.reverse();

    const reverseStr = reverseArr.join("");

    if(str === reverseStr){
        return true;
    }

    return false;
};

console.log(`is palindrom = ${isPalindrome("ayam")}`);

//a code to convert centimeter to kilometer
const num:number = 100000;
const convertCm:number = 100000;

let cmToKm = num/convertCm;

console.log(`${num} cm = ${cmToKm} km`);

//a code to format number as currency (IDR)



// code to remove the first occurrence of a given “search string” from a string
const givenStr:string = "Hello World";
const searchStr = "ell"
const index = givenStr.indexOf(searchStr);//mencari lokasi searchStr pada givenStr
console.log(index);
let beforeStr = givenStr.substring(0, index); //string sebelum searchstr
let afterStr = givenStr.substring(index + searchStr.length);//string setelah searchStr
// console.log(beforeStr);
// console.log(afterStr);
console.log(beforeStr + afterStr);

//code to capitalize the first letter of each word in a string
const captWord:string = "hello world";

// a code to swap the case of each character from string 
const sentence = "The QuiCk BrOwN Fox";
let sentenceResult: string = "";

for(let i = 0; i < sentence.length;i++){
    let huruf = sentence.charAt(i);
    let isCapitalize = huruf === huruf.toUpperCase();
    if(!(huruf === huruf.toUpperCase())){
        isCapitalize = false;
    }
    // console.log(isCapitalize);
    let result: string;
    if(isCapitalize === true){
       result =  huruf.toLowerCase();
    }else{
       result = huruf.toUpperCase();
    }

    sentenceResult +=  result;
}

console.log(sentenceResult);

// a code to find the largest of two given integers
const num1 = 42;
const num2 = 27;

if(num1 > num2 ){
    console.log(`the Largest integer = ${num1}`);
}else if(num1 < num2){
    console.log(`the Largest integer = ${num2}`);
}else{
    console.log(`num1 = num2`)
}

// a conditional statement to sort three numbers
const no1 = 18;
const no2 = 27;
const no3 = 42;

let smallest: number;
let middle: number;
let biggest: number;

if(no1 < no2 && no1 < no3){
    smallest = no1;
}else if(no2 < no1 && no2 < no3){
    smallest = no2;
}else{
    smallest = no3;
}

if(no1 < no2 && no1 > no3){
    middle = no1;
}else if(no2 < no1 && no2 > no3){
    middle = no2;
}else{
    middle = no3;
}

if(no1 > no2 && no1 > no3){
    biggest = no1;
}else if(no2 > no1 && no2 > no3){
    biggest = no2;
}else{
    biggest = no3;
}

console.log(`${smallest}, ${middle}, ${biggest}`)

// a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type
let inp = "hello";

if(typeof(inp) === "string"){
    console.log("1");
}else if(typeof(inp) === "number"){
    console.log("2");
}else{
    console.log("3");
}

// a code to change every letter a into * from a string of input
const kalimat = "An apple a day keep the doctor away";
let hasilKalimat:string = "";

for(let i = 0; i < kalimat.length; i++){
    let huruf = kalimat.charAt(i);

    if(huruf === "a" || huruf === "A"){
        huruf = "*";
    }

    hasilKalimat = hasilKalimat + huruf;
}

console.log(hasilKalimat);

