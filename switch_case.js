function weekDay(day) {
  switch (day) {
    case 1:
      console.log(`Day of the week is ${day} is Monday`);
      break;

    case 2:
      console.log(`Day of the week is ${day} is Tuesday`);
      break;

    case 3:
      console.log(`Day of the week is ${day} is Wednesday`);
      break;

    case 4:
      console.log(`Day of the week is ${day} is Thursday`);
      break;

    case 5:
      console.log(`Day of the week is ${day} is Friday`);
      break;

    case 6:
      console.log(`Day of the week is ${day} is Saturday`);
      break;

    case 7:
      console.log(`Day of the week is ${day} is Sunday`);
      break;

    default:
      console.log(`Invalid data ${day}`);
      break;
  }
}
weekDay(3); // 1 to 7, invalid
weekDay(7);
weekDay(0);
weekDay(-2);
weekDay(100);
weekDay(null);
weekDay(undefined);
