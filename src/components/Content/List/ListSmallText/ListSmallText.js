import React from "react";
import styled from "@emotion/styled";

import { Devices } from "../../../DesignSystem";

import Eyebrow from "./ListSmallTextEyebrow";
import Copy from "./ListSmallTextCopy";

const ListSmallText = ({ eyebrow, eyebrowColor1, eyebrowColor2, copy }) => {
  const ListSmallText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    text-align: left;

    &:last-child {
      margin-bottom: 0px;
    }

    ${Devices.tabletS} {
      width: 460px;
    }
    ${Devices.tabletM} {
      width: 228px;
    }
    ${Devices.laptopS} {
      width: 276px;
    }
    ${Devices.laptopM} {
      width: 372px;
    }
  `;

  return (
    <ListSmallText>
      {eyebrow && (
        <Eyebrow text={eyebrow} color1={eyebrowColor1} color2={eyebrowColor2} />
      )}
      {copy && <Copy text={copy} />}
    </ListSmallText>
  );
};

export default ListSmallText;
