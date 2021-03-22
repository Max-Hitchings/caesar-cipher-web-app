import { TextField, withStyles } from "@material-ui/core";

export const StyledTextField = withStyles({
  root: {
    width: "100%",
    backgroundColor: "var(--input-background)",
    borderRadius: "3px",
    "& label.Mui-focused": {
      color: "var(--light-text)",
    },
    "& .MuiInput-underline:after": {
      borderColor: "red",
      color: "red",
    },
  },
})(TextField);
