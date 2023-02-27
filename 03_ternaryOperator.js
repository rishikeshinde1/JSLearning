console.log(
  "If graduation score is greater than equal to 70 OR HSC score is greater than equal to 90 OR SSC score is greater than equal to 90"
);

function tcsEligibility(gradScore, hscScore, sscScore, candName) {
  var result =
    gradScore >= 70 || hscScore >= 80 || sscScore > 90
      ? `Congratulations ${candName}!!!, you are eligible for TCS interview`
      : `Sorry ${candName}, unfortunately you are not eligible for interview!`;
  console.log(result);
}

tcsEligibility(80, 86, 90, "Rishi");
tcsEligibility(70, 65, 55, "Ajay");
tcsEligibility(60, 79, 88, "vijay");
