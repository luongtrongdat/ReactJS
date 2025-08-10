class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printinfo() {
        console.log(`Ten:${this.name}-Tên công ty:${this.company}-Sđt:${this.phone}`);
    }
}
const employee1 = new Employee("Duc", "R", 123456);
employee1.printinfo();
