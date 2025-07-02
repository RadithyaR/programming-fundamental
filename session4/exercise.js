/** Create a function that can create a triangle pattern according to the height we provide like the
following :
01
02 03
04 05 06
07 08 09 10
● Parameters : height → triangle height
 */
function triangle(heigth) {
    var result = "";
    var num = 1;
    for (var i = 0; i <= heigth; i++) { //row
        for (var j = 1; j <= i; j++) { //column
            // const numToStr: string = num.toString(); //num diubah kestring
            // const formattedStr:string = numToStr.padStart(2, "0"); // padStart(targetLength, padString) formatted 0 terlebih dahulu sebanyak 2 digit
            if (num < 10) {
                result += "0".concat(num, " ");
            }
            else {
                result += "".concat(num, " ");
            }
            num++;
        }
        result += "\n";
    }
    return result;
}
console.log(triangle(5));
/** ● Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".
● Parameters : n → total looping
○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz*/
var fizzBuzz = function (n) {
    var result = "";
    var str;
    for (var i = 1; i <= n; i++) {
        // console.log(i);
        if (i % 3 === 0 && i % 5 === 0) {
            str = "FizzBuzz";
        }
        else if (i % 3 === 0) {
            str = "Fizz";
        }
        else if (i % 5 === 0) {
            str = "Buzz";
        }
        else {
            str = i.toString();
        }
        result += "".concat(str, ", ");
    }
    return "result = ".concat(result, " ");
};
var res = fizzBuzz(15);
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
var bodyMassIndex = function (weight, height) {
    console.log("Weight = ".concat(weight, " kg, Height = ").concat(height, " m"));
    var bmi = weight / (height * height);
    console.log(bmi);
    if (bmi < 18.5) {
        return "Less Weight";
    }
    else if (18.5 <= bmi && 24.9 >= bmi) {
        return "Ideal";
    }
    else if (25.0 <= bmi && 29.9 >= bmi) {
        return "Overweight";
    }
    else if (30.0 <= bmi && 39.9 >= bmi) {
        return "Very Overweight";
    }
    else {
        return "Obesity";
    }
};
console.log(bodyMassIndex(84, 1.64));
/***Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only
○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
 */
var removeOddArr = function (arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] % 2 === 0)) {
            result.push(arr[i]);
        }
    }
    return result;
};
var resArr = removeOddArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(resArr);
/***● Write a function to split a string and convert it into an array of words
○ Example : “Hello World” → [“Hello”, “World”] */
var splitStr = function (word) {
    var result = [];
    var spl = word.split(" ");
    for (var i = 0; i < spl.length; i++) {
        result.push(spl[i]);
    }
    return result;
};
var sentArr = splitStr("Radithya Romero Al Giffary");
console.log(sentArr);
