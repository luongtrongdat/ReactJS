class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getAge() {
        return this.age;
    }
    setAge(newAge) {
        if (newAge > 0) {
            this.age = newAge;
        }
        else {
            console.error("Tuổi phải là một số dương.");
        }
    }
    displayInfo() {
        console.log("--- Thông tin thú cưng ---");
        console.log(`Tên: ${this.getName()}`);
        console.log(`Tuổi: ${this.getAge()}`);
        console.log(`Loài: ${this.species}`);
    }
}
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age, "Chó");
        this.breed = breed;
    }
    speak() {
        console.log("Gâu gâu");
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Giống: ${this.breed}`);
    }
}
class Cat extends Animal {
    constructor(name, age, breed) {
        super(name, age, "Mèo");
        this.breed = breed;
    }
    speak() {
        console.log("Meo meo");
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Giống: ${this.breed}`);
    }
}
class Rabbit extends Animal {
    constructor(name, age, breed) {
        super(name, age, "Thỏ");
        this.breed = breed;
    }
    speak() {
        console.log("Kít kít");
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Giống: ${this.breed}`);
    }
}
console.log("--- KHỞI TẠO CÁC ĐỐI TƯỢNG ---");
const myDog = new Dog("Milu", 5, "Golden Retriever");
const myCat = new Cat("Miu", 3, "Xiêm");
const myRabbit = new Rabbit("Bugs", 1, "Hà Lan");
myDog.displayInfo();
myCat.displayInfo();
myRabbit.displayInfo();
console.log("\n--- CẬP NHẬT THÔNG TIN ---");
myDog.setAge(6);
myCat.breed = "Ba Tư";
myRabbit.setName("Bunny");
console.log("\n--- THÔNG TIN SAU KHI CẬP NHẬT ---");
myDog.displayInfo();
myCat.displayInfo();
myRabbit.displayInfo();
console.log("\n--- VÍ DỤ VỀ TÍNH ĐA HÌNH ---");
const petShop = [myDog, myCat, myRabbit];
petShop.forEach(animal => {
    console.log(`\n${animal.getName()} (${animal.species}) kêu:`);
});
