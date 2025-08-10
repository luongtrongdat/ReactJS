class Vehiclee {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    print() {
        console.log(`id:${this.id}-Ten:${this.name}-năm:${this.year}-tên công ty:${this.company}`);
    }
}
const p1 = new Vehiclee("Duc", 2000, "RS", 1);
p1.print();
