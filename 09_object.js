let student = {
    fName : "Rishi",
    lName : "Shinde",
    isWorking:true,
    collegeName: "ABC",
    age:32,
    id:32423,
    address : {
        street:"Ganesh Nagar",
        city:"Pune",
        pin:412001
    },
    friends:["Steve", "Elon", "Bill"],
    show: function(){
        console.log("I am show() function");
    },
    addressDetails: function(){
        return `Address is: Street: ${this.address.street}, City: ${this.address.city}, PIN: ${this.address.PIN}`
     }
};

let resultAddress = student.addressDetails();
console.log(resultAddress);


student.marks = {
    math: 80,
    physics: 60,
    drawing: 70
}


//access nested object properties
console.log(student.address.city);
//student.address.city

student.address.pin = 431205;
console.log(student.address.pin);

//adding object to object
console.log(student.marks);


//
console.log(student.friends[student.friends.length - 1]);

student.show();