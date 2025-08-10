// TINH KE THUA
// 1 class khi ke thua class cha thi se co thuoc tinh va phuong thuc cua class cha
class _Animal{
    protected name:string;
    constructor(name:string) {
        this.name = name;
    }
    sound(){
        return `tieng keu cua ${this.name}`
    }
}
class _Dog extends _Animal{
    sound(){
        return `${this.name} keu gau gau`
    }
}
class _Cat extends _Animal{
    sound(){
        return `${this.name} keu meo meo`
    }
}
const cat1 = new _Cat("meo");
console.log(cat1.sound());

const dog1 = new _Dog("cho");
console.log(dog1.sound());
