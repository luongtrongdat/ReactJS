class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudents = [];
class Classroom {
    constructor() {
        this.students = [];
    }
    // In danh sách học sinh
    showStudents() {
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach((s, index) => {
            console.log(`${index + 1}. ID: ${s.getId()} - Tên: ${s.getName()}`);
        });
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.find(s => s.getId() === id);
    }
    addStudentInClass(id) {
        const student = allStudents.find(s => s.getId() === id);
        if (student) {
            this.students.push(student);
            allStudents = allStudents.filter(s => s.getId() !== id);
        }
        else {
            console.log(`Không tìm thấy học sinh có ID ${id}`);
        }
    }
}
allStudents.push(new Student(1, "An"), new Student(2, "Bình"), new Student(3, "Chi"), new Student(4, "Dũng"), new Student(5, "Hà"), new Student(6, "Lan"));
const class1 = new Classroom();
const class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);
console.log("=== Lớp 1 ===");
class1.showStudents();
console.log("\n=== Lớp 2 ===");
class2.showStudents();
console.log("\nMảng allStudents sau khi chia lớp:", allStudents);
