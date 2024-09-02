document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateLoan);

function calculateLoan() {
  const loanAmount = document.getElementById("loanAmountInput").value;
  const interestRate = document.getElementById("interestRateInput").value;
  const loanTerm = document.getElementById("loanTermInput").value;

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
    alert("Please Enter valid numbers for all the Fields");
  }

  const monthlyInterest = interestRate / 100 / 12;
  const totalPayments = loanTerm;
  const monthlyPayment =
    (loanAmount * monthlyInterest) /
    (1 - Math.pow(1 + monthlyInterest - totalPayments));
  const totalInterest = monthlyPayment * totalPayments - loanAmount;

  displayResult(monthlyPayment, totalInterest);
}
function displayResult(monthlyPayment, totalInterest) {
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = `
  
  <p><strong>Monthly Payment: ${monthlyPayment.toFixed(2)}</strong></p>
   <p><strong>Total Interest: ${totalInterest.toFixed(2)}</strong></p>
  
  `;
}
 