class Retangle {
    constructor(withh, heightt) {
        this.withh = withh;
        this.heightt = heightt;
    }
    acreage() {
        return this.withh * this.heightt;
    }
    perimeter() {
        return 2 * (this.withh + this.heightt);
    }
    print() {
        console.log(`chieu dai:${this.heightt},chieu rong:${this.withh},chu vi:${this.perimeter()},dien tích:${this.acreage()}`);
    }
}
const p2 = new Retangle(5, 10);
p2.print();
