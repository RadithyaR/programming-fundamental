//cara penulisan array
var arr = [];
var arr1 = new Array();
//example
var arr2 = ["A", "B", "C", "D", "E"]; // array of string
var arr3 = new Array("A", "B", "C", "D", "E");
var arrOfNum = [10, 20, 30, 40, 50]; // array of number
console.log(arrOfNum[2]);
var student = [
    {
        name: "student1",
        email: "student1@gmail.com"
    },
    {
        name: "student2",
        email: "student2@gmail.com"
    }
];
// ====== Built-in method Array ========
var arrOfStr = ["Radithya", "Romero"];
//join("separator(","," "," ")")
console.log(arrOfStr); // arrray
console.log(arrOfStr.join(" ")); // string
// pop , menghapus value di elemen terakhir
arrOfStr.pop();
console.log(arrOfStr); // ["Radithya"]
// push, menambah value di elemen terakhir
arrOfStr.push("Giffary");
console.log(arrOfStr); // ["Radithya", "Romero"]
// length
console.log(arrOfStr.length); // 2
//splice,  splice(index, deleteCount, item1)
arrOfStr.splice(1, 0, "Romero"); // menambah
console.log(arrOfStr); // [ 'Radithya', 'Romero', 'Giffary' ]
arrOfStr.splice(1, 1, "Didit"); // me-replace
console.log(arrOfStr); // [ 'Radithya', 'Didit', 'Giffary' ]
//slice(dariindexberapa, sebanyakelemen), return arr tersebut
console.log(arrOfStr.slice(1, 3)); // [ 'Didit', 'Giffary' ]
//sort
var arrOfNumber2 = [5, 3, 5, 6, 1, 6, 2];
console.log(arrOfNumber2.sort());
// reverse
console.log(arrOfStr.reverse());
//foreach , untuk looping array
arrOfStr.forEach(function (el, index) {
    console.log("".concat(index, " - ").concat(el));
});
//map
var mapArrOfStr = arrOfStr.map(function (el, index) {
    return "".concat(el, " 1");
});
console.log(mapArrOfStr);
//filter, mencari kondisi yang true
var filterArrOfStr = arrOfStr.filter(function (el) {
    return el.includes("Radithya");
});
console.log(filterArrOfStr);
//find
var findArrOfStr = arrOfStr.find(function (el) {
    return el == "Radithya";
});
console.log(findArrOfStr);
