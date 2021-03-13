import React from "react";

export default function FunctionPicker({ method, setmethod }) {
  const handleFunctionChange = () => {
    method === "encrypt" ? setmethod("decrypt") : setmethod("encrypt");
  };

  return (
    <div className="FunctionPicker-container">
      <div
        onClick={handleFunctionChange}
        className={`FunctionPicker-button ${
          method === "encrypt" ? "FunctionPicker-button-active" : null
        }`}
      >
        ENCRYPT
      </div>
      <div
        onClick={handleFunctionChange}
        className={`FunctionPicker-button ${
          method === "decrypt" ? "FunctionPicker-button-active" : null
        }`}
      >
        DECRYPT
      </div>
    </div>
  );
}
