abstract class Person {
    constructor(public name: string) {}
    abstract displayInfo(): void;
}
class Student extends Person {
    id: number;
    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(`Mã sinh viên: ${this.id}`);
        console.log(`Tên: ${this.name}`);
    }
}
class Teacher extends Person {
    subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`Tên: ${this.name}`);
        console.log(`Môn dạy: ${this.subject}`);
    }
}

const student = new Student("Lương Trọng Đạt", 212);
student.displayInfo();
const teacher = new Teacher("Đạt Đạt", "Lập trình ReactJS");
teacher.displayInfo();