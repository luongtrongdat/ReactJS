class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Name: ${this.name}`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log(`${this.name} keu gau gau`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log(`${this.name} keu meo meo`);
    }
}
let dog = new Dog("dog");
dog.printName();
dog.makeNoise();
let cat = new Cat("cat");
cat.printName();
cat.makeNoise();
