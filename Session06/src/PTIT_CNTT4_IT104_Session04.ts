interface Geomatry {
    area():number;
    perimer():number;
}
class Circle implements Geomatry {
    private radius:number;
    constructor (radius:number){
        this.radius = radius;
    }
    public area ():number{
        return Math.PI * Math.pow(this.radius,2);
    }
    public perimer(): number {
        return 2* Math.PI * this.radius;
    }
}
class _Rectangle implements Geomatry{
    private wwidth: number;
    private hheight: number;
    constructor (wwith:number,hheight:number){
        this.wwidth = wwith;
        this.hheight = hheight;
    }
    public area(): number {
       return this.wwidth * this.hheight;
    }
    public perimer(): number {
        return 2*(this.wwidth+ this.hheight);
    }
}
const circle = new Circle(5);         
const rectangle = new _Rectangle(4, 6); 

console.log(`Diện tích: ${circle.area().toFixed(2)}`);
console.log(`Chu vi: ${circle.perimer().toFixed(2)}`);

console.log(`Diện tích: ${rectangle.area()}`);
console.log(`Chu vi: ${rectangle.perimer()}`);