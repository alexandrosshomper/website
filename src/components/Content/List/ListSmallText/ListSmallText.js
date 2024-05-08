import React from "react";
import styled from "@emotion/styled";

import { Devices } from "../../../DesignSystem";

import Eyebrow from "./ListSmallTextEyebrow";
import Copy from "./ListSmallTextCopy";

const ListSmallText = ({ eyebrow, eyebrowColor1, eyebrowColor2, copy }) => {
  const ListSmallText = styled.div`
    text-align: left;

    margin-bottom: 60px;
    &:last-child {
      margin-bottom: 0px;
    }

    float: left;
    width: 100%;
    //padding-right: 12px;
    ${Devices.tabletS} {
      width: 564px;
    }
    ${Devices.tabletM} {
      width: 348px;
    }
    ${Devices.laptopS} {
      width: 420px;
    }
    ${Devices.laptopM} {
      width: 372px;
    }
  `;

  const PanelContent = styled.div`
    text-align: left;
    padding: 0px 0px 0px 0px;

    ${Devices.tabletS} {
      padding: 0px 0px 0px 0px;
    }
    ${Devices.tabletM} {
      padding: 0px 0px 0px 0px;
    }
    ${Devices.laptopS} {
      padding: 0px 0px 0px 0px;
    }
    ${Devices.laptopM} {
      padding: 0px 0px 0px 0px;
    }
  `;

  return (
    <ListSmallText>
      <PanelContent>
        {eyebrow && (
          <Eyebrow
            text={eyebrow}
            color1={eyebrowColor1}
            color2={eyebrowColor2}
          />
        )}
        {copy && <Copy text={copy} />}
      </PanelContent>
    </ListSmallText>
  );
};

export default ListSmallText;
