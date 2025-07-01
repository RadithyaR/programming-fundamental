// Check Odd or Even Number
var a = 11;
a % 2 === 0 ? console.log("".concat(a, " is Even Number")) : console.log("".concat(a, " is Odd Number"));
//Check whether the number is prime or not (2,3,5,7,11,13,17)
var prime = 11;
var isPrime = true;
if (prime < 2) {
    console.log("".concat(prime, " is NOT a prime number"));
}
else if (prime == 2) {
    console.log("".concat(prime, " is a prime number"));
}
else {
    for (var i = 2; i < prime; i++) {
        if (prime % i === 0) {
            isPrime = false;
        }
    }
}
if (isPrime) {
    console.log("".concat(prime, " is a prime number"));
}
else {
    console.log("".concat(prime, " is not a prime number"));
}
//Find the sumber of the numbers 1 to N 
var sumOfNumber = 5;
var sum = 0;
for (var i = 1; i <= sumOfNumber; i++) {
    sum += i; //sum = sum + i
}
console.log("sum Of sequence of ".concat(sumOfNumber, " = ").concat(sum));
//Find factorial number
var fact = 6;
var totalFact = 1;
for (var i = fact; 0 < i; i--) {
    // console.log(i);
    totalFact *= i; //totalFact = totalFact * i
    // console.log(totalFact)
}
console.log("total factorial of ".concat(fact, " = ").concat(totalFact));
//find the first N fibocacci (0,1,1,2,3,5,8,13,21)
var n = 15;
var fibFirst = 0;
var fibNext = 1;
var fibTotal = 0;
for (var i = 0; i < n; i++) {
    // console.log(i);
    fibTotal = fibFirst + fibNext;
    fibFirst = fibNext; //change position
    fibNext = fibTotal;
}
console.log("total fibonacci number = ".concat(fibFirst));
