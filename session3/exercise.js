//display the multiplication table of a given integer
var input = 9;
var limit = 10;
for (var i = 1; i <= limit; i++) {
    console.log(input + " x " + i);
}
//check whether a string is a palindrome or not.
// const word: string = "madam";
// let wordSplit = word.split("");
// let rev = word.split("").reverse();
// console.log(wordSplit);
// console.log(rev);
// if(wordSplit == rev){
//     console.log(`${word} -> palindrome`);
// }else{
//     console.log(`${word} -> not palindrome`);
// }
//a code to convert centimeter to kilometer
var num = 100000;
var convertCm = 100000;
var cmToKm = num / convertCm;
console.log("".concat(num, " cm = ").concat(cmToKm, " km"));
//a code to format number as currency (IDR)
// code to remove the first occurrence of a given “search string” from a string
var givenStr = "Hello World";
var searchStr = "ell";
var index = givenStr.indexOf(searchStr); //mencari lokasi searchStr pada givenStr
console.log(index);
var beforeStr = givenStr.substring(0, index); //string sebelum searchstr
var afterStr = givenStr.substring(index + searchStr.length); //string setelah searchStr
// console.log(beforeStr);
// console.log(afterStr);
console.log(beforeStr + afterStr);
//code to capitalize the first letter of each word in a string
var captWord = "hello world";
// a code to swap the case of each character from string 
var sentence = "ThE QuiCk BrOwN Fox";
var sentenceRes = "";
for (var i = 0; i < sentence.length; i++) {
    var huruf = sentence.charAt(i);
    var isCapitalize = huruf === huruf.toUpperCase();
    if (!(huruf === huruf.toUpperCase())) {
        isCapitalize = false;
    }
    // console.log(isCapitalize);
    var result = void 0;
    if (isCapitalize === true) {
        result = huruf.toLowerCase();
    }
    else {
        result = huruf.toUpperCase();
    }
    sentenceRes += result;
}
console.log(sentenceRes);
// a code to find the largest of two given integers
var num1 = 42;
var num2 = 27;
if (num1 > num2) {
    console.log("the Largest integer = ".concat(num1));
}
else if (num1 < num2) {
    console.log("the Largest integer = ".concat(num2));
}
else {
    console.log("num1 = num2");
}
// a conditional statement to sort three numbers
var no1 = 18;
var no2 = 27;
var no3 = 42;
var smallest;
var middle;
var biggest;
if (no1 < no2 && no1 < no3) {
    smallest = no1;
}
else if (no2 < no1 && no2 < no3) {
    smallest = no2;
}
else {
    smallest = no3;
}
if (no1 < no2 && no1 > no3) {
    middle = no1;
}
else if (no2 < no1 && no2 > no3) {
    middle = no2;
}
else {
    middle = no3;
}
if (no1 > no2 && no1 > no3) {
    biggest = no1;
}
else if (no2 > no1 && no2 > no3) {
    biggest = no2;
}
else {
    biggest = no3;
}
console.log("".concat(smallest, ", ").concat(middle, ", ").concat(biggest));
// a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type
var inp = "hello";
if (typeof (inp) === "string") {
    console.log("1");
}
else if (typeof (inp) === "number") {
    console.log("2");
}
else {
    console.log("3");
}
// a code to change every letter a into * from a string of input
var kalimat = "An apple a day keep the doctor away";
var hasilKalimat = "";
for (var i = 0; i < kalimat.length; i++) {
    var huruf = kalimat.charAt(i);
    if (huruf === "a" || huruf === "A") {
        huruf = "*";
    }
    hasilKalimat = hasilKalimat + huruf;
}
console.log(hasilKalimat);
