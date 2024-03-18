function calculateDay(day) {
  var today = new Date();
  if (day > 31) {
    var Day_label = document.getElementById("Day_label");
    var valid_day = document.getElementById("valid_day");
    valid_day.setAttribute("style", "color:red;visibility:visible");
    Day_label.style.color = "red";
    console.log(day);
  } else {
  }
  var getingDay = today.getDate() + day;
  console.log(getingDay);
}

function calculateMonth(month) {
  var today = new Date();
  if (month > 12) {
    var month_label = document.getElementById("month_label");
    var valid_month = document.getElementById("valid_month");
    valid_month.style.visibility = "visible";
    month_label.style.color = "red";
  }
  var getingMonth = today.getMonth();
  var cal_month = document.getElementById("cal_month");
  cal_month.innerHTML = getingMonth;
}

function calculateYear(year) {
  var today = new Date();
  var ageYear = today.getFullYear() - year;
  var cal_year = document.getElementById("cal_year");
  cal_year.innerHTML = ageYear;
}

var submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
  var year = document.getElementById("year").value;
  var month = document.getElementById("month").value;
  var day = document.getElementById("day").value;
  if (!year || !month || !day) {
    alert("Enter the valid value");
    return;
  }
  calculateYear(year);
  calculateMonth(month);
  calculateDay(day);
});

function calculateAge(birthDate) {
  const currentDate = new Date();
  const birthYear = birthDate.getFullYear();
  console.log("birthYear" + birthYear);
  const birthMonth = birthDate.getMonth();
  console.log("birthMonth" + birthMonth);
  const birthDay = birthDate.getDate();
  console.log("birthdate" + birthDate);

  const currentYear = currentDate.getFullYear();
  console.log("currentYear" + currentYear);
  const currentMonth = currentDate.getMonth();
  console.log("currentMonth" + currentMonth);
  const currentDay = currentDate.getDate();
  console.log("currentDay" + currentDay);

  let age = currentYear - birthYear;
  console.log("age" + age);

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  return age;
}

// Example usage:
const birthDate = new Date("2001-06-01");
const age = calculateAge(birthDate);
console.log(age); // Output will be the person's age based on the current date
