class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Mã sinh viên: ${this.id}`);
        console.log(`Tên: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Tên: ${this.name}`);
        console.log(`Môn dạy: ${this.subject}`);
    }
}
const student = new Student("Lương Trọng Đạt", 212);
student.displayInfo();
const teacher = new Teacher("Đạt Đạt", "Lập trình ReactJS");
teacher.displayInfo();
