// Check Odd or Even Number
const a: number = 11;
a%2 === 0 ? console.log("Even Number") : console.log("Odd Number") ;

//Check whether the number is prime or not (2,3,5,7,11,13,17)
const prime: number = 7;

if(prime < 2){
    console.log(prime + " is NOT a prime number");
}else{

}

//Find the sumber of the numbers 1 to N 
const sumOfNumber: number = 10;
let sum:number = 0;
for(let i:number = 1; i<=sumOfNumber; i++){ 
    sum = sum + i;
}
console.log(sum);

//Find factorial number
const fact: number = 6;
let totalFact = 1;
for(let i = fact; 0 < i; i--){
    // console.log(i);
    totalFact = totalFact*i;
    // console.log(totalFact)
}
console.log(totalFact);

//find the first N fibocacci (0,1,1,2,3,5,8,13,21)
const n:number = 15;

let fibFirst: number = 0;
let fibNext: number = 1;
let fibTotal: number = 0;

for(let i = 1; i<n;i++){
    // console.log(i);
    fibTotal = fibFirst + fibNext;

    fibFirst = fibNext;
    fibNext = fibTotal;

}
    console.log(fibTotal);


