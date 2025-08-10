class Vehicle {
    name:string;
    year : number;
    company:string;
    
    constructor (name:string,year:number,company:string){
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
const vehicle1 = new Vehicle("Toyota",2002,"Toyota");
const vehicle2 = new Vehicle("Honda",2002,"Honda");
console.log(`Ten xe:${vehicle1.name} san xuat:${vehicle1.year} hãng xe: ${vehicle1.company}`);