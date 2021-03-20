import React from "react";

export default function Results({ results, multiple }) {
  const fontSize = multiple ? "30px" : "50px";

  return results.map((result, index) => {
    return (
      <div className="result" style={{ fontSize: fontSize }} key={index}>{`${
        multiple ? `${index}.` : ""
      } ${result}`}</div>
    );
  });
}
