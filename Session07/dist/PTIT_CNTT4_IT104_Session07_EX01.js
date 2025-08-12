class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInFo() {
        console.log(`Ten:${this.name},ten cong ty:${this.company},Sđt:${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInFor() {
        super.printInFo();
        console.log(`Quy mo nhóm: ${this.teamSize} người`);
    }
}
const n1 = new Employee("Dat", "sxyz", "0123456");
n1.printInFo();
const n2 = new Manager("Dat", "xyz", "0123456", 5);
n2.printInFor();
