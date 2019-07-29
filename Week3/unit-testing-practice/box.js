class box {
    constructor(height = 100, width = 100) {
        this.height = height;
        this.width = width;

    }

    area () {
       return this.height * this.width;
       
    }

    increaseWidth(number) {
        this.width = this.width + number;
    }
}

module.exports = box