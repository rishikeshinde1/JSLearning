console.log(`-----Check month of the year with switch case-----`);

function monthOfYear(month) {
  switch (month) {
    case 1:
      console.log(`month ${month} of year  is January`);
      break;
    case 2:
      console.log(`month ${month} of year  is February`);
      break;
    case 3:
      console.log(`month ${month} of year  is march`);
      break;
    case 4:
      console.log(`month ${month} of year  is April`);
      break;
    case 5:
      console.log(`month ${month} of year  is May`);
      break;
    case 6:
      console.log(`month ${month} of year  is June`);
      break;
    case 7:
      console.log(`month ${month} of year  is July`);
      break;
    case 8:
      console.log(`month ${month} of year  is August`);
      break;
    case 9:
      console.log(`month ${month} of year  is September`);
      break;
    case 10:
      console.log(`month ${month} of year  is October`);
      break;
    case 11:
      console.log(`month ${month} of year  is November`);
      break;
    case 12:
      console.log(`month ${month} of year  is December`);
      break;
    default:
      console.log(`Invalid month format ${month}`);
      break;
  }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
