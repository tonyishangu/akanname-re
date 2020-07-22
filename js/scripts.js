// The names listed below are ordered by days from Sunday
const maleAkanNames = [
  "Kwame",
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi"
];
const femaleAkanNames = [
  "Ama",
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua"
];

// This function collects the data from input fields
function fetchFormData() {
  let form = document.forms[0];
  let day, month, year, gender;

  gender = form.gender.value;

  day = parseInt(form.day.value);
  month = parseInt(form.month.value);
  year = parseInt(form.year.value);

  return [gender, day, month, year];
}
/**
 * Initialize calcWeekDay function.
 * The function calculates the day of the week from a specific date.
 */
function calculateWeekDay(birthDate) {
  let [dayOfMonth, monthOfYear, yearOfBirth] = birthDate;
  let zeroBasedCentury, yearOfCentury;

  // Count Jan & Feb  as months 13 and 14 of the previous year.
  if (monthOfYear <= 2) {
    monthOfYear += 12;
    yearOfBirth -= 1;
  }

  // Split year to centuryCode & yearCode
  zeroBasedCentury = parseInt(yearOfBirth / 100);
  yearOfCentury = yearOfBirth % 100;

  let dayOfWeek =
    (dayOfMonth +
      parseInt(
        2.6 * (monthOfYear + 1) +
          yearOfCentury +
          parseInt(yearOfCentury / 4) +
          parseInt(zeroBasedCentury / 4) +
          5 * zeroBasedCentury
      )) %
    7;

  // return dayOfWeek as a zero-based index
  // dayOfWeek = (0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday)
  return dayOfWeek;
}

/**
 * Initialize deriveAkanName function.
 * The function calls the calcWeekDay function and derives the user gender
 * from the Akan Name arrays defined at the top
 */
function deriveAkanName() {
  let formData = fetchFormData();
  let userBirthDate, userGender, dayOfWeek;

  [userGender, ...userBirthDate] = formData;
  dayOfWeek = calculateWeekDay(userBirthDate);

  if (userGender === "Male") {
    alert("Your Akan Name is: " + maleAkanNames[dayOfWeek]);
  } else {
    alert("Your Akan Name is: " + femaleAkanNames[dayOfWeek]);
  }
  // Helps clear the input fields after retrieving the values
  return false;
}
