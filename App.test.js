import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BMICalculator from './BMICalculator';

test('renders BMI Calculator', () => {
  const { getByText, getByLabelText } = render(<BMICalculator />);
  
  const heightInput = getByLabelText('Height (cm):');
  const weightInput = getByLabelText('Weight (kg):');
  const calculateButton = getByText('Calculate BMI');
  
  expect(heightInput).toBeInTheDocument();
  expect(weightInput).toBeInTheDocument();
  expect(calculateButton).toBeInTheDocument();
});

test('calculates BMI correctly', () => {
  const { getByText, getByLabelText } = render(<BMICalculator />);
  
  const heightInput = getByLabelText('Height (cm):');
  const weightInput = getByLabelText('Weight (kg):');
  const calculateButton = getByText('Calculate BMI');
  
  fireEvent.change(heightInput, { target: { value: '170' } });
  fireEvent.change(weightInput, { target: { value: '70' } });
  fireEvent.click(calculateButton);
  
  expect(getByText('Your BMI is: 24.22')).toBeInTheDocument();
});
