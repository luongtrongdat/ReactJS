class Mumal extends Animal {
    constructor(name, age, furColor) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.furColor = furColor;
    }
    move() {
        return `phuong thuc di chuyen cua dong vat co vu`;
    }
    getFurColor() {
        // lay thong tin sai canh cua loai dv co vu
        return `mau long cua loai : ${this.name} la : ${this.furColor}`;
    }
}
class Bird extends Animal {
    constructor(name, age, wingSpan) {
        super(name, age, wingSpan);
        this.name = name;
        this.age = age;
        this.wingSpan = wingSpan;
    }
    move() {
        return `phuong thuc di chuyen cua chim`;
    }
    getWingSpan() {
        // lay thong tin sai canh cua loai chim
        return `sai canh cua loai : ${this.name} la : ${this.wingSpan}`;
    }
}
class RapTitle extends Animal {
    constructor(name, age, venomous) {
        super(name, age, venomous);
        this.name = name;
        this.age = age;
        this.venomous = venomous;
    }
    move() {
        return `phuong thuc di chuyen cua bo sat`;
    }
}
// tinh da hinh cua 1 phuong thuc nhung trien khai khac nhau
const animal = {
    new: Bird("Bird", 2, 5),
    new: RapTitle("ran", 2, true),
    new: Mumal("Blue", 2, "mau xanh")
};
// goi phuong thuc
animal.forEach(item => {
    // thong tin di chuyen cua cac loai
    console.log(item.move());
});
// thong tin mau long cua loai
console.log(animal[2].getFurColor());
// thong tin sai canh cua loai
console.log(animal[0].getWingSpan());
