"use strict";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var readline = require("readline-sync");
var axiosIntance = axios_1.default.create({
    baseURL: 'https://northwind.vercel.app/api'
});
var choices = ["Add Customer", "Delete Customer"];
Main();
function Main() {
    return __awaiter(this, void 0, void 0, function () {
        var answer, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    answer = readline.keyInSelect(choices);
                    answer++;
                    _a = answer;
                    switch (_a) {
                        case 1: return [3 /*break*/, 1];
                        case 2: return [3 /*break*/, 3];
                        case 3: return [3 /*break*/, 5];
                        case 4: return [3 /*break*/, 6];
                        case 5: return [3 /*break*/, 7];
                        case 0: return [3 /*break*/, 8];
                    }
                    return [3 /*break*/, 9];
                case 1: return [4 /*yield*/, addCustomer()];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 10];
                case 3: return [4 /*yield*/, deleteCustomer()];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 10];
                case 5: return [3 /*break*/, 10];
                case 6: return [3 /*break*/, 10];
                case 7: return [3 /*break*/, 10];
                case 8: return [3 /*break*/, 10];
                case 9:
                    console.log("Please select a valid operation ");
                    return [3 /*break*/, 10];
                case 10:
                    if (answer != 0) {
                        setTimeout(function () {
                            Main();
                        }, 500);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function addCustomer() {
    return __awaiter(this, void 0, void 0, function () {
        var id, companyName, contactName, contactTitle, street, city, region, postalCode, country, phone, adrss, newCustomer, datas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = readline.question("Enter id: ");
                    companyName = "Məhəbbətin batmış şirkəti";
                    contactName = "Thomas Hardy";
                    contactTitle = "Sales Representative";
                    street = "120 Hanover Sq.";
                    city = "London";
                    region = null;
                    postalCode = "WA1 1D";
                    country = "UK";
                    phone = "(171) 555-7788";
                    adrss = {
                        street: street,
                        city: city,
                        region: region,
                        postalCode: postalCode,
                        country: country,
                        phone: phone
                    };
                    newCustomer = {
                        id: id,
                        companyName: companyName,
                        contactName: contactName,
                        contactTitle: contactTitle,
                        address: adrss
                    };
                    return [4 /*yield*/, (axiosIntance.post("customers", newCustomer))];
                case 1:
                    datas = (_a.sent()).data;
                    console.log(datas);
                    return [2 /*return*/];
            }
        });
    });
}
function deleteCustomer() {
    return __awaiter(this, void 0, void 0, function () {
        var id, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = readline.question("Enter User id");
                    return [4 /*yield*/, axiosIntance.delete("customers/".concat(id))];
                case 1:
                    response = (_a.sent());
                    if (response.status == 200) {
                        console.log("Customer (ID: ".concat(id, ") deleted!"));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
