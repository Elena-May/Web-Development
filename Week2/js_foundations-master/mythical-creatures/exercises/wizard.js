class Wizard {
    constructor ({name, bearded}) {
        this.name = 'Jhun';
        this.bearded = bearded !== undefined ? bearded : true;
        this.hasCast = 0;
        this.isRested = true;
    }

    incantation(string) {
        return string.toUpperCase();
    }

    cast() {
        this.hasCast ++;

        if (this.hasCast >= 3) {
            this.isRested = false;
        }

        if (this.hasCast <= 3) {
            return 'MAGIC BULLET';
        }else{
            return 'I SHALL NOT CAST!';
        }
    }


}

module.exports = Wizard;