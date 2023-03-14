console.log(`===#1 create object bankSbi using 4 literals ===`);
const bankSbi = {
    bankName : "SBI Bank",
    accountNumber : 34536345,
    timing : "10AM to 5PM",
    ifsc : "SBIN23423",
    
}
console.log(' ');
console.log(`------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(' ');
console.log(`===#2 create object bankLocation using 3 literals ===`);
const bankLocation = {
    street:"Sb road",
    city : "Pune",
    pinCode : 412003,
}
console.log(' ');
console.log(`------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(' ');
console.log(`===#3 -A- Clone bankSbi and bankLocation object using Object.Assign() method ===`);

const newBankSbi = Object.assign(bankSbi);
const newBankLocation = Object.assign(bankLocation);

console.log(`Cloned bankSbi object into newBankSbi object using Object.assign() => BankName: ${newBankSbi.bankName}, Account Number: ${newBankSbi.accountNumber}, Timing: ${newBankSbi.timing}, IFSC Code: ${newBankSbi.ifsc}`);

console.log(`Cloned bankLocation object into newBankLocation object using Object.assign() => Bank Address = Street: ${newBankLocation.street}, City: ${newBankLocation.city}, PINCODE: ${newBankLocation.pinCode}`);

console.log(' ');
console.log(`------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(' ');
console.log(`===#3 -B- Clone bankSbi and bankLocation using spread Oprator ===`);

const newBankObj = {...bankSbi};

console.log(`Cloned bankSbi object into newBankObj object using Spread operator (...) => BankName: ${newBankSbi.bankName}, Account Number: ${newBankSbi.accountNumber}, Timing: ${newBankSbi.timing}, IFSC Code: ${newBankSbi.ifsc}`);

const newBankLocationObj = {...bankSbi};

console.log(`Cloned bankLocation object into newBankLocationObj object  using Spread operator (...) => Bank Address = Street: ${newBankLocation.street}, City: ${newBankLocation.city}, PINCODE: ${newBankLocation.pinCode}`);

console.log(' ');
console.log(`------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(' ');
console.log(`===#4 Create object rateOfinterest ===`);

const rateOfInterest = {
    homeLoanInterest : 8.65,
    personalLoanInterest : 11.50,
    dueInterest : 18.30
}

console.log(`Types and rate Of Intrest are => Home Loan : ${rateOfInterest.homeLoanInterest}%, Personal Loan : ${rateOfInterest.personalLoanInterest}%, Due Loan : ${rateOfInterest.dueInterest}%, `);

console.log(' ');
console.log(`------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(' ');
console.log(`===#5 Merge step 1, step2 and step4 ===`);


const sbiDetails = {...bankSbi, ...bankLocation, ...rateOfInterest};
console.table(sbiDetails);

console.log(' ');
console.log(`------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(' ');
console.log(`===#5 Travering using for.. in loop ===`);

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
       // const element = sbiDetails[key];
        console.log(`${key}: ${sbiDetails[key]}`);
        
        
    }
}


