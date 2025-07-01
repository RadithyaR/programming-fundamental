//cara penulisan array
const arr = [];
const arr1 = new Array();

//example
const arr2: string[] = ["A", "B", "C","D","E"]; // array of string
const arr3: string[] = new Array("A", "B", "C","D","E");

const arrOfNum: number[] = [10, 20, 30, 40, 50]; // array of number
console.log(arrOfNum[2]);

const student = [ // array of object
    {
        name : "student1",
        email : "student1@gmail.com"
    },
    {
        name : "student2",
        email : "student2@gmail.com"
    }
];

// ====== Built-in method Array ========

const arrOfStr: string[] = ["Radithya", "Romero"];

//join("separator(","," "," ")")
console.log(arrOfStr); // arrray
console.log(arrOfStr.join(" ")); // string

// pop , menghapus value di elemen terakhir
arrOfStr.pop()
console.log(arrOfStr); // ["Radithya"]

// push, menambah value di elemen terakhir
arrOfStr.push("Giffary")
console.log(arrOfStr);// ["Radithya", "Romero"]

// length
console.log(arrOfStr.length); // 2


//splice,  splice(index, deleteCount, item1)
arrOfStr.splice(1, 0, "Romero"); // menambah
console.log(arrOfStr); // [ 'Radithya', 'Romero', 'Giffary' ]

arrOfStr.splice(1, 1, "Didit"); // me-replace
console.log(arrOfStr); // [ 'Radithya', 'Didit', 'Giffary' ]

//slice(dariindexberapa, sebanyakelemen), return arr tersebut
console.log(arrOfStr.slice(1,3)); // [ 'Didit', 'Giffary' ]

//sort
const arrOfNumber2: number[] = [5, 3, 5, 6, 1, 6, 2];
console.log(arrOfNumber2.sort());

// reverse
console.log(arrOfStr.reverse());

//foreach , untuk looping array
arrOfStr.forEach((el, index) => {
    console.log(`${index} - ${el}`);
}); 

//map
const mapArrOfStr = arrOfStr.map((el, index) => {
    return `${el} 1`;
});
console.log(mapArrOfStr);

//filter, mencari kondisi yang true
const filterArrOfStr = arrOfStr.filter((el: string) => {
    return el.includes("Radithya");
});
console.log(filterArrOfStr);

//find
const findArrOfStr = arrOfStr.find((el) => {
    return el == "Radithya";
});
console.log(findArrOfStr);