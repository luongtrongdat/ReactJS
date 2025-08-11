class _Student {
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
    setName(newName) {
        this.name = newName;
    }
}
let _allStudents = [];
class _Classroom {
    constructor() {
        this.students = [];
    }
    showStudents() {
        if (this.students.length === 0) {
            console.log("Lớp không có học sinh.");
            return;
        }
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
            console.log(`Không tìm thấy học sinh có ID ${id} trong mảng allStudents.`);
        }
    }
    removeStudent(id) {
        const studentIndex = this.students.findIndex(s => s.getId() === id);
        if (studentIndex !== -1) {
            const removedStudent = this.students.splice(studentIndex, 1)[0];
            allStudents.push(removedStudent);
            console.log(`Đã xóa học sinh ID ${id} và đưa lại vào mảng allStudents.`);
        }
        else {
            console.log(`Không tìm thấy học sinh có ID ${id} trong lớp.`);
        }
    }
    editStudent(id, newName) {
        const student = this.students.find(s => s.getId() === id);
        if (student) {
            student.setName(newName);
            console.log(`Đã cập nhật tên học sinh ID ${id} thành "${newName}".`);
        }
        else {
            console.log(`Không tìm thấy học sinh có ID ${id} trong lớp.`);
        }
    }
}
allStudents.push(new Student(1, "An"), new Student(2, "Bình"), new Student(3, "Chi"), new Student(4, "Dũng"), new Student(5, "Hà"), new Student(6, "Lan"));
const _class1 = new Classroom();
const _class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);
console.log("=== Lớp 1 trước khi thay đổi ===");
class1.showStudents();
class1.removeStudent(2);
class1.editStudent(3, "Chi (đã đổi tên)");
console.log("\n=== Lớp 1 sau khi thay đổi ===");
class1.showStudents();
console.log("\nMảng allStudents hiện tại:");
allStudents.forEach(s => {
    console.log(`ID: ${s.getId()} - Tên: ${s.getName()}`);
});
