class Animal {
    constructor(
        private name: string,
        protected age: number,
        public species: string
    ) {}
    public getName(): string {
        return this.name;
    }
    public setName(newName: string): void {
        this.name = newName;
    }
    public getAge(): number {
        return this.age;
    }
    public setAge(newAge: number): void {
        if (newAge > 0) {
            this.age = newAge;
        } else {
            console.error("Tuổi phải là một số dương.");
        }
    }
    public displayInfo(): void {
        console.log("--- Thông tin thú cưng ---");
        console.log(`Tên: ${this.getName()}`);
        console.log(`Tuổi: ${this.getAge()}`);
        console.log(`Loài: ${this.species}`);
    }
}

class Dog extends Animal {
    public breed: string;
    constructor(name: string, age: number, breed: string) {
        super(name, age, "Chó");
        this.breed = breed;
    }
    speak(): void {
        console.log("Gâu gâu");
    }
    public displayInfo(): void {
        super.displayInfo(); 
        console.log(`Giống: ${this.breed}`);
    }
}

class Cat extends Animal {
    public breed: string;
    constructor(name: string, age: number, breed: string) {
        super(name, age, "Mèo");
        this.breed = breed;
    }

    speak(): void {
        console.log("Meo meo");
    }

    public displayInfo(): void {
        super.displayInfo();
        console.log(`Giống: ${this.breed}`);
    }
}

class Rabbit extends Animal {
    public breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age, "Thỏ");
        this.breed = breed;
    }

    speak(): void {
        console.log("Kít kít");
    }

    public displayInfo(): void {
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
const petShop: Animal[] = [myDog, myCat, myRabbit];

petShop.forEach(animal => {
    console.log(`\n${animal.getName()} (${animal.species}) kêu:`);
});