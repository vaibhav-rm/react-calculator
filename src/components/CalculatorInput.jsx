// CalculatorInput.js

import React from "react";

const CalculatorInput = ({ value }) => {
  return <input type="text" className="form-control mb-4 p-3 fs-3" value={value} readOnly />;
};

export default CalculatorInput;
