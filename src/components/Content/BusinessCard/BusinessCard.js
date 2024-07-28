import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";
import Headline from "./BusinessCardHeadline";
import Copy from "./BusinessCardCopy";

const BusinessCard = ({ headline, copy }) => {
  const BusinessCard = styled.div`
    /* Auto Layout */
    display: flex;
    flex-direction: column;

    gap: 12px;
    align-items: flex-start;
    padding: 0px;

    position: static;
    margin: 0px 24px 80px 24px;
    /* Inside Auto Layout */

    ${Devices.tabletS} {
      margin: 0px 0px 60px 0px;
      width: 576px;
      align-items: flex-start;
      align-content: flex-start;
    }
    ${Devices.tabletM} {
      width: 720px;

      margin: 0px 0px 60px 0px;
    }
    ${Devices.laptopS} {
      flex-direction: row;
      gap: 24px;

      width: 864px;
      margin: 0px 0px 60px 0px;
    }
    ${Devices.laptopM} {
      width: 1152px;
      margin: 0px 0px 60px 0px;
    }
  `;

  const Portrait = styled.img`
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

    width: 265px;
    height: 150px;
    border-radius: 10px;

    color: transparent;
    background-color: black;
    background-image: linear-gradient(
      to right,
      ${Colors.blue},
      ${Colors.blueLight}
    );
    object-fit: cover;
    ${Devices.laptopM} {
      width: 345px;
      height: 195px;
    }
  `;

  return (
    <BusinessCard>
      <Portrait src="./img/Identity/Portrait.png" />
      {copy && <Copy copy={copy} />}
    </BusinessCard>
  );
};

export default BusinessCard;
