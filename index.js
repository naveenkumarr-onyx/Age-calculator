function calculateAge() {
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);

  if (day > 31) {
    var valid_labels = document.querySelectorAll("#valid_day");
    valid_labels.forEach(function (label) {
      label.innerHTML = "Enter a valid day";
      label.style.color = "red";
      label.style.visibility = "visible";
    });
  } else {
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      var valid_labels = document.querySelectorAll(
        "#valid_day, #valid_month, #valid_year"
      );
      valid_labels.forEach(function (label) {
        label.innerHTML = "These fields are required";
        label.style.color = "red";
        label.style.visibility = "visible";
      });
      var labels = document.querySelectorAll(
        "#Day_label , #month_label, #year_label"
      );
      labels.forEach((label) => {
        label.style.color = "red";
      });
    } else {
      var labels = document.querySelectorAll(
        "#Day_label , #month_label, #year_label"
      );
      labels.forEach((label) => {
        label.style.color = "";
      });
      var valid_labels = document.querySelectorAll(
        "#valid_day, #valid_month, #valid_year"
      );
      valid_labels.forEach(function (label) {
        label.style.visibility = "hidden";
      });
    }
  }
  if (!day || !month || !year) return;

  var birthDate = new Date(year, month - 1, day); // Note: months are 0-indexed in JavaScript
  var today = new Date();

  var years = today.getFullYear() - birthDate.getFullYear();
  var months = today.getMonth() - birthDate.getMonth();
  var days = today.getDate() - birthDate.getDate();

  // If the birth date's month is after the current month or if the birth date's month is the same as the current month
  // but the birth date's day is after the current day, subtract one year
  if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
    years--;
    months += 12;
  }

  // If the birth date's day is after the current day, subtract one month and add days of the previous month
  if (days < 0) {
    months--;
    var daysInLastMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += daysInLastMonth;
  }

  // Display the calculated age
  var yearResult = document.getElementById("cal_year");
  yearResult.innerHTML = years;
  var monthResult = document.getElementById("cal_month");
  monthResult.innerHTML = months;
  var dayResult = document.getElementById("cal_day");
  dayResult.innerHTML = days;
}
