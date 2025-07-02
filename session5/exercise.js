/**Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
 */
var value = function (arrNum) {
    arrNum.sort(function (a, b) { return a - b; });
    //total number in array
    var totalArr = arrNum.reduce(function (acc, currValue) { return acc + currValue; }, 0);
    //rata2 array
    var average = totalArr / arrNum.length;
    var lowest = arrNum[0];
    var highest = arrNum[arrNum.length - 1];
    return "Lowest : ".concat(lowest, ", Highest : ").concat(highest, ", Average : ").concat(average);
};
console.log(value([12, 5, 23, 18, 4, 45, 32]));
/**Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'.
a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
 */
var sentence = function (arr) {
    if (arr.length > 1) {
        //re assign last element
        arr[arr.length - 1] = "and ".concat(arr[arr.length - 1]);
    }
    //return string
    return arr.join(", ");
};
console.log(sentence(["apple", "banana", "cherry", "date"]));
/** Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
 */
var secondSmallest = function (arrNum) {
    arrNum.sort(function (a, b) { return a - b; });
    // return the second smallest number 
    return arrNum[1];
};
console.log(secondSmallest([5, 3, 1, 7, 2, 6]));
/***Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4] */
var sumArr = function (arr1, arr2) {
    var newArr = [];
    //pakai perulangan array karena panjang array sama
    arr1.forEach(function (el, index) {
        var sum = el + arr2[index];
        newArr.push(sum);
    });
    return newArr;
};
console.log(sumArr([1, 2, 3], [3, 2, 1]));
/*** Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]*/
var addElement = function (arr, newEl) {
    var isElementExist = arr.includes(newEl);
    // let isExist = false;
    // arr.forEach((el) => {
    //     if(el === newEl){
    //         isExist = true;
    //     }
    // });
    // if(!isExist === true){
    // arr.push(newEl);
    // }
    if (!isElementExist === true) {
        arr.push(newEl);
    }
    return arr;
};
console.log(addElement([1, 2, 3, 4], 7));
/***
 * Write a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
 */
var sumAllNumber = function (mixArr) {
    var sumNum = 0;
    mixArr.forEach(function (el) {
        if (typeof el === "number") {
            sumNum += el;
        }
    });
    return sumNum;
};
console.log(sumAllNumber(["3", 1, "string", null, false, undefined, 2, 3]));
/**Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
array can only contain 5 elements).
a. Example :
 maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
 The function will return [5, 10, 24, 3, 6] */
var maxArr = function (maxSize) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    //The slice() method of Array instances returns a shallow 
    //copy of a portion of an array into a new array
    return args.slice(0, maxSize);
};
console.log(maxArr(5, 5, 10, 24, 3, 6, 7, 8));
/**Write a function that will combine 2 given array into one array
a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
*/
var combineArr = function (arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(combineArr([1, 2, 3], [4, 5, 6]));
/*** Write a function to find duplicate values in an array
a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
 */
var findDuplicate = function (arr) {
    var newArr = [];
    arr.forEach(function (el) {
        var filterArr = arr.filter(function (el1) { return el1 === el; });
        if (filterArr.length > 1) {
            var isExist = newArr.includes(el);
            if (!isExist) {
                newArr.push(el);
            }
        }
    });
    return newArr;
};
console.log(findDuplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]));
/***Write a function to find the difference in 2 given array
a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]  */
var findDifference = function (arr1, arr2) {
    var newArr = [];
    var mergedArr = arr1.concat(arr2);
    mergedArr.forEach(function (el) {
        var filterArr = mergedArr.filter(function (el1) { return el1 === el; });
        if (filterArr.length === 1) {
            var isExist = newArr.includes(el);
            if (!isExist) {
                newArr.push(el);
            }
        }
    });
    return newArr;
};
console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
