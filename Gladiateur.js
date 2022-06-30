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
var Armement = /** @class */ (function () {
    function Armement() {
        this.min = 1;
        this.max = 2;
    }
    Armement.prototype.attaqueLateral = function () {
        this.min = 10;
        this.max = 20;
        return this.degat = Math.random() * (this.max - this.min) + this.min;
    };
    Armement.prototype.attaqueVerticale = function () {
        this.min = 10;
        this.max = 20;
        return this.degat = Math.random() * (this.max - this.min) + this.min;
    };
    Armement.prototype.attaqueEstoc = function () {
        this.min = 10;
        this.max = 20;
        return this.degat = Math.random() * (this.max - this.min) + this.min;
    };
    Armement.prototype.attaquePuissante = function () {
        this.min = 10;
        this.max = 20;
        return this.degat = Math.random() * (this.max - this.min) + this.min;
    };
    return Armement;
}());
var Gladiateur = /** @class */ (function () {
    function Gladiateur(sante, endurance, pseudo, armement) {
        this.sante = sante;
        this.endurance = endurance;
        this.pseudo = pseudo;
        this.armement = new Armement();
    }
    Gladiateur.prototype.esquive = function () {
        return this.endurance -= 5;
    };
    Gladiateur.prototype.defense = function () {
        return this.endurance -= 5;
    };
    return Gladiateur;
}());
var Mirmillon = /** @class */ (function (_super) {
    __extends(Mirmillon, _super);
    function Mirmillon(sante, endurance, pseudo, armement) {
        return _super.call(this, 200, 100, pseudo, armement) || this;
    }
    return Mirmillon;
}(Gladiateur));
var Retiaire = /** @class */ (function (_super) {
    __extends(Retiaire, _super);
    function Retiaire(sante, endurance, pseudo, armement) {
        return _super.call(this, 150, 150, pseudo, armement) || this;
    }
    return Retiaire;
}(Gladiateur));
var Berseker = /** @class */ (function (_super) {
    __extends(Berseker, _super);
    function Berseker(sante, endurance, pseudo, armement) {
        return _super.call(this, 100, 200, pseudo, armement) || this;
    }
    return Berseker;
}(Gladiateur));
var Ludus = /** @class */ (function () {
    function Ludus(nom) {
        this.nom = nom;
        this.gladiateurs = [];
    }
    Ludus.prototype.ajouterGladiateur = function (gladiateur) {
        this.gladiateurs.push(gladiateur);
    };
    Ludus.prototype.retirerGladiateur = function (gladiateur) {
        for (var i = 0; i < this.gladiateurs.length; i++) {
            if (this.gladiateurs[i] === gladiateur) {
                this.gladiateurs.splice(i, 1);
            }
        }
    };
    Ludus.prototype.afficherGladiateurs = function () {
        for (var i = 0; i < this.gladiateurs.length; i++) {
            console.log(this.gladiateurs[i].pseudo);
        }
    };
    ;
    return Ludus;
}());
// test POO
var spartacus = new Mirmillon(200, 100, "Spartacus", new Armement());
var julius = new Retiaire(150, 150, "Julius", new Armement());
var caesar = new Berseker(100, 200, "Caesar", new Armement());
var batiatusLudus = new Ludus("Ludus");
batiatusLudus.ajouterGladiateur(spartacus);
batiatusLudus.ajouterGladiateur(julius);
batiatusLudus.ajouterGladiateur(caesar);
console.log(batiatusLudus);
batiatusLudus.retirerGladiateur(spartacus);
console.log(batiatusLudus);
batiatusLudus.afficherGladiateurs();
//coucou
