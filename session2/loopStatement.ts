//for loop

for(let i = 1; i <= 10; i++ ){
    console.log("1. Hello ke - ", i);
}

//while loop
let j:number = 0;

while(j < 5){
    if(j === 3){
        j++;
        // break;
        continue;
    }

    console.log("2. Halo ke : ", j);  
    j++;
}

//do while loop
let k: number = 0;
do{
    //proses yang berjalan setidaknya sekali walapun kondisi false
    console.log("do ke - ", k);
    k++;
} while(k < 10)