import React, { useState, useEffect } from "react";
import "../css/main.css";
import EncryptPage from "./EncryptPage.jsx";
import FunctionPicker from "./FunctionPicker.jsx";
import DecryptPage from "./DecryptPage.jsx";
import PaletteIcon from "@material-ui/icons/Palette";
import IconButton from "@material-ui/core/IconButton";

const styles = {
  light: {
    background: "#01303f",
    lightButton: "#02a9f7",
    darkButton: "#02577a",
    lightText: "#d4f0fc",
    inputBackground: "rgba(54, 115, 156, 0.3)",
  },
  dark: {
    background: "#25274d",
    lightButton: "#2eca55",
    darkButton: "#29648a",
    lightText: "#aaabb8",
    inputBackground: "rgba(144, 238, 144, 0.3)",
  },
};

export default function Main() {
  const [method, setmethod] = useState("encrypt");
  const [style, setstyle] = useState(styles.light);

  let root = document.documentElement;

  useEffect(() => {
    root.style.setProperty("--background", style.background);
    root.style.setProperty("--light-button", style.lightButton);
    root.style.setProperty("--dark-button", style.darkButton);
    root.style.setProperty("--light-text", style.lightText);
    root.style.setProperty("--input-background", style.inputBackground);
  }, [style]);

  const colourChange = () => {
    const newStyle = style === styles.dark ? styles.light : styles.dark;

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
        <h3>BY MAX H</h3>
        <FunctionPicker method={method} setmethod={setmethod} />
      </div>
      <div className="container">
        {method === "encrypt" ? <EncryptPage /> : <DecryptPage />}
        <div className="result-container"></div>
      </div>
    </>
  );
}
