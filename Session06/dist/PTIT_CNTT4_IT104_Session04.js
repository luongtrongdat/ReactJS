class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    perimer() {
        return 2 * Math.PI * this.radius;
    }
}
class _Rectangle {
    constructor(wwith, hheight) {
        this.wwidth = wwith;
        this.hheight = hheight;
    }
    area() {
        return this.wwidth * this.hheight;
    }
    perimer() {
        return 2 * (this.wwidth + this.hheight);
    }
}
const circle = new Circle(5);
const rectangle = new _Rectangle(4, 6);
console.log(`Diện tích: ${circle.area().toFixed(2)}`);
console.log(`Chu vi: ${circle.perimer().toFixed(2)}`);
console.log(`Diện tích: ${rectangle.area()}`);
console.log(`Chu vi: ${rectangle.perimer()}`);
