class _Account {
    constructor(accountNumber, balance = 0, status = "active") {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
    }
    deposit(amount) {
        if (amount > 0 && this.status === "active") {
            this.balance += amount;
            this.history.push(`Nap: +${amount}|| So du: ${this.balance}`);
        }
        else {
            this.history.push(`Nap that bai: +${amount}|| So du: ${this.balance}`);
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance && this.status === "active") {
            this.balance -= amount;
            this.history.push(`Rut: -${amount}|| So du: ${this.balance}`);
        }
        else {
            this.history.push(`Rut thta bai: -${amount}|| So du: ${this.balance}`);
        }
    }
    showHistory() {
        console.log("History:");
        for (const item of this.history) {
            console.log(item);
        }
    }
}
class CheckingAccount extends _Account {
    constructor(accountNumber, balance = 0, overdraftLimit = 0, status = "active") {
        super(accountNumber, balance, status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount > 0 && this.status === "active") {
            if (amount <= this.balance + this.overdraftLimit) {
                this.balance -= amount;
                this.history.push(`Rut: -${amount}|| So du: ${this.balance}`);
            }
            else {
                this.history.push(`Rut vuot han muc cho phep la: -${amount}|| So du: ${this.balance}`);
            }
        }
        else {
            this.history.push(`Rut that bai: -${amount}||So du: ${this.balance}`);
        }
    }
}
const checkAcc = new CheckingAccount("123456", 10000, 2000);
checkAcc.deposit(1000);
checkAcc.withdraw(4000);
checkAcc.showHistory();
