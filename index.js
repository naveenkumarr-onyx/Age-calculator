var submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;

  var getYear = new Date();

  //   Year
  var ageYear = getYear.getFullYear() - year;
  console.log(ageYear);
  var cal_year = document.getElementById("cal_year");
  cal_year.innerHTML = ageYear;

  //   Day
  if (day > 31) {
    var Day_label = document.getElementById("Day_label");
    var valid_day = document.getElementById("valid_day");
    valid_day.style.visibility = "visible";
    Day_label.style.color = "red";
  }
  //   console.log(ageInMonths);

  // month
  var y = month + getYear.getMonth();
  console.log(y);
});
