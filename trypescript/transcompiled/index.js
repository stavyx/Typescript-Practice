//hello
//this is practicer
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vehicle = /** @class */ (function () {
    function vehicle(name, price) {
        this.name = name;
        this.price = price;
    }
    return vehicle;
}());
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car(name, price, color, wheels) {
        var _this = _super.call(this, name, price) || this;
        _this.color = color;
        _this.wheels = wheels;
        return _this;
    }
    ;
    return car;
}(vehicle));
var mycar = new car("Opeal", 50000, "red", 4);
var main = document.getElementById("main");
main.innerHTML = JSON.stringify(mycar);
