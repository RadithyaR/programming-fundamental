/**
 *
Create a function to merge two array of student data and remove duplicate data
● Student data : name & email
● Example :
Array1 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 2’, email : ‘student2@mail.com’ }
]
Array2 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
]
● Result :
ArrayResult → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 2’, email : ‘student2@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
]
 */
var student1 = [
    {
        name: "student 1",
        email: "student1@mail.com",
    },
    {
        name: "student 2",
        email: "student2@mail.com",
    }
];
var student2 = [
    {
        name: "student 1",
        email: "student1@mail.com",
    },
    {
        name: "student 3",
        email: "student3@mail.com",
    }
];
var mergeArr = function (arr1, arr2) {
    var mergedArr = arr1.concat(arr2);
    var arrResult = [];
    mergedArr.forEach(function (el) {
        var isExist = arrResult.find(function (el1) { return el.email === el1.email; });
        if (!isExist) {
            arrResult.push(el);
        }
    });
    return arrResult;
};
var merge = mergeArr(student1, student2);
console.log(merge);
var switchProps = function (data) {
    return data.map(function (el) {
        // const keys = Object.keys(data);
        // const selectedKey = keys.find(([key, value]) => value === el[key] )
        var newObj = {};
        Object.entries(el).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (!newObj[value]) {
                newObj[value] = key;
            }
        });
        return newObj;
    });
};
console.log(switchProps([{ name: "David", age: 20 }]));
/**
Create a function to find a factorial number using recursion
● Example
○ Input : 5
○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
 */
var findFactorial = function (num) {
    if (num === 0) {
        return 1;
    }
    if (num > 1) {
        num = num * findFactorial(num - 1);
    }
    return num;
};
var calc = findFactorial(5);
console.log(calc);
