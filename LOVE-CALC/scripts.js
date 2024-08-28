function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();
  console.log(name1);
  const name2 = document.getElementById("name2").value.trim();
  console.log(name2);

  if (name1 === "" || name2 === "") {
    alert("Please enter both names.");
  } else {
    const lovePercentage = Math.floor(Math.random() * 101);

    const result = document.getElementById("result");

    result.innerHTML = `${name1} and ${name2} 's Love Percentage: ${lovePercentage}`;

    if (lovePercentage < 30) {
      result.innerHTML += "<br> Not a Great Match. Keep Looking!";
    } else if (lovePercentage >= 30 && lovePercentage < 70) {
        result.innerHTML += "<br> It's Complicated. You'll Have to Work on It!";
    }else{
        result.innerHTML += "<br> You're a Match Made in Heaven!";
    }
  }
}
