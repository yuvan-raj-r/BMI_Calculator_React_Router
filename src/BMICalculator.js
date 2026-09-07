// src/BMICalculator.js

function calculateBMI(weight, height) {
  if (weight > 0 && height > 0) {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let status = "";

    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 24.9) status = "Normal";
    else if (bmi < 29.9) status = "Overweight";
    else status = "Obese";

    return { bmi, status };
  } else {
    return { bmi: null, status: "Please enter valid values" };
  }
}

export default calculateBMI;
