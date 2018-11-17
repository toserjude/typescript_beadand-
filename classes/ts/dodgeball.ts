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

class DodgeBall extends Ball{
    constructor() {
        super(590);
    }

    getName() {
        return this._name;
    }
}