class Bank{
    constructor(bankName, location, ifsc, branchCode){
        this.bankName = bankName,
        this.location = location,
        this.ifsc = ifsc;
        this.branchCode = branchCode;
        this.openTime = "9 AM IST";
        this.closeTime = "6 PM IST";
    }
};

const yesBank = new Bank("YES Bank KP", "Kalyani Nagar", "YESIN2348237", "VRw2342");
const sbiBank = new Bank("SBI Bank", "Koregaon Park", "SBIN001237", "GMw689");
const axisBank = new Bank("AXIS Bank", "Kharadi", "HDGCIN2348237", "HDw445");
const mahBank = new Bank("Maharshtra Bank", "Alandi", "MHIN2100237", "BRw487");

console.log(`YES bank details are => Bank Name : ${yesBank.bankName}, Location : ${yesBank.location}, IFSC : ${yesBank.ifsc}, Branchcode : ${yesBank.branchCode}`);
console.log(`SBI bank details are => Bank Name : ${sbiBank.bankName}, Location : ${sbiBank.location}, IFSC : ${sbiBank.ifsc}, Branchcode : ${sbiBank.branchCode}`);
console.log(`AXIS bank details are => Bank Name : ${axisBank.bankName}, Location : ${axisBank.location}, IFSC : ${axisBank.ifsc}, Branchcode : ${axisBank.branchCode}`);
console.log(`Maharashtra bank details are => Bank Name : ${mahBank.bankName}, Location : ${mahBank.location}, IFSC : ${mahBank.ifsc}, Branchcode : ${mahBank.branchCode}`);

Bank.opentime = "9 AM IST";

console.log(`SBI Bank open time is => ${sbiBank.openTime} and close time is => ${sbiBank.closeTime}`);
console.log(`AXIS Bank open time is => ${axisBank.openTime} and close time is => ${axisBank.closeTime}`);
console.log(`Bank name is => ${yesBank.bankName}, BranchCode is ${yesBank.branchCode}, Bank will open at => ${yesBank.openTime}`);
//console.log(yesBank.closeTime);