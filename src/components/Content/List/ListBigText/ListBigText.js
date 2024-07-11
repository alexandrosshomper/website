import React from "react";
import styled from "@emotion/styled";

import { Devices } from "../../../DesignSystem";
import Headline from "./ListBigTextHeadline";
import Copy from "./ListBigTextCopy";

const ListBigText = ({ headline, copy }) => {
  const ListBigText = styled.div`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    margin: 0px 12px 80px 12px;
    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    ${Devices.tabletS} {
      margin: 0px 24px 80px 24px;
      width: 100%;
    }
    ${Devices.tabletM} {
      width: 708px;
    }
    ${Devices.laptopS} {
      flex-direction: row;
      width: 852px;
    }
    ${Devices.laptopM} {
      width: 1140px;
    }
  `;

  return (
    <ListBigText>
      {headline && <Headline headline={headline} />}
      {copy && <Copy copy={copy} />}
    </ListBigText>
  );
};

export default ListBigText;
