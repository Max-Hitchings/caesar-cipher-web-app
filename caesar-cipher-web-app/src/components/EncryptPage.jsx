import React, { useState } from "react";
import encrypt from "./functions/Encrypt";
import Results from "./Results.jsx";
import { StyledTextField } from "./StyledTextField.jsx";

export default function EncryptPage() {
  const [textFieldValue, settextFieldValue] = useState("");
  const [shiftFieldValue, setshiftFieldValue] = useState(0);
  const [results, setresults] = useState([]);

  const handleSubmit = () => {
    setresults(encrypt(textFieldValue, parseInt(shiftFieldValue)));
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
          <StyledTextField
            label="Plain Text"
            value={textFieldValue}
            onChange={handleTextFieldChange}
            multiline
            variant="filled"
          />
          <StyledTextField
            margin="dense"
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
        <Results results={[results]} multiple={false} />
      </div>
    </div>
  );
}
