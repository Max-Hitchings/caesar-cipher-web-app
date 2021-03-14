import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import encrypt from "./functions/Encrypt";
import Results from "./Results.jsx";
import { withStyles } from "@material-ui/core/styles";

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

  const StyledTextField = withStyles({
    root: {
      backgroundColor: "rgba(204, 219, 231, 0.466)",
      color: "red",
    },
  })(TextField);

  return (
    <div className="input-container">
      <div>
        <div className="textfield-container">
          <TextField
            label="Plain Text"
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
        <button className="submit width-420" onClick={handleSubmit}>
          SUBMIT
        </button>
        <Results results={[results]} multiple={false} />
      </div>
    </div>
  );
}
