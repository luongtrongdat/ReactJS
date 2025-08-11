class Student {
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
}

let allStudents: Student[] = [];
class Classroom {
    private students: Student[] = [];

    // In danh sách học sinh
    public showStudents(): void {
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
        console.log(`Không tìm thấy học sinh có ID ${id}`);
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