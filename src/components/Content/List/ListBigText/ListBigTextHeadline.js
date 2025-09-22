import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../../DesignSystem";
const StyledListBigTextHeadline = styled.h3`
  position: static;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-style: normal;
  font-weight: bold;

  color: rgba(0, 169, 157, 1);

  flex: none;
  order: 0;
  flex-grow: 0;
  font-size: 40px;
  line-height: 115%;

  margin-top: 0px;
  margin-bottom: 12px;

  color: transparent;
  background-image: linear-gradient(
    to right,
    ${Colors.blue},
    ${Colors.blueLight}
  );
  -webkit-background-clip: text;
  background-clip: text;

  ${Devices.tabletS} {
    width: 460px;
  }
  ${Devices.tabletM} {
  }
  ${Devices.laptopS} {
    width: 348px;

    font-size: 40px;
    line-height: 115%;
    margin-right: 84px;
  }
`;


const ListBigTextHeadline = ({ headline }) => {
return <StyledListBigTextHeadline>{headline}</StyledListBigTextHeadline>;
};

export default ListBigTextHeadline;
