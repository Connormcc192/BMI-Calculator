import React, { useState } from 'react';
import './App.css';
function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (!height || !weight) {
      alert('Please enter both height and weight.');
      return;
    }

    const heightMeters = height / 100;
    const bmiValue = (weight / (heightMeters * heightMeters)).toFixed(2);
    setBMI(bmiValue);
  };

  const resetCalculator = () => {
    setHeight('');
    setWeight('');
    setBMI(null);
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <label>
        Height (cm):
        <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
      </label>
      <label>
        Weight (kg):
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </label>
      <button onClick={calculateBMI}>Calculate BMI</button>
      <button onClick={resetCalculator}>Reset</button>
      {bmi !== null && (
        <div>
          <h2>Your BMI is: {bmi}</h2>
          <p>
            BMI Categories:
            <br />
            - Underweight: less than 18.5
            <br />
            - Normal weight: 18.5–24.9
            <br />
            - Overweight: 25–29.9
            <br />
            - Obesity: 30 or more
          </p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
