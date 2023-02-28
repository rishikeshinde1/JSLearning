console.log(`------Check if the year is leap year or not------`);

var checkLeapYear = function (year) {
  if (typeof year != "number") {
    console.log(
      `Your have provided "${year}" is not valid year value to check!`
    );
  } else if (typeof year == "number" && year.toString().length != 4) {
    console.log(`year value "${year}" is not valid year value to check!`);
  } else if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return console.log(`Year ${year} is a Leap Year!`);
  } else {
    console.log(`Year ${year} is not a Leap Year!`);
  }
};
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);
checkLeapYear(750);
