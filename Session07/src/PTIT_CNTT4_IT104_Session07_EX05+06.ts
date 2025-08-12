class Account {
    protected id:number;
    protected userName:string;
    protected password:string;
    protected isLogin:boolean;
    protected role:string;
    constructor(id:number,userName:string,password:string,role:string){
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    public login():void{
    }
    public logout():void{
        if(this.isLogin == true){
            console.log("Đăng xuất thanh công");
            this.isLogin = false;
        }else{
            console.log("Ban chưa đăng nhập");
        }
    }
}
class userAcc extends Account {
    protected status:string;
    constructor (id:number,userName:string,password:string,role:string,status:string){
        super(id,userName,password,role);
        this.status = status
    }
    public login():void{
        if(this.status === "active"){
            console.log(`chao mung ban ${this.userName}`);
            this.isLogin = true;
        }else if(this.status === "banned"){
            console.log("Tai khoản của bạn đã bị khóa");
        }
    }
    public getId():number{
        return this.id;
    }
}
class adminAcc extends Account {
    constructor(id:number,userName:string,password:string){
        super(id,userName,password,"admin");
    }
    public banUser(UserList:userAcc[],UserId:number):void{
        const user =UserList.find(u=>u.getId() == UserId);
        if(user){
            user["status"] = "banned";
            console.log(`Ng dùng ${this.userName} đã bị khóa tk`);
        }else{
            console.log("Ko tìm thấy ng dung cần khóa");   
        }
    }
}
const user: userAcc[] = [
    new userAcc(1, "nguyenvana", "123456", "user", "active"),
];
const admin = new adminAcc(99, "ad", "root");
admin.banUser(user, 1); 
user[0]?.login(); 