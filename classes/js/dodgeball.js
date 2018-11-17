"use strict";
/**
 * 2.2 Feladat:
 *
 * DodgeBall osztály létrehozása:
 *
 * Ball osztályból származik le.
 *
 * Publikus konstruktor létrehozása,
 * ami nem rendelkezik paraméterekkel
 * és meghívja a szülő konstrukorát
 * egy tetszőleges fix bounceRate értékkel. (400-800)
 *
 * Publikus getName függvény kidolgozása, ami visszaadja a _name mező értékét.
 */
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
var DodgeBall = /** @class */ (function (_super) {
    __extends(DodgeBall, _super);
    function DodgeBall() {
        return _super.call(this, 590) || this;
    }
    DodgeBall.prototype.getName = function () {
        return this._name;
    };
    return DodgeBall;
}(Ball));
