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
    max-width: 100%;

    ${Devices.tabletS} {
      width: 350px;
    }
    ${Devices.tabletM} {
      width: 480px;
    }
    ${Devices.laptopS} {
      width: 567px;
    }
    ${Devices.laptopM} {
      width: 567px;
    }
  `;

  return <CaseUnorderedList>{copy}</CaseUnorderedList>;
};

export default CaseUnorderedList;
