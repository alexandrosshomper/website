import React from "react";
import styled from "@emotion/styled";

const CaseCardGrid = (props) => {
  const CaseCardGrid = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    align-self: center;
    --gap: 24px;
    margin-left: 24px;
    margin-right: 24px;
    margin-left: calc(-1 * var(--gap));
    margin-bottom: calc(-1 * var(--gap));
    width: 520px;
  `;

  return <CaseCardGrid></CaseCardGrid>;
};

export default CaseCardGrid;
