class Employee {
    public name: string;
    protected company: string;
    private phone:string;
    constructor (name:string,company:string,phone:string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    public printInFo():void{
        console.log(`Ten:${this.name},ten cong ty:${this.company},Sđt:${this.phone}`);

    }
}
class Manager extends Employee {
    private teamSize:number;
    constructor(name:string,company:string,phone:string,teamSize:number){
        super(name,company,phone);
        this.teamSize = teamSize;
    }
    public printInFor(): void {
        super.printInFo();
        console.log(`Quy mo nhóm: ${this.teamSize} người`);
    }
}
const n1 = new Employee("Dat","sxyz","0123456");
n1.printInFo();
const n2 = new Manager("Dat","xyz","0123456",5);
n2.printInFor();