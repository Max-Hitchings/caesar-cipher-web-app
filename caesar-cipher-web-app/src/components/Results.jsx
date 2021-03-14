import React from "react";

export default function Results({ results, multiple }) {
  return results.map((result, index) => {
    return (
      <div className="result">{`${multiple ? `${index}.` : ""} ${result}`}</div>
    );
  });
}
