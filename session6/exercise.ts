/**
● Create a function to calculate array of student data
● The object has this following properties :
    ○ Name → String
    ○ Email → String
    ○ Age → Date
    ○ Score → Number
● Parameters : array of student
● Return values :
    ○ Object with this following properties :
        ■ Score
            ● Highest
            ● Lowest
            ● Average
        ■ Age
            ● Highest
            ● Lowest
            ● Average
 */
interface IStudent {
    name : string;
    email : string;
    age : number;
    score :number;
}

const StudentData : IStudent[] = [{
    name: "Radithya",
    email : "radithya@gmail.com",
    age : 21,
    score : 92,
    },
    {
    name: "Romero",
    email : "Romero@gmail.com",
    age : 25,
    score : 86,
    },
    {
    name: "Al",
    email : "Romero@gmail.com",
    age : 23,
    score : 90,
    },
    {
    name: "Giffary",
    email : "Romero@gmail.com",
    age : 20,
    score : 95,
    }];


const calStudentData = (arrStudent: IStudent[]) => {

    const sortByAge = [...arrStudent].sort((a,b)=> a.age - b.age);
    const sortByScore = [...arrStudent].sort((a,b)=> a.score - b.score);

    const totalAge = arrStudent.reduce((acc, nextVal) => acc + nextVal.age, 0);
    const totalScore = arrStudent.reduce((acc, nextVal) => acc + nextVal.score, 0);
    const obj = {
        score : {
            highest: sortByScore[arrStudent.length-1].score,
            lowest: sortByScore[0].score,
            average: totalScore/arrStudent.length
        },
        age : {
            highest: sortByAge[arrStudent.length-1].age,
            lowest: sortByAge[0].age,
            average: totalAge/arrStudent.length
        }
    }

    return obj;
}

const calData = calStudentData(StudentData);
console.log(calData);


/**
● Create a program to create transaction
● Product Class
    ○ Properties
        ■ Name
        ■ Price
● Transaction Class
    ○ Properties
        ■ Total
        ■ Product
            ● All product data
            ● Qty
○ Add to cart method → Add product to transaction
○ Show total method → Show total current transaction
○ Checkout method → Finalize transaction, return transaction data
 */

interface IProduct {
    name: string;
    price: number;
    qty?:number;
}

interface ITransaction{
    total:number;
    product: IProduct[];
}
class Products {
    name:string;
    price:number;
    qty?:number;

    constructor(data: IProduct){
        const {name, price,qty} = data;

        this.name = name;
        this.price = price;
        this.qty = qty;
    }
}

class Transaction{
    
    total: number;
    product: IProduct[] = [];

    constructor(){
        this.product = [];
        this.total = 0;
    }


    AddToCart(data: IProduct) {
        this.product.push(data);

        this.product.reduce((acc, nextCal) => acc + nextCal.price, 0)
    }

    ShowTotal(){
        console.log(this.total);
    }

    CheckOut(){
        console.log({total: this.total, products: this.product});
    }
}

const pr1 = new Products({name: "Air", price: 3000, qty:3});
const pr2 = new Products({name: "Mie", price: 2500, qty:5});
const pr3 = new Products({name: "Bumbu", price: 1500, qty:10});

const transaction = new Transaction();
console.log(transaction.AddToCart(pr1));
console.log(transaction.AddToCart(pr2));
console.log(transaction.AddToCart(pr3));

console.log(transaction.ShowTotal());
console.log(transaction.CheckOut());

