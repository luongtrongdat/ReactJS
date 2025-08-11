/*Abstract Method
Đặc điểm:
-Là phương thức trừu tượng, không có phần thân (body) trong lớp khai báo
-Được khai báo trong abstract class hoặc interface
-Lớp con bắt buộc phải override (ghi đè) và viết phần thân cho phương thức đó
-Không thể gọi trực tiếp abstract method từ lớp cha
Khi dùng:
-Khi muốn định nghĩa một hợp đồng rằng bất kỳ lớp con nào kế thừa cũng phải triển khai phương thức này*/
/*Method 
Đặc điểm:
-Có thể nằm trong class bình thường hoặc abstract class
-Có phần thân (body) định nghĩa sẵn
-Lớp con có thể kế thừa nguyên bản hoặc ghi đè nếu muốn (override không bắt buộc)
Khi dùng:
-Khi hành vi của phương thức giống nhau cho tất cả lớp con, hoặc có thể viết một mặc định mà lớp con không bắt buộc phải thay đổi
*/
abstract class Animal {
    // Abstract method 
    abstract makeSound(): void;

    // Method
    move(): void {
        console.log("phạc phạc");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meo");
    }
}

const dog = new Dog();
dog.makeSound(); 
dog.move();      

const cat = new Cat();
cat.makeSound(); 
cat.move();     