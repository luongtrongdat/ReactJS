class Mumal extends Animal {
    private futColor : string;
    constructor(name: string, age:number, furColor:string){
        super(name, age);
        this.name = name;
        this.age = age;
        this.furColor = furColor;
    }
    move():string{
        return `phuong thuc di chuyen cua dong vat co vu`
    }
    getFurColor():string{
        // lay thong tin sai canh cua loai dv co vu
        return `mau long cua loai : ${this.name} la : ${this.furColor}`
    }
}
class Bird extends Animal{
    private wingSpan: number;
    constructor(name: string, age:number, wingSpan:number){
        super(name, age, wingSpan);
        this.name = name;
        this.age = age;
        this.wingSpan = wingSpan;
    }
    move():string{
        return `phuong thuc di chuyen cua chim`
    }
    getWingSpan():string{
        // lay thong tin sai canh cua loai chim
        return `sai canh cua loai : ${this.name} la : ${this.wingSpan}`
    }
}
class RapTitle extends Animal{
    private venomous: boolean;
    constructor(name :string, age:number, venomous:boolean){
        super(name, age, venomous);
        this.name = name;
        this.age = age;
        this.venomous = venomous
    }
    move():string{
        return `phuong thuc di chuyen cua bo sat`
    }
}
// tinh da hinh cua 1 phuong thuc nhung trien khai khac nhau
const animal:Animal[]={
    new Bird("Bird", 2, 5),
    new RapTitle("ran", 2, true),
    new Mumal("Blue", 2, "mau xanh")
};
// goi phuong thuc
animal.forEach(item=>{
    // thong tin di chuyen cua cac loai
    console.log(item.move());
})
// thong tin mau long cua loai
console.log(animal[2].getFurColor());
// thong tin sai canh cua loai
console.log(animal[0].getWingSpan());
