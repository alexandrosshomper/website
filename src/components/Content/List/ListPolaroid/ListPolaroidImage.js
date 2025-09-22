import React from "react";
import styled from "@emotion/styled";

import { Devices } from "../../../DesignSystem";
const StyledListPolaroidImage = styled.div`
  background-color: white;

  /* Auto Layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: static;
  background-color: white;
  margin-bottom: 20px;

  width: 272px;
  height: 272px;

  ${Devices.tabletS} {
    width: 420px;
    height: 420px;
  }
  ${Devices.tabletM} {
    width: 348px;
    height: 348px;
  }
  ${Devices.laptopS} {
    width: 420px;
    height: 420px;
  }
  ${Devices.laptopM} {
    width: 372px;
    height: 372px;
  }
`;


const ListPolaroidImage = ({ imgURL }) => {
const Image = styled.div`
    background: url(${imgURL});
    background-position: center;
    background-size: cover;
    width: 244px;
    height: 244px;
    margin: 14px;

    ${Devices.tabletS} {
      width: 364px;
      height: 364px;
      margin: 28px;
    }
    ${Devices.tabletM} {
      width: 292px;
      height: 292px;
    }
    ${Devices.laptopS} {
      width: 364px;
      height: 364px;
    }
    ${Devices.laptopM} {
      width: 316px;
      height: 316px;
    }
  `;

  return (
    <StyledListPolaroidImage>
      <Image />
    </StyledListPolaroidImage>
  );
};

export default ListPolaroidImage;
