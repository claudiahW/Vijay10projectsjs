function calculateTip() {
  const billAmountInput = document.getElementById("billAmount");
  const serviceRatingSelect = document.getElementById("serviceRating");
  const splitCountInput = document.getElementById("splitCount");
  const mealTypeSelect = document.getElementById("mealType");

  const tipAmountOutput = document.getElementById("tipAmount");
  const totalAmountOutput = document.getElementById("totalAmount");
  const amountPerPersonOutput = document.getElementById("amountPerPerson");

  const billAmount = parseFloat(billAmountInput.value);
  const serviceRating = parseFloat(serviceRatingSelect.value);
  const splitCount = parseInt(splitCountInput.value);
  const mealType = mealTypeSelect.value;

  if (isNaN(billAmount) || isNaN(serviceRating) || isNaN(splitCount)) {
    tipAmountOutput.textContent = "Please enter a valid number";
    totalAmountOutput.textContent = "";
    amountPerPersonOutput.textContent = "";
    return;
  }
  let tip;
  switch (serviceRating) {
    case 1:
      tip = billAmount * 0.05;
      break;
    case 2:
      tip = billAmount * 0.10;
      break;
    case 3:
      tip = billAmount * 0.15;
      break;
    case 4:
      tip = billAmount * 0.20;
      break;
  }
}

const calculateBtn = document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateTip);
