import React from "react";
import styled from "@emotion/styled";

import { Devices } from "../../../DesignSystem";
const StyledListPanelImage = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 44px;

  background: url(${jpg});
  background: image-set(url(${png}) 1x);
  background: -webkit-image-set(url(${webp}) 1x);
  background-position: center;
  background-size: cover;

  ${Devices.tabletS} {
  }
  ${Devices.tabletM} {
    width: 188px;
    height: 188px;
  }
  ${Devices.laptopS} {
    width: 237px;
    height: 237px;
  }
  ${Devices.laptopM} {
    width: 314px;
    height: 314px;
  }
`;


const ListPanelImage = ({ jpg, png, webp }) => {
return <StyledListPanelImage />;
};

export default ListPanelImage;
