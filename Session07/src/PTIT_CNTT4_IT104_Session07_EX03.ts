abstract class Animal {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract makeNoise(): void;
    printName(): void {
        console.log(`Name: ${this.name}`);
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    public makeNoise(): void {
        console.log(`${this.name} keu gau gau`);
    }
}
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    public makeNoise(): void {
        console.log(`${this.name} keu meo meo`);
    }
}
let dog = new Dog("dog");
dog.printName();
dog.makeNoise();
let cat = new Cat("cat");
cat.printName();
cat.makeNoise();