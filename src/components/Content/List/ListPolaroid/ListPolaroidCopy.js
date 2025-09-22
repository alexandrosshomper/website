import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../../DesignSystem";
const StyledListPolaroidCopy = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 117%;

  text-align: left;
  color: ${Colors.primaryText.highEmphasis};

  margin-top: 0px;
  margin-bottom: 0px;

  width: 272px;

  ${Devices.tabletS} {
    width: 420px;
  }
  ${Devices.tabletM} {
    width: 348px;
  }
  ${Devices.laptopS} {
    width: 420px;
    font-size: 24px;
    line-height: 117%;
  }
  ${Devices.laptopM} {
    width: 372px;
    font-size: 24px;
    line-height: 117%;
  }
`;


const ListPolaroidCopy = ({ text }) => {
return <StyledListPolaroidCopy>{text}</StyledListPolaroidCopy>;
};

export default ListPolaroidCopy;
