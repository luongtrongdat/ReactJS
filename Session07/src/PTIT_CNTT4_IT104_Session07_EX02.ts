class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: string;
    constructor(name: string, speed: number, id: string) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount: number): void {
        if (this.speed - amount >= 0) {
            this.speed -= amount;
        } else {
            this.speed = 0;
        }
    }
    speedUp(amount: number): void {
        this.speed += amount;
    }
    showSpeed(): void {
        console.log(`Tốc độ hiện tại của ${this.name} là: ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    private gear: number;
    constructor(name: string, speed: number, id: string, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    showInfo(): void {
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