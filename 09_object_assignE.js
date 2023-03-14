console.log(`----------------------------------------------`);
console.log(`====#1 Create object name ====`);

const sbibank = {
    bankName : "SBI",
    location : "Wakad",
    ifsc : "SBIN0023423",
    accountNumber : 23235234,
    interestrate : 7.8,
    showDetails : function(){
        console.log(`${this.bankName} ${this.location} ${this.ifsc} ${this.accountNumber} ${this.interestrate}`);
    } 

}

const axisBank = {
    bankName : "AXIS Bank",
    location : "Kalyani Nagar",
    ifsc : "AXIS003423",
    accountNumber : 435866234,
    interestrate : 8.2,
    showDetails : function(){
        console.log(`${this.bankName} ${this.location} ${this.ifsc} ${this.accountNumber} ${this.interestrate}`);
    } 
}

const hdfc = {
    bankName : "HDFC Bank",
    location : "Kothrud",
    ifsc : "HDFC78687",
    accountNumber : 86786564,
    interestrate : 8.5,
    showDetails : function(){
        console.log(`${this.bankName} ${this.location} ${this.ifsc} ${this.accountNumber} ${this.interestrate}`);
    } 
}

const yesBank = {
    bankName : "Yes Bank",
    location : "Chandani Chowk",
    ifsc : "YESIN03423",
    accountNumber : 879834234,
    interestrate : 8.9,
    showDetails : function(){
        console.log(`${this.bankName} ${this.location} ${this.ifsc} ${this.accountNumber} ${this.interestrate}`);
    } 
}

sbibank.showDetails();
axisBank.showDetails();
hdfc.showDetails();
yesBank.showDetails();