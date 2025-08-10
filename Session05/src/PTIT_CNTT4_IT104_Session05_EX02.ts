class Student {
    id: number;
    age: number;
    email: string;
    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
const students: Student[] = [];
students.push(new Student(1, 20, "namg@gmail.com"));
students.push(new Student(2, 20, "logg@gmail.com"));
students.push(new Student(3, 20, "qug@gmail.com"));
students.forEach(element => {
    console.log(`ID: ${element.id}, Age: ${element.age}, Email: ${element.email}`);
});