class Centaur {
    constructor (name, breed) {
        this.name = name;
        this.breed = breed;
        this.runandbow = 0;
        this.cranky = false;
        this.standing = true;
        this.layingDown = false;
    }

    shoot () {
        this.runandbow ++;
        if (this.layingDown) {
            return 'NO!';
        }
        if (this.runandbow >= 3) {
            this.cranky = true;
            return 'NO!'
        } else {
            return 'Twang!!!';
        }
    }

    run () {
        this.runandbow ++;
        if (this.layingDown) {
            return 'NO!';
        }
        if (this.runandbow >= 3) {
            this.cranky = true;
        }
        
        return 'Clop clop clop clop!!!';

    }

    sleep () {
        if (this.standing === true) {
            return 'NO!';
        } else {
            this.cranky = false;
            this.runandbow = 0;
            return 'ZZZZ'
        }
    }

    layDown () {
        this.standing = !this.standing;
        this.layingDown = !this.layingDown;
    }

    standUp () {
        this.standing = !this.standing;
        this.layingDown = !this.layingDown;
    }

    drinkPotion () {
        if(this.standing === true && this.cranky === true) {
        this.cranky = false;
        this.runandbow = 0; 
        } else if (this.standing === false){
            return 'Not while I\'m laying down!'
        } else if (this.standing === true && this.cranky == false) {
            this.cranky = true; 
        }

    }

}

module.exports = Centaur;

var centaur = new Centaur('George');

console.log(centaur.cranky);

centaur.shoot()

console.log(centaur.runandbow)
centaur.run()
centaur.shoot()



console.log(centaur.cranky);