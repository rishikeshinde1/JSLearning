class Bank{
    constructor(bank_name, location, accout_no, ifsc, interest_rate){
        this.bank_name = bank_name;
        this.location = location;
        this.accout_no = accout_no;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate
    }
};

const axis_bank = new Bank("Axis Bank", "Shivaji Nagar", 12313419012, "AXIS624724", 8.9);
const sbi_bank = new Bank("SBI Bank", "Viman Nagar", 232342321, "SBIN9909098", 9.5);
const icici_bank = new Bank("Axis Bank", "Kalyani Nagar", 34343667, "AXIS8778334", 8.5);
const kotak_bank = new Bank("Kotak Bank", "Ganesh Nagar", 897243924, "KOTAK78612", 8.0);
const hdfc_bank = new Bank("HDFC Bank", "Sinhgad Road", 6778643924, "HDFC09097", 8.7);
const punjab_bank = new Bank("Punjab Bank", "Wakad", 34543924, "PUNB67097", 9.7);

const setOfBanks = new Set();
setOfBanks.add(axis_bank);
setOfBanks.add(sbi_bank);
setOfBanks.add(icici_bank);
setOfBanks.add(kotak_bank);
setOfBanks.add(hdfc_bank);
setOfBanks.add(punjab_bank);
let i = 0;
for (const bank of setOfBanks) {
    console.log(`Name of Bank : ${bank.bank_name} --|-- Location : ${bank.location}`);
    //console.log();
    //i++;
}

