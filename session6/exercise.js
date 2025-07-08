var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var StudentData = [{
        name: "Radithya",
        email: "radithya@gmail.com",
        age: 21,
        score: 92,
    },
    {
        name: "Romero",
        email: "Romero@gmail.com",
        age: 25,
        score: 86,
    },
    {
        name: "Al",
        email: "Romero@gmail.com",
        age: 23,
        score: 90,
    },
    {
        name: "Giffary",
        email: "Romero@gmail.com",
        age: 20,
        score: 95,
    }];
var calStudentData = function (arrStudent) {
    var sortByAge = __spreadArray([], arrStudent, true).sort(function (a, b) { return a.age - b.age; });
    var sortByScore = __spreadArray([], arrStudent, true).sort(function (a, b) { return a.score - b.score; });
    var totalAge = arrStudent.reduce(function (acc, nextVal) { return acc + nextVal.age; }, 0);
    var totalScore = arrStudent.reduce(function (acc, nextVal) { return acc + nextVal.score; }, 0);
    var obj = {
        score: {
            highest: sortByScore[arrStudent.length - 1].score,
            lowest: sortByScore[0].score,
            average: totalScore / arrStudent.length
        },
        age: {
            highest: sortByAge[arrStudent.length - 1].age,
            lowest: sortByAge[0].age,
            average: totalAge / arrStudent.length
        }
    };
    return obj;
};
var calData = calStudentData(StudentData);
console.log(calData);
var Products = /** @class */ (function () {
    function Products(data) {
        var name = data.name, price = data.price, qty = data.qty;
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
    return Products;
}());
var Transaction = /** @class */ (function () {
    function Transaction() {
        this.product = [];
        this.product = [];
        this.total = 0;
    }
    Transaction.prototype.AddToCart = function (data) {
        this.product.push(data);
        this.product.reduce(function (acc, nextCal) { return acc + nextCal.price; }, 0);
    };
    Transaction.prototype.ShowTotal = function () {
        console.log(this.total);
    };
    Transaction.prototype.CheckOut = function () {
        console.log({ total: this.total, products: this.product });
    };
    return Transaction;
}());
var pr1 = new Products({ name: "Air", price: 3000, qty: 3 });
var pr2 = new Products({ name: "Mie", price: 2500, qty: 5 });
var pr3 = new Products({ name: "Bumbu", price: 1500, qty: 10 });
var transaction = new Transaction();
console.log(transaction.AddToCart(pr1));
console.log(transaction.AddToCart(pr2));
console.log(transaction.AddToCart(pr3));
console.log(transaction.ShowTotal());
console.log(transaction.CheckOut());
