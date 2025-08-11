class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loại cong viecj: ${this.type}`);
    }
}
class PartimeIob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calulateSalary() {
        return 3000 * this.workingHour;
    }
}
class fullTimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calulateSalary() {
        return 1000000;
    }
}
const partTime = new PartimeIob("Part-time", 120); // 120 giờ
const fullTime = new fullTimeJob("Full-time");
partTime.printType();
console.log(`Lương: ${partTime.calulateSalary().toLocaleString()} VND`);
fullTime.printType();
console.log(`Lương: ${fullTime.calulateSalary().toLocaleString()} VND`);
