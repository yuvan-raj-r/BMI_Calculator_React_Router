import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight > 0 && height > 0) {
      const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setStatus("Underweight");
      else if (bmiValue < 24.9) setStatus("Normal");
      else if (bmiValue < 29.9) setStatus("Overweight");
      else setStatus("Obese");
    } else {
      setStatus("Please enter valid values");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>BMI Calculator</h2>
      <form onSubmit={calculateBMI}>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button type="submit">Calculate</button>
      </form>
      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <p>Status: {status}</p>
        </div>
      )}
    </div>
  );
}

export default App;

