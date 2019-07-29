class Medusa {
    constructor (name) {
        this.name = name;
        this.statues = [];
    }

    stare (person) {
        if (this.statues.length < 3)
        {
        this.statues.push(person);
        person.stoned = true;
        }
        else {
            let freeperson = this.statues[0]
            freeperson.stoned = false;
            this.statues.shift();
            this.statues.push(person);

        }
    }
}

module.exports = Medusa;
