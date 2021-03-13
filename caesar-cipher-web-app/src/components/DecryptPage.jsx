import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
} from "@material-ui/core";
import { FaArrowRight } from "react-icons/fa";
import encrypt from "./functions/Encrypt";

export default function DecryptPage({ setresults }) {
  const [textFieldValue, settextFieldValue] = useState("");

  const handleSubmit = () => {
    setresults(encrypt(textFieldValue, 0));
  };

  const handleTextFieldChange = (e) => {
    settextFieldValue(e.target.value);
  };

  return (
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
  );
}
