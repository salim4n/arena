interface CmpGuerrier {

    attaqueLateral(): number;

    attaqueVerticale(): number;

    attaqueEstoc(): number;

    attaquePuissante(): number;

}

class Armement implements CmpGuerrier {

    degat: number;
    min: number = 1;
    max: number = 2;


    attaqueLateral(): number {
        this.min = 10;
        this.max = 20;
        return this.degat = Math.random() * (this.max - this.min) + this.min;
    }

    attaqueVerticale(): number {
        this.min = 10;
        this.max = 20;
        return this.degat = Math.random() * (this.max - this.min) + this.min;
    }

    attaqueEstoc(): number {
        this.min = 10;
        this.max = 20;
        return this.degat = Math.random() * (this.max - this.min) + this.min;
    }

    attaquePuissante(): number {
        this.min = 10;
        this.max = 20;
        return this.degat = Math.random() * (this.max - this.min) + this.min;
    }
}

class Gladiateur {
    sante: number;
    endurance: number;
    pseudo: string;
    armement: CmpGuerrier;

    constructor(sante: number, endurance: number, pseudo: string, armement: CmpGuerrier) {
        this.sante = sante;
        this.endurance = endurance;
        this.pseudo = pseudo;

        this.armement = new Armement();
    }

    esquive(): number {
        return this.endurance -= 5;
    }

    defense(): number {
        return this.endurance -= 5;
    }

}

class Mirmillon extends Gladiateur {
    constructor(sante: number, endurance: number, pseudo: string, armement: CmpGuerrier) {
        super(200, 100, pseudo, armement);

    }

}

class Retiaire extends Gladiateur {
    constructor(sante: number, endurance: number, pseudo: string, armement: CmpGuerrier) {
        super(150, 150, pseudo, armement);
    }

}

class Berseker extends Gladiateur {
    constructor(sante: number, endurance: number, pseudo: string, armement: CmpGuerrier) {
        super(100, 200, pseudo, armement);
    }

}

class Ludus {
    nom: string;
    gladiateurs: Gladiateur[];

    constructor(nom: string,) {
        this.nom = nom;
        this.gladiateurs = [];
    }

    ajouterGladiateur(gladiateur: Gladiateur): void {
        this.gladiateurs.push(gladiateur);
    }

    retirerGladiateur(gladiateur: Gladiateur): void {
        for (let i = 0; i < this.gladiateurs.length; i++) {
            if (this.gladiateurs[i] === gladiateur) {
                this.gladiateurs.splice(i, 1);
            }
        }

    }

    afficherGladiateurs(): void {
        for (let i = 0; i < this.gladiateurs.length; i++) {
            console.log(this.gladiateurs[i].pseudo);
        }
    };
}

// test POO
let spartacus = new Mirmillon(200, 100, "Spartacus", new Armement());
let julius = new Retiaire(150, 150, "Julius", new Armement());
let caesar = new Berseker(100, 200, "Caesar", new Armement());
let batiatusLudus = new Ludus("Ludus de Batiatius");
batiatusLudus.ajouterGladiateur(spartacus);
batiatusLudus.ajouterGladiateur(julius);
batiatusLudus.ajouterGladiateur(caesar);
console.log(batiatusLudus);
batiatusLudus.retirerGladiateur(spartacus);
console.log(batiatusLudus);
batiatusLudus.afficherGladiateurs();
//fin test POO











