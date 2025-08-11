class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, witth, heiight) {
        super(name);
        this.witth = witth;
        this.heiight = heiight;
    }
    getSize() {
        console.log(`Chiều rộng:${this.witth},chiều cao:${this.heiight}`);
    }
}
const p1 = new Rectangle("HCN", 10, 5);
console.log(`Ten hinh:${p1.getName()}`);
p1.getSize();
