// generic
// giup viet ma linh hoat, tai sd cao
function generic<T>(param: T): T{
    return param;
}
generic("1");
generic(1);
generic(true);

// 1. kieu mang
let number: number[]=[1, 2, 3, 4];
let number1: Array<number>=[1, 2, 3, 4];
let studentName : Array<string>=["hoa", "anh"]; 
// 2. kieu Record (mo ta kieu du lieu cua key va value)
const user_info : Record<string, string | number> = {
    name : "dat",
    age : 18
}
// 3. kieu Partial (kieu tuy chon, lua chon)
interface Contact{
    email:string,
    phone:string
}
const partialUser: Partial<Contact> = {
    email: "cuccuc@gmail.com",
}
// 4. kieu Readonly (chi doc, hien thi, khong cap nhat, chinh sua)
interface Score{
    math:number,
    physic:number
}
const score: Readonly<Score> ={
    math: 10,
    physic: 9
}
// 5. pick: tuy chon
interface User {
    name: string,
    id: string,
    email: string,
    address:string,
    salary:string
}
let user1:Pick<User, "name" | "address"| "id"> = {
    name:"hoa",
    address:"hn",
    id:"11"
}
// Omit loai bo 1 so key khong can thiet
let user2: Omit<User, "salary"> = {
    id: "01",
    name:"hoa",
    email:"cuccuc@gmail.com",
    address:"hn"
}