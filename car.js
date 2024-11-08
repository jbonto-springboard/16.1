class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return "beep";
    }


    toString(){
        return `This is a ${this.make} with the model ${this.model} from the year ${this.year}`;
    }
}

class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOOOOM";
    }
}

class Garage {  
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(item){
        if(!(item instanceof Vehicle)){
            return "only vehicles are allowed here";
        } else if(this.vehicles.length >= this.capacity){
            return "we're full";
        }
        this.vehicles.push(item);
        return "added";
    }
}