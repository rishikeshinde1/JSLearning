class Bank {
    constructor(bankname, location, account, ifsc, interestrate){
        this.bankname = bankname;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.interestrate = interestrate;
    }
    showDetails(){
        console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.interestRate} `);
    }
}

const sbiBank = new Bank("sbi", "Wakad", "1234134", "SBIN424534", 7.8);
sbiBank.showDetails();


class Person {
    constructor(fullName, city){
        this.fullName = fullName;
        this.city = city;
    }
}
const personDhoni = new Person("MS Dhoni", "Ranchi");
const personShubham = new Person("Shubham Gill", "Mumbai");

console.log(personDhoni instanceof Person);
//console.log(personShubham instanceof Bank);
//console.log(sbiBank instanceof Bank);