/** Create a function that can create a triangle pattern according to the height we provide like the
following :
01
02 03
04 05 06
07 08 09 10
● Parameters : height → triangle height
 */
function triangle (heigth: number){
    let result: string = "";
    let num: number = 1;

    for(let i: number = 0; i <= heigth; i++){
        for(let j:number = 1; j <= i; j++){
            const numToStr: string = num.toString(); //num diubah kestring
            const formattedStr:string = numToStr.padStart(2, "0"); // padStart(targetLength, padString) formatted 0 terlebih dahulu sebanyak 2 digit
            result += `${formattedStr} `;
            num++; 
        }
        result += "\n";
    }
    return result;
}

console.log(triangle(4));

/** ● Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".
● Parameters : n → total looping
○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz*/

const fizzBuzz = (n:number) => {
    let result = "";
    let str: string;
    for(let i:number = 1;i <= n; i++){
        // console.log(i);

        if(i%3 === 0 && i%5 === 0){
            str = "FizzBuzz";
        }else if(i%3 === 0){
            str = "Fizz";
        }else if(i%5 === 0){
            str = "Buzz";
        }else {
            str = i.toString();
        }

        result += `${str}, `;
    } 
    return `result = ${result} `
};
const res = fizzBuzz(15)
console.log(res);


/***
 * ● Create a function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))²
● Parameters : weight & height
● Return values :
○ < 18.5 return “less weight”
○ 18.5 - 24.9 return “ideal”
○ 25.0 - 29.9 return “overweight”
○ 30.0 - 39.9 return “very overweight”
○ > 39.9 return “obesity”z
 */

const bodyMassIndex = (weight:number, height:number) => {
    console.log(`Weight = ${weight} kg, Height = ${height} m`);
    let bmi:number = weight / (height*height);
    console.log(bmi);

    if(bmi< 18.5){
        return "Less Weight";
    }else if(18.5 <= bmi && 24.9 >= bmi){
        return "Ideal";
    }
    else if(25.0 <= bmi && 29.9 >= bmi){
        return "Overweight";
    }
    else if(30.0 <= bmi && 39.9 >= bmi){
        return "Very Overweight";
    }else{
        return "Obesity";
    }
};

console.log(bodyMassIndex(84, 1.64));

/***Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only
○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
 */
const removeOddArr = (arr: number[]) => {
    let result: number[] = [];

    for(let i = 0; i < arr.length; i++){
        if((arr[i]%2 === 0)){
            result.push(arr[i]);
        }
    }

    return result;
};
const resArr:number[] = removeOddArr([1,2,3,4,5,6,7,8,9,10]);
console.log(resArr);

/***● Write a function to split a string and convert it into an array of words
○ Example : “Hello World” → [“Hello”, “World”] */

const splitStr = (word: string) => {
    let result: string[]= [];
    let spl: string[] = word.split(" ");

    for(let i = 0; i < spl.length; i++){
        result.push(spl[i]);
    }

    return result
};

const sentArr = splitStr("Radithya Romero Al Giffary");
console.log(sentArr);