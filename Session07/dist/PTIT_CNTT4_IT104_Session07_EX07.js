class $Account {
    constructor(accountNumber, balance = 0, status = "active") {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
    }
    deposit(amount) {
        if (amount > 0 && this.status === "active") {
            this.balance += amount;
            this.history.push(`Nap: +${amount} || So du: ${this.balance}`);
        }
        else {
            this.history.push(`Nap that bai: +${amount} || So du: ${this.balance}`);
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance && this.status === "active") {
            this.balance -= amount;
            this.history.push(`Rut: -${amount} || So du: ${this.balance}`);
        }
        else {
            this.history.push(`Rut that bai: -${amount} || So du: ${this.balance}`);
        }
    }
    showHistory() {
        for (const item of this.history) {
            console.log(item);
        }
    }
}
class SavingAccount extends $Account {
    constructor(accountNumber, balance = 0, interestRate = 0, status = "active") {
        super(accountNumber, balance, status);
        this.interestRate = interestRate;
    }
    withdraw(amount) {
        if (amount > 0 && this.status === "active") {
            if (amount >= this.balance) {
                this.history.push(`Rut toan bo: -${this.balance}, Số dư: 0`);
                this.balance = 0;
            }
            else {
                this.balance -= amount;
                this.history.push(`Rut: -${amount} || So du: ${this.balance}`);
            }
        }
        else {
            this.history.push(`Rut that bai: -${amount} || So du: ${this.balance}`);
        }
    }
}
const savingAcc = new SavingAccount("123456789", 100000, 0.09);
savingAcc.deposit(2000);
savingAcc.withdraw(1000);
savingAcc.showHistory();
