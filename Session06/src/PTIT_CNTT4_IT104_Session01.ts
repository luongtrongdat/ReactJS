abstract class Shape {
    protected name:string;
    constructor (name:string){
        this.name = name;
    }
    getName():string{
        return this.name;
    }
    abstract getSize():void;
}
class Rectangle extends Shape {
    private witth: number;
    private heiight:number;
    constructor(name:string,witth:number,heiight:number){
        super(name);
        this.witth = witth;
        this.heiight = heiight;
    }
    public getSize(): void {
        console.log(`Chiều rộng:${this.witth},chiều cao:${this.heiight}`);
    }
}
const p1 = new Rectangle("HCN",10,5);
console.log(`Ten hinh:${p1.getName()}`);
p1.getSize();