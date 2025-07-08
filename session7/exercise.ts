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

interface IStudent2{
    name: string;
    email: string;
}

const student1: IStudent2[] = [
{ 
    name: "student 1", 
    email: "student1@mail.com", 
},
{ 
    name: "student 2", 
    email: "student2@mail.com", 
}];

const student2: IStudent2[] = [
{ 
    name: "student 1", 
    email: "student1@mail.com", 
},
{ 
    name: "student 3", 
    email: "student3@mail.com", 
}
];

const mergeArr = (arr1: IStudent2[], arr2: IStudent2[]) => {
    let mergedArr = arr1.concat(arr2);
    let arrResult: IStudent2[] = [];

    mergedArr.forEach((el:IStudent2) => {
    const isExist = arrResult.find((el1: IStudent2)=> el.email === el1.email);

        if(!isExist){
            arrResult.push(el);
        
        }
    });

    return arrResult;
}

let merge = mergeArr(student1, student2);
console.log(merge);

/**
 ● Create a function that can accept input as an array of objects and switch all values into property and
property into value
● Example :
○ Input : [{ name: ‘David’, age: 20 }]
○ Output : [{ David: ‘name’, 20: ‘age’}]
 */
interface IUser{
    name: string;
    age:number;
}

const switchProps = (data: IUser[]) => {
    return data.map((el) => {
        // const keys = Object.keys(data);

        // const selectedKey = keys.find(([key, value]) => value === el[key] )

        const newObj = {};

        Object.entries(el).forEach(([key, value]) => {
            if(!newObj[value]){
                newObj[value] = key;
            }
        })
        return newObj;
    })
};

console.log(switchProps([{name: "David", age: 20}]))

/**
Create a function to find a factorial number using recursion
● Example
○ Input : 5
○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
 */

const findFactorial = (num: number) => {   
    if(num===0 || num===1){    
        return 1;
    }
    if (num > 1){
        num = num * findFactorial(num-1);
    }

    return num;

}

const calc = findFactorial(5);
console.log(calc);