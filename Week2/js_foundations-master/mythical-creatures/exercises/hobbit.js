class Hobbit {
    constructor (name) {
        this.name = name;
        this.disposition = 'homebody';
        this.age = 0;
        this.adult = false;
        this.old = false;
        this.isShort = true;
        this.hasRing = name === "Frodo";
    }

    celebrateBirthday () {
        this.age ++;

        if (this.age > 33) {
            this.adult = false;
        }
        else if (this.age >= 33) {
            this.adult = true;
        }
        
        if (this.age >= 101) {
            this.old = true;
        }
    }

}

var hobbit3 = new Hobbit('Ellie');
console.log(hobbit3.hasRing);

module.exports = Hobbit;

