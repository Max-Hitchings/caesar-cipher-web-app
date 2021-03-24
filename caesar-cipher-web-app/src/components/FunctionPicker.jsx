import React from "react";

export default function FunctionPicker({ method, setmethod }) {
  const handleEncryptPick = () => {
    setmethod("encrypt");
  };

  const handleDecryptPick = () => {
    setmethod("decrypt");
  };

  return (
    <div className="FunctionPicker-container">
      <div
        onClick={handleEncryptPick}
        className={`FunctionPicker-button ${
          method === "encrypt" ? "FunctionPicker-button-active" : null
        }`}
      >
        ENCRYPT
      </div>
      <div
        onClick={handleDecryptPick}
        className={`FunctionPicker-button ${
          method === "decrypt" ? "FunctionPicker-button-active" : null
        }`}
      >
        DECRYPT
      </div>
    </div>
  );
}
