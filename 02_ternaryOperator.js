console.log(`***** #1 - Check male marriage eligibility if age is greater than 21 and grnder is male*****`);

function maleMarriageEligibility(gender, age, boyName){

var maleEligibility =  gender == 'male' && age >= 21? `Hey ${boyName} congrats your age is ${age} hence you are eligible for Marriage`:`Hey ${boyName} your age ${age} is not eligible for marriage`
return maleEligibility;
}

var res = maleMarriageEligibility('male', 25, 'Bill Gates');
console.log(res);
var res1 = maleMarriageEligibility('male', 20, 'Steve Jobs');
console.log(res1);

console.log(``);


console.log(`***** #2 - Check Female marriage eligibility if age is greater than 18 and grnder is female*****`);

function femaleMarriageEligibility(gender, age, girlName){

var femaleEligibility =  gender == 'female' && age >= 18? `Hey ${girlName} congrats your age is ${age} hence you are eligible for Marriage`:`Hey ${girlName} your age ${age} is not eligible for marriage`
return femaleEligibility;
}

var res2 = femaleMarriageEligibility('female', 16, 'Jenifer');
console.log(res2);
var res3 = femaleMarriageEligibility('female', 26, 'Malinda Gates');
console.log(res3);