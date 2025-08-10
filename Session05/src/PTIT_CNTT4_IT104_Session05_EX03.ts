class Employee {
    public name:string;
    protected company:string;
    private phone:number;
    constructor (name:string,company:string,phone:number){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    public printinfo():void{
        console.log(`Ten:${this.name}-Tên công ty:${this.company}-Sđt:${this.phone}`);
    }
}
const employee1 = new Employee("Duc","R",123456);
employee1.printinfo();