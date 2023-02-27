function marriageEligibility(gender, age, name) {
  if (gender == "Male" && age >= 21) {
    var str = `Hey ${name} you are Eligible for maariage`;
    return str;
  } else {
    var str = `Hey ${name} you are not eligible for marriage`;
    return str;
  }
}
var result = marriageEligibility("Male", 20, "Bill Gates");
console.log(result);
