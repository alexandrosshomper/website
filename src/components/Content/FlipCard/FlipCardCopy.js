import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const FlipCardCopy = ({ textArray, color }) => {
  console.log(textArray);
  const FlipCardCopyWrapper = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    flex-grow: 1;
    width: 100%; // Add this line to make the element fit the width of its parent
  `;
  const FlipCardCopy = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;

    text-align: left;
    color: ${color};

    margin-top: 0px;
    margin-bottom: 0px;

    ${Devices.tabletS} {
      font-size: 20px;
      line-height: 117%;
    }
    ${Devices.tabletM} {
      font-size: 20px;
      line-height: 117%;
    }
    ${Devices.laptopS} {
      font-size: 24px;
      line-height: 117%;
    }
  `;

  return (
    <FlipCardCopyWrapper>
      {textArray.map((text, index) => (
        <FlipCardCopy key={index}>{text}</FlipCardCopy>
      ))}
    </FlipCardCopyWrapper>
  );
};

export default FlipCardCopy;
