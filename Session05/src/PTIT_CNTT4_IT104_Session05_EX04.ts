class Vehiclee {
    public name:string;
    protected year:number;
    private company:string;
    public readonly id: number;
    constructor (name:string,year:number,company:string,id:number){
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    public print():void{
        console.log(`id:${this.id}-Ten:${this.name}-năm:${this.year}-tên công ty:${this.company}`);
    }
}
const p1 = new Vehiclee ("Duc",2000,"RS",1);
p1.print();