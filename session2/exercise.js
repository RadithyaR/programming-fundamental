// Check Odd or Even Number
var a = 11;
a % 2 === 0 ? console.log("Even Number") : console.log("Odd Number");
//Check whether the number is prime or not (2,3,5,7,11,13,17)
var prime = 7;
if (prime < 2) {
    console.log(prime + " is NOT a prime number");
}
else {
}
//Find the sumber of the numbers 1 to N 
var sumOfNumber = 10;
var sum = 0;
for (var i = 1; i <= sumOfNumber; i++) {
    sum = sum + i;
}
console.log(sum);
//Find factorial number
var fact = 6;
var totalFact = 1;
for (var i = fact; 0 < i; i--) {
    // console.log(i);
    totalFact = totalFact * i;
    // console.log(totalFact)
}
console.log(totalFact);
//find the first N fibocacci (0,1,1,2,3,5,8,13,21)
var n = 15;
var fibFirst = 0;
var fibNext = 1;
var fibTotal = 0;
for (var i = 1; i < n; i++) {
    // console.log(i);
    fibTotal = fibFirst + fibNext;
    fibFirst = fibNext;
    fibNext = fibTotal;
    console.log(fibTotal);
}
