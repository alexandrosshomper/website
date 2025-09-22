import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../../DesignSystem";
const StyledListBigTextCopy = styled.p`
  position: static;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  color: ${Colors.primaryText.highEmphasis};

  /* Inside Auto Layout */

  order: 1;
  flex-grow: 1;

  font-size: 20px;
  line-height: 140%;

  margin-top: 0px;
  margin-bottom: 0px;

  ${Devices.tabletS} {
    width: 460px;
  }
  ${Devices.tabletM} {
    font-size: 24px;
    line-height: 133%;
    width: 708px;
  }
  ${Devices.laptopS} {
    flex: 1;
  }
`;


const ListBigTextCopy = ({ copy }) => {
return <StyledListBigTextCopy>{copy}</StyledListBigTextCopy>;
};

export default ListBigTextCopy;
