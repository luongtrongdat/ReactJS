class Retangle{
    private withh :number;
    private heightt:number;
    constructor (withh:number,heightt:number){
        this.withh = withh;
        this.heightt = heightt;
    }
    acreage():number{
        return this.withh*this.heightt;
    }
    perimeter():number{
        return 2*(this.withh+this.heightt);
    }
    public print():void {
        console.log(`chieu dai:${this.heightt},chieu rong:${this.withh},chu vi:${this.perimeter()},dien tích:${this.acreage()}`);
    }
}
const p2= new Retangle(5,10);
p2.print();