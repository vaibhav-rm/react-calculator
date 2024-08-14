// App.js

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CalculatorInput from "./components/CalculatorInput";
import CalculatorButtons from "./components/CalculatorButtons";

function App() {
  const [input, setInput] = useState("");

  const handleButtonClick = (buttonValue) => {
    setInput(input + buttonValue);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="calculator p-3 rounded h-50 bg-primary">
      <div className="calculator-container">
        <CalculatorInput value={input} className="P-4 mb-3" />
        <CalculatorButtons
        className="mt-3"
          onButtonClick={handleButtonClick}
          onCalculate={handleCalculate}
          onClear={handleClear}
        />
      </div>
    </div>
  );
}

export default App;
