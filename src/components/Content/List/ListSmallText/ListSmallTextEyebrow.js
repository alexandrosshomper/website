import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../../DesignSystem";

const StyledListSmallTextEyebrow = styled("h3", {
  shouldForwardProp: (prop) =>
    !["gradientStart", "gradientEnd"].includes(prop),
})`
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  margin-right: 24px;
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

  width: 100%;

  ${Devices.tabletS} {
    font-size: 16px;
  }
  ${Devices.tabletM} {
    font-size: 16px;
  }
  ${Devices.laptopS} {
    font-size: 20px;
  }
`;

const ListSmallTextEyebrow = ({ text, color1, color2 }) => {
  const gradientStart = color1 || Colors.red;
  const gradientEnd = color2 || Colors.redLight;

  return (
    <StyledListSmallTextEyebrow
      gradientStart={gradientStart}
      gradientEnd={gradientEnd}
    >
      {text}
    </StyledListSmallTextEyebrow>
  );
};

export default ListSmallTextEyebrow;
