class Werewolf {
    constructor (name, location) {
        this.name = name;
        this.location = location;
        this.human = true;
        this.wolf = false;
        this.hungry = false;
        this.eaten = [];
    }

    change () {
        this.human = !this.human;
        this.wolf = !this.wolf;
        this.hungry = !this.hungry;

    }

    eat (person) {
        if (this.hungry === true) {
            this.eaten.push(person);
            person.alive = false;
            this.human = true;
        } else {
            return 'I am not hungry!';
        }
    }
}

module.exports = Werewolf;
