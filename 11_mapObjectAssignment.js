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

const mapOfBanks = new Map();
mapOfBanks.set("12313419012", axis_bank);
mapOfBanks.set("232342321", sbi_bank);
mapOfBanks.set("34343667", icici_bank);
mapOfBanks.set("897243924", kotak_bank);
mapOfBanks.set("6778643924", hdfc_bank);
mapOfBanks.set("34543924", punjab_bank);

let keysMap = mapOfBanks.keys();

for (let key of keysMap) {
    console.log(key, mapOfBanks.get(key));
}
//console.log(mapOfBanks.axis_bank.accout_no);


console.log(`mapOfBanks size is : ${mapOfBanks.size}`); 



for(const key of keysMap) 
{ 
    console.log(mapOfBanks.get(key));
}


