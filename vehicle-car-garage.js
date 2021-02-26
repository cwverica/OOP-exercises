class Vehicle {
    
    constructor (make, model, year) {
        if(year < 1960 || year > 2021){
            throw new Error("Year is invalid. Try again");
        }

        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return "Beeep!";
    }

    toString(){
        const {make, model, year} = this;
        if('aeiou'.indexOf(make[0].toLowerCase()) === 0){
            return `The vehicle is an ${make} ${model} from ${year}.`;
        } else return `The vehicle is a ${make} ${model} from ${year}.`;
    }

}

class Car extends Vehicle {

    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {

    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "vroom VROOOOOMMMMM!";
    }
}

class Garage {
    
    constructor(capacity){
        if(!Number.isFinite(capacity) || capacity <= 0){
            throw new Error("Garage capacity must be a positive number.")
        }
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(vehicle){
        if (vehicle instanceof Vehicle !== true){
            return "Hey! ONLY VEHICLES STORED IN THIS GARAGE!!";
        }
        if (this.vehicles.length === this.capacity) {
            return "Sorry, we're all out of (v)room!";
        }
        this.vehicles.push(vehicle);
        return "You've parked your vehicle safely.";
    }
}

