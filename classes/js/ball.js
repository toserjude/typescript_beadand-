"use strict";
/**
 * 2.1 Feladat:
 *
 * Abstract Ball osztály létrehozása:
 *
 * Protected mezők:
 * _color - szövege
 * _name - szöveges
 * _bounceRate - szám
 *
 * Protected konstruktor létrehozása,
 * ami 1 bounceRate paraméterrel rendelkezik
 * és többi mezőt kitölti alapértelmezett értékekkel.
 *
 * Publikus propertyk:
 * color - setter és getter
 * name - csak setter
 * bounceRate - csak getter
 *
 * Color setter property csak abban az esetben metse el az értéket,
 * ha a megkapott szöveg hex színkódot tartalmaz.
 * Ehhez szükséges regex:
 * let regex = /^#(?:[0-9a-f]{3}){1,2}$/i;
 * Regex futtatása:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 *
 * Abstract getName függvény, ami string visszatérési értékkel rendelkezik.
 */
var Ball = /** @class */ (function () {
    function Ball(bounceRate) {
        this._bounceRate = bounceRate;
        this._name = 'Some Ball Game';
        this._color = '#ffff00';
    }
    Object.defineProperty(Ball.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (colorCode) {
            var regex = /^#(?:[0-9a-f]{3}){1,2}$/i;
            if (colorCode.match(regex)) {
                this._color = colorCode;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "name", {
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "bounceRate", {
        get: function () {
            return this._bounceRate;
        },
        enumerable: true,
        configurable: true
    });
    return Ball;
}());
