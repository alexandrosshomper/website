import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../../DesignSystem";

import ListPanelEyebrow from "./ListPanelEyebrow";
import ListPanelImage from "./ListPanelImage";
import ListPanelCopy from "./ListPanelCopy";

const ListPanel = ({
  eyebrow,
  eyebrowColor1,
  eyebrowColor2,
  copy,
  jpg,
  png,
  webp,
}) => {
  const ListPanel = styled.div`
    text-align: left;

    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

    margin-bottom: 12px;
    width: 100%;
    float: left;
    background-color: ${Colors.back};

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

  const PanelContent = styled.div`
    text-align: left;
    padding: 43px 30px 72px 30px;

    ${Devices.tabletS} {
      padding: 43px 30px 72px 30px;
    }
    ${Devices.tabletM} {
      padding: 47px 20px 72px 20px;
    }
    ${Devices.laptopS} {
      padding: 42px 20px 72px 20px;
    }
    ${Devices.laptopM} {
      padding: 40px 30px 71px 30px;
    }
  `;

  return (
    <ListPanel>
      <PanelContent>
        {eyebrow && (
          <ListPanelEyebrow
            text={eyebrow}
            color1={eyebrowColor1}
            color2={eyebrowColor2}
          />
        )}
        {copy && <ListPanelCopy text={copy} />}
        {jpg && <ListPanelImage jpg={jpg} png={png} webp={webp} />}
      </PanelContent>
    </ListPanel>
  );
};

export default ListPanel;
