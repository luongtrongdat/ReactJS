class _Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(newName: string): void {
        this.name = newName;
    }
}

let _allStudents: Student[] = [];

class _Classroom {
    private students: Student[] = [];

    public showStudents(): void {
        if (this.students.length === 0) {
            console.log("Lớp không có học sinh.");
            return;
        }
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach((s, index) => {
            console.log(`${index + 1}. ID: ${s.getId()} - Tên: ${s.getName()}`);
        });
    }

    public addStudent(student: Student): void {
        this.students.push(student);
    }

    public filterStudent(id: number): Student | undefined {
        return this.students.find(s => s.getId() === id);
    }
    public addStudentInClass(id: number): void {
        const student = allStudents.find(s => s.getId() === id);
        if (student) {
            this.students.push(student);
            allStudents = allStudents.filter(s => s.getId() !== id);
        } else {
            console.log(`Không tìm thấy học sinh có ID ${id} trong mảng allStudents.`);
        }
    }

    public removeStudent(id: number): void {
        const studentIndex = this.students.findIndex(s => s.getId() === id);
        if (studentIndex !== -1) {
            const removedStudent = this.students.splice(studentIndex, 1)[0];
            allStudents.push(removedStudent);
            console.log(`Đã xóa học sinh ID ${id} và đưa lại vào mảng allStudents.`);
        } else {
            console.log(`Không tìm thấy học sinh có ID ${id} trong lớp.`);
        }
    }

    public editStudent(id: number, newName: string): void {
        const student = this.students.find(s => s.getId() === id);
        if (student) {
            student.setName(newName);
            console.log(`Đã cập nhật tên học sinh ID ${id} thành "${newName}".`);
        } else {
            console.log(`Không tìm thấy học sinh có ID ${id} trong lớp.`);
        }
    }
}

allStudents.push(
    new Student(1, "An"),
    new Student(2, "Bình"),
    new Student(3, "Chi"),
    new Student(4, "Dũng"),
    new Student(5, "Hà"),
    new Student(6, "Lan")
);

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