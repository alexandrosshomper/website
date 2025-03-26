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
      flex-direction: row;
      align-items: center;
      gap: 48px;
      margin: 0px 0px 60px 0px;
      width: 576px;
      align-content: flex-start;
    }
    ${Devices.tabletM} {
      width: 720px;

      margin: 0px 0px 60px 0px;
    }
    ${Devices.laptopS} {
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

    width: 100%;
    min-width: 0;
    max-width: none;

    border-radius: 20px;

    color: transparent;
    background-color: black;
    background-image: linear-gradient(
      to right,
      ${Colors.blue},
      ${Colors.blueLight}
    );
    object-fit: cover;
    ${Devices.tabletS} {
      width: 341px;
      height: 441px;
    }
    ${Devices.laptopM} {
      border-radius: 40px;

      width: 493px;
      height: 634px;
    }
  `;

  const BusinessCardParagraph = styled.div`
    display: block;
    gap: 12px;
    flex-basis: 50%;
    align-self: center;
    padding: 0 0 0 0;
    ${Devices.laptopM} {
      padding: 0 44px 0 44px;
    }
  `;

  const BusinessCardCopy = styled.p`
    position: static;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    color: ${Colors.primaryText.highEmphasis};

    /* Inside Auto Layout */

    font-size: 18px;
    line-height: 140%;

    margin-top: 0px;
    margin-bottom: 20px;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopM} {
      font-size: 24px;
      line-height: 133%;
      flex: 1;
    }
  `;

  const Overline = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;

    color: ${Colors.primaryText.lowEmphasis};
    margin: 0px 24px 8px 24px;

    font-size: 20px;
    line-height: 112%;
    text-align: left;
    margin-left: 0px;
    margin-right: 0px;

    ${Devices.tabletS} {
      text-align: left;
    }
    ${Devices.tabletM} {
      font-size: 20px;
      line-height: 111%;
    }
    ${Devices.laptopS} {
      font-size: 24px;
      line-height: 100%;
    }
    ${Devices.laptopM} {
      font-size: 24px;
      line-height: 113%;
    }
  `;

  const BusinessCardHeadline = styled.h3`
    position: static;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-weight: bold;

    color: rgba(0, 169, 157, 1);

    flex: none;
    order: 0;
    flex-grow: 0;
    font-size: 32px;
    line-height: 115%;

    margin-top: 0px;
    margin-bottom: 20px;

    color: transparent;
    background-image: linear-gradient(
      to right,
      ${Colors.blue},
      ${Colors.blueLight}
    );
    -webkit-background-clip: text;
    background-clip: text;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
      font-size: 32px;
      line-height: 115%;
      margin-right: 84px;
    }
  `;

  return (
    <BusinessCard>
      <Portrait src="./img/Identity/Portrait.png" />
      <BusinessCardParagraph>
        <Overline>40% of startups die because of bad traction</Overline>
        <BusinessCardHeadline>
          I’m Alexandros Shomper, <br />
          and I’m here to help.
        </BusinessCardHeadline>
        <BusinessCardCopy>
          My super power is making <b>customer-centric and data-driven</b>{" "}
          product decisions–fast.
        </BusinessCardCopy>
        <BusinessCardCopy>
          As a product lead focused on outcome I have a unique mixture of
          data-analysis, user psychology, marketing, and time in product
          trenches.
        </BusinessCardCopy>
        <BusinessCardCopy>
          Working on countless products I’ve learned first hand how{" "}
          <b>user onboarding and activation can make or break your startup</b>.{" "}
        </BusinessCardCopy>
      </BusinessCardParagraph>
    </BusinessCard>
  );
};

export default BusinessCard;
