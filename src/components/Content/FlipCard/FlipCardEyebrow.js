import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const StyledFlipCardEyebrow = styled("h3", {
  shouldForwardProp: (prop) =>
    !["gradientStart", "gradientEnd"].includes(prop),
})`
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;

  text-align: left;

  color: transparent;
  background-image: linear-gradient(
    to right,
    ${({ gradientStart }) => gradientStart},
    ${({ gradientEnd }) => gradientEnd}
  );
  -webkit-background-clip: text;
  background-clip: text;

  margin-top: 0px;
  margin-bottom: 4px;

  ${Devices.tabletS} {
  }
  ${Devices.tabletM} {
  }
  ${Devices.laptopS} {
  }
`;

const FlipCardEyebrow = ({ text, color1, color2 }) => {
  const gradientStart = color1 || Colors.orange;
  const gradientEnd = color2 || Colors.orangeLight;

  return (
    <StyledFlipCardEyebrow gradientStart={gradientStart} gradientEnd={gradientEnd}>
      {text}
    </StyledFlipCardEyebrow>
  );
};

export default FlipCardEyebrow;
