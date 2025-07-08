var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class adalah template untuk membuat object
//class declaration
var User = /** @class */ (function () {
    function User() {
    }
    // function yang ada di dalam kelas disebut method
    User.prototype.greeting = function () {
        console.log("Hello World");
    };
    return User;
}());
//class expression
var User1 = /** @class */ (function () {
    function User1() {
    }
    return User1;
}());
//cara memanggil kelas
var user = new User();
user.greeting();
// ==== constructor ====
//method khusus built-in yang sudah di punya oleh class
//fungsi untuk membuat dan initiate sebuah property
var User2 = /** @class */ (function () {
    function User2() {
        this.name = " ";
        this.name = "Radithya";
    }
    User2.age = 25; //hanya punya class
    return User2;
}());
var user2 = new User2(); // <--- object
console.log(user2.name);
console.log(User2.age);
// === Getter & Setter===
var personI = {
    firstName: "Radithya",
    lastName: "Romero",
    get fullName() {
        return "this.".concat(this.firstName, " ").concat(this.lastName);
    },
    set fullName(value) {
        var splitedValue = value.split(" ");
        this.firstName = splitedValue[0];
        this.lastName = splitedValue[1];
    },
};
personI.fullName = "Radithya Romero";
console.log(personI.firstName);
console.log(personI.lastName);
var Employee = /** @class */ (function () {
    function Employee() {
        this.employeeName = " ";
        this.employeeName;
    }
    Employee.prototype.getEmployeeName = function () {
        return this.employeeName;
    };
    Employee.prototype.setEmployeeName = function (newName) {
        this.employeeName = newName;
    };
    return Employee;
}());
var employee = new Employee();
employee.setEmployeeName("Radithya");
console.log(employee.setEmployeeName);
// ==== Inheritance ====
var Product = /** @class */ (function () {
    function Product() {
        this.productName;
        this.price;
    }
    return Product;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book() {
        var _this = _super.call(this) || this;
        _this.author;
        return _this;
    }
    return Book;
}(Product));
var Library = /** @class */ (function () {
    function Library() {
    }
    return Library;
}());
var book = new Book();
console.log(book.productName);
// === instance of ===
console.log(book instanceof Book);
console.log(book instanceof Product);
console.log(book instanceof Library);
