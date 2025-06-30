//if Statement
var age1 = 16;
if (age1 >= 17) { //block scope
    console.log("Punya KTP");
}
else {
    console.log("Tidak punya KTP");
}
// A -> Excellent
// B -> Great
// C -> Good
// D -> Bad
var grade = "D";
if (grade === "A") {
    console.log("Excellent");
}
else if (grade === "B") {
    console.log("Great");
}
else if (grade === "C") {
    console.log("Good");
}
else {
    console.log("Bad");
}
//switch Statement
var fruit = "papayas";
//papayas = 10.000
// banana = 20.000
// watermelon = 50.000
// apple = 15.000
switch (fruit) {
    case "papayas":
        console.log("Harga = 10.000");
        break;
    case "banana":
        console.log("Harga = 20.000");
        break;
    case "watermelon":
        console.log("Harga = 50.000");
        break;
    case "apple":
        console.log("Harga = 15.000");
        break;
    default:
        console.log("Belum tercantum harga");
}
