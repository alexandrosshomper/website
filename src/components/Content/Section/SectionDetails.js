import React from "react";

const SectionDetails = ({ headlines, copy }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      {headlines.map((headline, index) => (
        <div key={index} style={{ flex: 1, minWidth: "340px" }}>
          <h2>{headline}</h2>
          <p>{copy[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionDetails;
