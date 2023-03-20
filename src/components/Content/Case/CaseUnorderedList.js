import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const CaseUnorderedList = ({ copy }) => {
  const CaseUnorderedList = styled.ul`
    position: static;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    color: ${Colors.primaryText.highEmphasis};

    /* Inside Auto Layout */

    font-size: 24px;
    line-height: 142%;

    margin: 0 auto;
    max-width: 90%;

    ${Devices.tabletS} {
      width: 564px;
    }
    ${Devices.tabletM} {
      width: 708px;
    }
    ${Devices.laptopS} {
      width: 740px;
    }
  `;

  return <CaseUnorderedList>{copy}</CaseUnorderedList>;
};

export default CaseUnorderedList;
