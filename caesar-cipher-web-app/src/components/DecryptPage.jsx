import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import Results from "./Results.jsx";
import decrypt from "./functions/Decrypt";
const DetectLanguage = require("detectlanguage");
const detectlanguage = new DetectLanguage("7644c66e81fea80031848b70140f0f90");

export default function DecryptPage() {
  const [textFieldValue, settextFieldValue] = useState("");
  const [results, setresults] = useState([]);
  const [sorted, setsorted] = useState(false);
  const [BestResultValue, setBestResultValue] = useState({
    index: null,
    value: null,
  });

  useEffect(() => console.log("shush", sorted), [sorted]);

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

  const sortResults = async () => {
    if (!sorted) {
      setsorted(true);
      detectlanguage.detect(results).then((response) => {
        var topResult = { index: null, score: 0 };

        var listIndex;
        for (listIndex in results) {
          response[listIndex].map((item, index) => {
            if (
              item.language === "en" &&
              item.isReliable === true &&
              item.confidence > topResult.score
            ) {
              topResult = { index: listIndex, score: item.confidence };
            }
            return "";
          });
        }
        if (topResult !== null) {
          setBestResultValue({
            index: topResult.index,
            value: results[topResult.index],
          });
        }
        console.log("Hello", JSON.stringify(response));
      });
    }
  };

  const SortButton = () => {
    return (
      <button className="sortButton" onClick={sortResults}>
        SORT
      </button>
    );
  };

  const BestResult = () => {
    return (
      <>
        <div className="result">{`Best match: ${BestResultValue.index}.${BestResultValue.value}`}</div>
      </>
    );
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
        {results.length > 0 ? <SortButton /> : ""}
        {BestResultValue.value !== null ? <BestResult /> : ""}
        <Results results={results} multiple={true} />
      </div>
    </div>
  );
}
