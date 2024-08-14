// CalculatorButtons.js

import React from "react";

const CalculatorButtons = ({ onButtonClick, onCalculate, onClear }) => {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="calculator-buttons">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`btn btn-secondary rounded p-3 ${
            button === "=" ? "btn-equal" : ""
          }`}
          onClick={() =>
            button === "=" ? onCalculate() : onButtonClick(button)
          }
        >
          {button}
        </button>
      ))}
      <button className="btn btn-danger" onClick={onClear}>
        C
      </button>
    </div>
  );
};

export default CalculatorButtons;
