import React, { useState } from 'react';

import './slider.stepper.css';
// Define the Props Interface
interface StepperSliderProps {
  steps: number[];
}

// Define the Component with Props
const SliderStepper: React.FC<StepperSliderProps> = ({ steps }) => {
  const [value, setValue] = useState<number>(steps[0]);

  const findClosestStep = (currentValue: number): number => {
    // Find the closest step to the current value
    const closest = steps.reduce((prev, curr) =>
      Math.abs(curr - currentValue) < Math.abs(prev - currentValue) ? curr : prev
    );
    return closest;
  };

  const handleChange = (changeDirection: 'increment' | 'decrement'): void => {
    const currentIndex = steps.indexOf(value);
    if (changeDirection === 'increment' && currentIndex < steps.length - 1) {
      setValue(steps[currentIndex + 1]);
    } else if (changeDirection === 'decrement' && currentIndex > 0) {
      setValue(steps[currentIndex - 1]);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = Number(e.target.value);
    setValue(findClosestStep(newValue));
  };

  // Determine the min, max, and step values for the slider based on the steps array
  const min = Math.min(...steps);
  const max = Math.max(...steps);
  // Calculate the smallest step difference for the input range step
  const step = Math.min(...steps.slice(1).map((value, index) => value - steps[index]));

  return (
<div className="stepper-slider">
  <div className="slider-container">
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={handleSliderChange}
      step={step}
      className="slider"
    />
  </div>
  <button className="stepper-button decrement" onClick={() => handleChange('decrement')}>-</button>
  <button className="stepper-button increment" onClick={() => handleChange('increment')}>+</button>
  <div className="value-display">Value: {value}</div>
</div>

  );
};

export default SliderStepper;