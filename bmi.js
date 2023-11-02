const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const result = document.getElementById("result");
const btn = document.getElementById("btn");
const classification = document.getElementById("class");

btn.addEventListener("click", function () {
  const heightValue = parseFloat(heightInput.value);
  const weightValue = parseFloat(weightInput.value);
  result.style.opacity = "100";

  if (isNaN(heightValue) || isNaN(weightValue)) {
    result.innerText = "Enter A Number";
    classification.innerText = "class";
    classification.style.opacity = "0.3";
   } else {
    const heightMeters = heightValue * 0.3048;
    const bmi = weightValue / (heightMeters * heightMeters);
    const roundedBMI = Math.max(0.1, bmi.toFixed(1));
    result.innerText = "BMI:" + roundedBMI;

    if (roundedBMI < 18.5) {
      classification.innerText = "Underweight";
      classification.style.opacity = "100";
    } else if (roundedBMI >= 18.5 && roundedBMI < 25) {
      classification.innerText = "Normal weight";
      classification.style.opacity = "100";
    } else if (roundedBMI >= 25 && roundedBMI < 30) {
      classification.innerText = "Overweight";
      classification.style.opacity = "100";
    } else if (roundedBMI >= 30) {
      classification.innerText = "Obesity";
      classification.style.opacity = "100";
    } else {
      classification.innerText = "class";
    }
  }

  heightInput.value = "";
  weightInput.value = "";
});
