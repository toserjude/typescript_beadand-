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

class BasketBall extends Ball {
    private _isNBA: boolean = false;

    constructor() {
        super(350);
    }

    set isNBA(isNBA: boolean) {
        this._isNBA =isNBA;
    }

    getName() {
        if (this._isNBA === false){
            return this._name;
        }
        else {
            return this._name + '- NBA';
        }
    }
}