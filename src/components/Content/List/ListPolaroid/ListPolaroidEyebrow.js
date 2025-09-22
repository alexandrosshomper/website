import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../../DesignSystem";

const StyledListPanelEyebrow = styled("h3", {
  shouldForwardProp: (prop) =>
    !["gradientStart", "gradientEnd"].includes(prop),
})`
  font-weight: 700;
  font-size: 16px;
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
    font-size: 16px;
  }
  ${Devices.tabletM} {
    font-size: 16px;
  }
  ${Devices.laptopS} {
    font-size: 20px;
  }
`;

const ListPanelEyebrow = ({ text, color1, color2 }) => {
  const gradientStart = color1 || Colors.yellowDark;
  const gradientEnd = color2 || Colors.yellow;

  return (
    <StyledListPanelEyebrow
      gradientStart={gradientStart}
      gradientEnd={gradientEnd}
    >
      {text}
    </StyledListPanelEyebrow>
  );
};

export default ListPanelEyebrow;
