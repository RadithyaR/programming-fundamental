// Check Odd or Even Number
const a: number = 11;
a%2 === 0 ? console.log(`${a} is Even Number`) : console.log(`${a} is Odd Number`) ;

//Check whether the number is prime or not (2,3,5,7,11,13,17)
const prime: number = 11;
let isPrime: boolean = true;

if(prime < 2){
    console.log(`${prime} is NOT a prime number`);
}else if(prime == 2){
    console.log(`${prime} is a prime number`);
}else{
    for(let i = 2; i< prime; i++){
        if(prime % i === 0){
            isPrime = false;
        }
    }
}
if(isPrime){
    console.log(`${prime} is a prime number`);
}else{
    console.log(`${prime} is not a prime number`);
}

//Find the sumber of the numbers 1 to N 
const sumOfNumber: number = 5;
let sum:number = 0;

for(let i:number = 1; i<=sumOfNumber; i++){ 
    sum += i; //sum = sum + i
}
console.log(`sum Of sequence of ${sumOfNumber} = ${sum}`);

//Find factorial number
const fact: number = 6;
let totalFact = 1;
for(let i = fact; 0 < i; i--){
    // console.log(i);
    totalFact *= i; //totalFact = totalFact * i
    // console.log(totalFact)
}
console.log(`total factorial of ${fact} = ${totalFact}`);

//find the first N fibocacci (0,1,1,2,3,5,8,13,21)
const n:number = 15;

let fibFirst: number = 0;
let fibNext: number = 1;
let fibTotal: number = 0;

for(let i = 0; i < n;i++){
    // console.log(i);
    fibTotal = fibFirst + fibNext;

    fibFirst = fibNext; //change position
    fibNext = fibTotal;

}
    console.log(`total fibonacci number = ${fibFirst}`);


