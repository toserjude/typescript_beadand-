"use strict";
/**
 * 2.3 Feladat:
 *
 * BasketBall osztály létrehozása:
 *
 * Ball osztályból származik le.
 *
 * Privát mezők:
 * _isNBA: logikai mező - alapértelmezett érték false
 *
 * Publikus konstruktor létrehozása,
 * ami nem rendelkezik paraméterekkel
 * és meghívja a szülő konstrukorát
 * egy tetszőleges fix bounceRate értékkel. (200-350)
 *
 * Property:
 * isNBA - setter
 *
 * Publikus getName függvény kidolgozása,
 * ami visszaadja a _name mező értékét, ha az isNBA értéke hamis.
 * Ha az isNBA értéke igaz, akkor visszadja a labda nevét,
 *  és kötőjellel utána fűzi az NBA szócskát.
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
var BasketBall = /** @class */ (function (_super) {
    __extends(BasketBall, _super);
    function BasketBall() {
        var _this = _super.call(this, 350) || this;
        _this._isNBA = false;
        return _this;
    }
    Object.defineProperty(BasketBall.prototype, "isNBA", {
        set: function (isNBA) {
            this._isNBA = isNBA;
        },
        enumerable: true,
        configurable: true
    });
    BasketBall.prototype.getName = function () {
        if (this._isNBA === false) {
            return this._name;
        }
        else {
            return this._name + '- NBA';
        }
    };
    return BasketBall;
}(Ball));
