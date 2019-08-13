//Returns day of the week for the date
function dayName(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
                        "Friday", "Saturday"];
  return daysOfTheWeek[date.getDay()];
}

//Returns greeting for the given date
