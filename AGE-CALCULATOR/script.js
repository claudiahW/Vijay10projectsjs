function calculateAge() {
  const today = new Date();
  const birthdateInput = document.getElementById("birthdate").value;
  const birthdateParts = birthdateInput.split("-");
  const birthDay = birthdateParts[0];
  const birthMonth = birthdateParts[1] - 1;
  const birthYear = birthdateParts[2];
  const birthDate = new Date(birthYear, birthMonth, birthDay);

  console.log(birthdateInput);
  console.log(birthdateParts);
  console.log(birthDay);
  console.log(birthMonth);
  console.log(birthYear);

  const isValidDate = (date) => {
    return (
      Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
    );
  };

  if (!isValidDate(birthDate)) {
    alert(
      "Invalid Date Format: Please Enter a valid date in DD-MM-YYYY format"
    );
    return;
  }

  const ageInMilliseconds = today - birthDate;
  const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
  const ageInMinutes = Math.floor(ageInSeconds / 60);
  const ageInHours = Math.floor(ageInMinutes / 60);
  const ageInDays = Math.floor(ageInHours / 24);
  const ageInWeeks = Math.floor(ageInDays / 7);
  const ageInMonths = Math.floor(ageInDays / 30.436875);
  const ageInYears = Math.floor(ageInDays / 365.25);

  const resultContainer = document.getElementById("resultContainer");
  const result = document.getElementById("result");

  result.innerHTML = `
  <div class="result-item">
  <h3>Age:</h3>
  <p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
  </div>
  
  `;

  resultContainer.style.display = "block";
}

const ageCalculatorForm = document.getElementById("ageCalculator");

ageCalculatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateAge();
});
