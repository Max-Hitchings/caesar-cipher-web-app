import React, { useEffect, useState } from "react";
import "../css/main.css";
import encrypt from "./functions/Encrypt";
import EncryptPage from "./EncryptPage.jsx";
import FunctionPicker from "./FunctionPicker.jsx";

export default function Main() {
  const [results, setresults] = useState([]);
  const [method, setmethod] = useState("encrypt");

  return (
    <>
      <div className="containerFunction">
        <FunctionPicker method={method} setmethod={setmethod} />
      </div>
      <div className="container">
        {method === "encrypt" ? <EncryptPage /> : null}
        <div className="result-container"></div>
      </div>
    </>
  );
}
