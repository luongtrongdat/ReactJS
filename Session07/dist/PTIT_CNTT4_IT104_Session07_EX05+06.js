var _a;
class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login() {
    }
    logout() {
        if (this.isLogin == true) {
            console.log("Đăng xuất thanh công");
            this.isLogin = false;
        }
        else {
            console.log("Ban chưa đăng nhập");
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            console.log(`chao mung ban ${this.userName}`);
            this.isLogin = true;
        }
        else if (this.status === "banned") {
            console.log("Tai khoản của bạn đã bị khóa");
        }
    }
    getId() {
        return this.id;
    }
}
class adminAcc extends Account {
    constructor(id, userName, password) {
        super(id, userName, password, "admin");
    }
    banUser(UserList, UserId) {
        const user = UserList.find(u => u.getId() == UserId);
        if (user) {
            user["status"] = "banned";
            console.log(`Ng dùng ${this.userName} đã bị khóa tk`);
        }
        else {
            console.log("Ko tìm thấy ng dung cần khóa");
        }
    }
}
const user = [
    new userAcc(1, "nguyenvana", "123456", "user", "active"),
];
const admin = new adminAcc(99, "ad", "root");
admin.banUser(user, 1);
(_a = user[0]) === null || _a === void 0 ? void 0 : _a.login();
