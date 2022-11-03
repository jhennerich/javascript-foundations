class Dragon {
    constructor(name, rider ) {
        this.name = name;
        this.rider = rider;
        this.hungry = true;
        this.meals = 0;
    }

    greet() {
        const message = "Hi, " + this.rider + "!";
        return message;
    }

    eat() {
        this.meals += 1;
        if (this.meals === 3) {
            this.hungry = false;

        }
    }
}
module.exports = Dragon;