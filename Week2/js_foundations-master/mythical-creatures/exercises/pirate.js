class Pirate {
    constructor (name, job = "Scallywag") {
        this.name = name;
        this.job = job;
        this.heinousActs = 0;
        this.cursed = false;
        this.booty = 0;
    }

    commitHeinousAct () { 
        this.heinousActs ++;

        if (this.heinousActs === 3) {
            this.cursed = true;
        }
    }

    robShip () {
        this.booty += 100;
        return 'YAARRR!';
    }
}


module.exports = Pirate;