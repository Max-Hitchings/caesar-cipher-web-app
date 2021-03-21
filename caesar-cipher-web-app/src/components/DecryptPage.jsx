import React, { useState, useEffect } from "react";
import Results from "./Results.jsx";
import decrypt from "./functions/Decrypt";
import sortResults from "./functions/sortResults.js";
import Alert from "@material-ui/lab/Alert";
import { StyledTextField } from "./StyledTextField.jsx";

export default function DecryptPage() {
  const [textFieldValue, settextFieldValue] = useState("");
  const [results, setresults] = useState([]);
  const [sorted, setsorted] = useState(false);
  const [BestResultValue, setBestResultValue] = useState({
    index: null,
    value: null,
  });

  const handleSubmit = () => {
    setresults(decrypt(textFieldValue));
    if (sorted) {
      setBestResultValue({
        index: null,
        value: null,
      });
      setsorted(false);
    }
  };

  const handleTextFieldChange = (e) => {
    settextFieldValue(e.target.value);
  };

  const SortButton = () => {
    return (
      <button
        className="sortButton"
        onClick={() => {
          sortResults(sorted, setsorted, results, setBestResultValue);
        }}
      >
        SORT
      </button>
    );
  };

  const BestResult = () => {
    return (
      <>
        <div className="result bestMatch">{`Best match: ${BestResultValue.index}.${BestResultValue.value}`}</div>
      </>
    );
  };

  const SortErrorAlert = () => {
    return (
      <>
        <Alert variant="filled" severity="error" style={{ marginTop: "5px" }}>
          The result was inconclusive
        </Alert>
      </>
    );
  };

  return (
    <div className="input-container">
      <div>
        <div className="textfield-container">
          <StyledTextField
            label="Cipher Text"
            type="text"
            value={textFieldValue}
            onChange={handleTextFieldChange}
            multiline
            variant="filled"
          />
        </div>
        <button className="submit margin-5" onClick={handleSubmit}>
          SUBMIT
        </button>
        {results.length > 0 ? <SortButton /> : ""}
        {BestResultValue.index == null && sorted === true ? (
          <SortErrorAlert />
        ) : (
          ""
        )}
        {BestResultValue.index !== null || undefined ? <BestResult /> : ""}
        <Results results={results} multiple={true} />
      </div>
    </div>
  );
}
