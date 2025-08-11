abstract class Job{
    protected type:string;
    constructor (type:string){
        this.type = type;
    }
    public printType():void{
        console.log(`Loại cong viecj: ${this.type}`);
    }
    abstract calulateSalary():number;
}
class PartimeIob extends Job {
    private workingHour: number;
    constructor (type:string,workingHour:number){
        super(type);
        this.workingHour = workingHour;
    }
    public calulateSalary(): number {
        return 3000* this.workingHour;
    }
}
class fullTimeJob extends Job{
    constructor (type:string){
        super(type);
    }
    public calulateSalary(): number {
        return 1000000;
    }
}
const partTime = new PartimeIob("Part-time", 120); // 120 giờ
const fullTime = new fullTimeJob("Full-time");

partTime.printType();
console.log(`Lương: ${partTime.calulateSalary().toLocaleString()} VND`);

fullTime.printType();
console.log(`Lương: ${fullTime.calulateSalary().toLocaleString()} VND`);