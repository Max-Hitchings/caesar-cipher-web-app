import React, { useState } from "react";
import "../css/main.css";
import EncryptPage from "./EncryptPage.jsx";
import FunctionPicker from "./FunctionPicker.jsx";
import DecryptPage from "./DecryptPage.jsx";

export default function Main() {
  const [method, setmethod] = useState("encrypt");

  return (
    <>
      <div className="containerFunction">
        <FunctionPicker method={method} setmethod={setmethod} />
      </div>
      <div className="container">
        {method === "encrypt" ? <EncryptPage /> : <DecryptPage />}
        <div className="result-container"></div>
      </div>
    </>
  );
}
