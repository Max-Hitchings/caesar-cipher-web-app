import React, { useState, useEffect } from "react";
import "../css/main.css";
import EncryptPage from "./EncryptPage.jsx";
import FunctionPicker from "./FunctionPicker.jsx";
import DecryptPage from "./DecryptPage.jsx";
import PaletteIcon from "@material-ui/icons/Palette";
import IconButton from "@material-ui/core/IconButton";
const styles = require("./styles.json");

export default function Main() {
  const [method, setmethod] = useState("encrypt");
  const [style, setstyle] = useState(styles.blue);

  let root = document.documentElement;
  useEffect(() => {
    root.style.setProperty("--background", style.background);
    root.style.setProperty("--light-button", style.lightButton);
    root.style.setProperty("--dark-button", style.darkButton);
    root.style.setProperty("--light-text", style.lightText);
    root.style.setProperty("--input-background", style.inputBackground);
  }, [style]);

  const colourChange = () => {
    const newStyle = style === styles.purple ? styles.blue : styles.purple;
    setstyle(newStyle);
  };

  return (
    <>
      <span className="colourSelect">
        <IconButton
          color="secondary"
          fontSize="large"
          onClick={() => colourChange()}
        >
          <PaletteIcon />
        </IconButton>
      </span>
      <div className="containerFunction">
        <h1>CAESAR CIPHER</h1>
        <a
          href="https://github.com/Max-Hitchings"
          rel="author"
          referrerpolicy="no-referrer"
          target="_blank"
        >
          <h3>BY MAX H</h3>
        </a>
        <FunctionPicker method={method} setmethod={setmethod} />
      </div>
      <div className="container">
        {method === "encrypt" ? <EncryptPage /> : <DecryptPage />}
        <div className="result-container"></div>
      </div>
    </>
  );
}
