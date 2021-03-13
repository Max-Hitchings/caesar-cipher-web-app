import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
} from "@material-ui/core";
import { FaArrowRight } from "react-icons/fa";
import encrypt from "./functions/Encrypt";
import Results from "./Results.jsx";

export default function EncryptPage() {
  const [textFieldValue, settextFieldValue] = useState("");
  const [shiftFieldValue, setshiftFieldValue] = useState(0);
  const [results, setresults] = useState([]);

  const handleSubmit = () => {
    setresults(encrypt(textFieldValue, parseInt(shiftFieldValue)));
    console.log(textFieldValue, shiftFieldValue);
  };

  const handleTextFieldChange = (e) => {
    settextFieldValue(e.target.value);
  };

  const handleshiftFieldChange = (e) => {
    setshiftFieldValue(e.target.value);
  };

  return (
    <div className="input-container">
      <div>
        <div className="textfield-container">
          <TextField
            label="Input"
            value={textFieldValue}
            onChange={handleTextFieldChange}
            multiline
            variant="filled"
            margin="normal"
          />
          <TextField
            margin="normal"
            label="Shift"
            type="number"
            value={shiftFieldValue}
            onChange={handleshiftFieldChange}
            variant="filled"
          />
        </div>
        <button className="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
        <Results results={results} />
      </div>
    </div>
  );
}
