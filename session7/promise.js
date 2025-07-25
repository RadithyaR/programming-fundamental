var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var tryPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var isSuccess = false; // error
        if (isSuccess) {
            resolve("Success");
        }
        else {
            reject("Error");
        }
    }, 3000);
});
var withoutAsyncAwait = function () {
    console.log("Pekerjaan 1");
    tryPromise
        .then(function (res) {
        console.log(res);
    })
        .catch(function (err) {
        console.log(err);
    })
        .finally(function () { return console.log("Proses selesai"); });
    console.log("Pekerjaan2");
};
// withoutAsyncAwait();
var asyncAwait = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Pekerjaan 1A");
                return [4 /*yield*/, tryPromise //menunggu proses ini selesai
                        .then(function (res) {
                        console.log(res);
                    })
                        .catch(function (err) {
                        console.log(err);
                    })
                        .finally(function () { return console.log("Proses selesai"); })];
            case 1:
                _a.sent();
                console.log("Pekerjaan 2A");
                return [2 /*return*/];
        }
    });
}); };
// asyncAwait();
var asyncAwait2 = function () { return __awaiter(_this, void 0, void 0, function () {
    var res, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, 3, 4]);
                return [4 /*yield*/, tryPromise];
            case 1:
                res = _a.sent();
                console.log("masuk kesini, ", res);
                return [3 /*break*/, 4];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 4];
            case 3:
                console.log("Proses Selesai");
                return [7 /*endfinally*/];
            case 4: return [2 /*return*/];
        }
    });
}); };
// asyncAwait2();
var asyncAwaitThrow = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            // throw "sengaja error";
            throw new Error("Sengaja Erorr 2");
        }
        catch (error) {
            console.log(error);
        }
        finally {
            console.log("Proses Selesai");
        }
        return [2 /*return*/];
    });
}); };
asyncAwaitThrow();
// Real Case Promise
/**const fetchData = async () => { //menandakan function asynchronus, async => promise
    fetch('https://jsonplaceholder.typicode.com/users')  //funciton untuk mendapatkan data dari internet
        .then((res) => {
            console.log(res.json())
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            console.log("Proses Selesai");
        })
};

fetchData(); */
