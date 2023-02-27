console.log(`--------------#3 Check TCS Interview Eligibility------------`);

function checkInterviewEligibility(gradScore, hscScore, sscScore, candName) {
  if (gradScore >= 70) {
    console.log(
      `Congratulations  ${candName}! your Graduation Score is ${gradScore}, you are Eligible for TCS interview`
    );
    console.log(`***`);
  } else if (hscScore >= 80) {
    console.log(
      `Congratulations  ${candName}!  you HSC score is ${hscScore}, you are Eligible for TCS interview`
    );
    console.log(`***`);
  } else if (sscScore >= 70) {
    console.log(
      `Congratulations ${candName}! you SSC score is ${sscScore}, you are Eligible for TCS interview`
    );
    console.log(`***`);
  } else {
    console.log(
      `Sorry ${candName}, Unfortunately you are not eligible for TCS interview`
    );
  }
}

checkInterviewEligibility(80, 86, 90, "Rishi");
checkInterviewEligibility(70, 65, 55, "Steve");
checkInterviewEligibility(60, 79, 88, "Bill");
