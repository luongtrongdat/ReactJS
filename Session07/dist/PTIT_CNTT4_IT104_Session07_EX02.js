class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        if (this.speed - amount >= 0) {
            this.speed -= amount;
        }
        else {
            this.speed = 0;
        }
    }
    speedUp(amount) {
        this.speed += amount;
    }
    showSpeed() {
        console.log(`Tốc độ hiện tại của ${this.name} là: ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Speed: ${this.speed} km/h`);
        console.log(`Gear: ${this.gear}`);
    }
}
const myBicycle = new Bicycle("blabla", 10, "1", 6);
console.log("Tăng tốc thêm 15");
myBicycle.speedUp(15);
myBicycle.showSpeed();
console.log("\nGiảm tốc đi 8");
myBicycle.slowDown(8);
myBicycle.showSpeed();
console.log("\n");
myBicycle.showInfo();
