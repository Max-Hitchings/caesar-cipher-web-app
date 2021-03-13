import React, { useEffect, useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
} from "@material-ui/core";
import "../css/main.css";
import { FaArrowRight } from "react-icons/fa";
import Results from "./Results.jsx";
import encrypt from "./Encrypt";

export default function Main() {
  const [results, setresults] = useState([]);
  const [textFieldValue, settextFieldValue] = useState("");

  const handleSubmit = () => {
    setresults(encrypt(textFieldValue, 1));
  };

  const handleTextFieldChange = (e) => {
    settextFieldValue(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="input-container">
          <form>
            <div className="textfield-container">
              <FormControl>
                <TextField
                  label="Input"
                  type="text"
                  value={textFieldValue}
                  onChange={handleTextFieldChange}
                  multiline
                  variant="filled"
                  fullWidth={true}
                  InputProps={{
                    endAdornment: (
                      <>
                        <span onClick={handleSubmit}>
                          <InputAdornment>
                            <FaArrowRight className="input-submit" />
                          </InputAdornment>
                          <div style={{ height: "10px" }} />
                        </span>
                      </>
                    ),
                  }}
                />
              </FormControl>
            </div>
          </form>
        </div>
        <div className="result-container">
          <Results results={results} />
        </div>
      </div>
    </>
  );
}
