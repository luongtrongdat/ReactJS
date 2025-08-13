// generic
// giup viet ma linh hoat, tai sd cao
function generic(param) {
    return param;
}
generic("1");
generic(1);
generic(true);
// 1. kieu mang
let number = [1, 2, 3, 4];
let number1 = [1, 2, 3, 4];
let studentName = ["hoa", "anh"];
// 2. kieu Record (mo ta kieu du lieu cua key va value)
const user_info = {
    name: "dat",
    age: 18
};
const partialUser = {
    email: "cuccuc@gmail.com",
};
const score = {
    math: 10,
    physic: 9
};
let user1 = {
    name: "hoa",
    address: "hn",
    id: "11"
};
// Omit loai bo 1 so key khong can thiet
let user2 = {
    id: "01",
    name: "hoa",
    email: "cuccuc@gmail.com",
    address: "hn"
};
