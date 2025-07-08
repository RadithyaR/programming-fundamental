//class adalah template untuk membuat object
//class declaration
class User { 
    // function yang ada di dalam kelas disebut method
    public greeting() {
        console.log("Hello World");
    }
}

//class expression
const User1 = class { }

//cara memanggil kelas
const user = new User();
user.greeting();

// ==== constructor ====
//method khusus built-in yang sudah di punya oleh class
//fungsi untuk membuat dan initiate sebuah property

class User2 {
    public name: string = " ";

    static age:number = 25; //hanya punya class

    constructor() {
        this.name  = "Radithya";
    }
}

const user2 = new User2();  // <--- object
console.log(user2.name);
console.log(User2.age);

// === Getter & Setter===
const personI = {
    firstName: "Radithya",
    lastName: "Romero",

    get fullName(){
        return `this.${this.firstName} ${this.lastName}`;
    },

    set fullName(value:string){
        const splitedValue = value.split(" ");
        this.firstName = splitedValue[0];
        this.lastName = splitedValue[1];
    },
    
};
personI.fullName = "Radithya Romero";
console.log(personI.firstName);
console.log(personI.lastName);

class Employee {
    employeeName: string = " ";
    constructor(){
        this.employeeName;
    }

    getEmployeeName() {
        return this.employeeName;
    }

    setEmployeeName(newName: string) {
        this.employeeName = newName;
    }
}

const employee = new Employee();
employee.setEmployeeName("Radithya");

console.log(employee.setEmployeeName);

// ==== Inheritance ====
class Product {
    productName :string;
    price: number;

    constructor(){
        this.productName;
        this.price;
    }
}

class Book extends Product{
    author:string;

    constructor(){
        super();
        this.author;
    }
}
class Library{}

const book = new Book();
console.log(book.productName);

// === instance of === ->mengecek apakah class berhubungan dengan class tertentu
console.log(book instanceof Book); //true
console.log(book instanceof Product); //true
console.log(book instanceof Library); //false

