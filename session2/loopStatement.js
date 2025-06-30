//for loop
for (var i = 1; i <= 10; i++) {
    console.log("1. Hello ke - ", i);
}
//while loop
var j = 0;
while (j < 5) {
    if (j === 3) {
        j++;
        continue;
    }
    console.log("2. Halo ke : ", j);
    j++;
}
//do while loop
var k = 0;
do {
    //proses yang berjalan setidaknya sekali walapun kondisi false
    console.log("do ke - ", k);
    k++;
} while (k < 10);
