class Dragon {
    constructor (name, rider, color) {
        this.name = name;
        this.rider = rider;
        this.color = color;
        this.hungry = true;
        this.eat = 0;
    }

    eat () {
        if (this.eat > 3) {
            this.eat += 1;
        }
        if (this.eat === 2) {
            this.eat = 0;
            this.hungry = false;
        }
    }
}

module.exports = Dragon;