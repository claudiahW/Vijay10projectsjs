function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(cleanStr);

  const reversedStr = cleanStr.split("").reverse().join("");
  console.log(reversedStr);

  return cleanStr == reversedStr;
}

function palindromeChecker() {}

document
  .getElementById("checkButton")
  .addEventListener("click", palindromeChecker);
