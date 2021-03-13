import React, { useEffect } from "react";
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
  useEffect(() => encrypt("Zz", 3));

  return (
    <>
      <div className="container">
        <div className="input-container">
          <form>
            <div className="textfield-container">
              <FormControl>
                <TextField
                  label="Input"
                  multiline
                  variant="filled"
                  fullWidth={true}
                  InputProps={{
                    endAdornment: (
                      <>
                        <span>
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
          <Results />
        </div>
      </div>
    </>
  );
}
