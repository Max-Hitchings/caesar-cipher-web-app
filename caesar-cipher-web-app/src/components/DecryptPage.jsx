import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Results from "./Results.jsx";
import decrypt from "./functions/Decrypt";

export default function DecryptPage() {
  const [textFieldValue, settextFieldValue] = useState("");
  const [results, setresults] = useState([]);

  //useEffect(() => decrypt("max"), []);

  const handleSubmit = () => {
    setresults(decrypt(textFieldValue));
  };

  const handleTextFieldChange = (e) => {
    settextFieldValue(e.target.value);
  };

  return (
    <div className="input-container">
      <div>
        <div className="textfield-container">
          <TextField
            label="Cipher Text"
            type="text"
            value={textFieldValue}
            onChange={handleTextFieldChange}
            multiline
            variant="filled"
          />
        </div>
        <button className="submit width-210 margin-5" onClick={handleSubmit}>
          SUBMIT
        </button>
        <Results results={results} multiple={true} />
      </div>
    </div>
  );
}
