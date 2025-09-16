import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";
import { Landmark } from "lucide-react";
const DeliverablesCard = ({ headline, color1, color2, copy, img }) => {
  let csscolor = null;
  if (color1 && color2) {
    csscolor = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
  } else {
    csscolor = `background-image: linear-gradient(to right, ${Colors.green}, ${Colors.greenDark});`;
  }
  const DeliverablesCardHeadline = styled.h3`
    font-weight: 600;
    font-size: 28px;
    line-height: 114%;
    letter-spacing: 0.007em;

    text-align: left;

    color: transparent;
    ${csscolor};
    -webkit-background-clip: text;
    background-clip: text;

    margin-top: 12px;
    margin-bottom: 4px;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
  `;
  const DeliverablesCard = styled.div`
    text-align: left;

    border-radius: 0.38rem;

    width: 100%;

    float: left;
    background-color: ${Colors.back};

    overflow: hidden;

    ${Devices.tabletS} {
      width: 352px;
      height: 324px;
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
      width: 568px;
      height: 338.594px;
    }
    ${Devices.laptopM} {
    }
  `;

  const CardContent = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 30px 30px 0px 30px;

    ${Devices.tabletS} {
      padding: 30px 30px 0px 30px;
    }
    ${Devices.tabletM} {
      padding: 30px 20px 0px 20px;
    }
    ${Devices.laptopS} {
      padding: 30px 20px 0px 20px;
    }
    ${Devices.laptopM} {
      padding: 30px 30px 0px 30px;
    }
  `;

  const DeliverablesCardCopy = styled.p`
    font-weight: 400;
    font-size: 17px;
    line-height: 123%;
    letter-spacing: 0.05em;

    text-align: left;
    color: ${Colors.primaryText.highEmphasis};

    margin-top: 13.6px;
    margin-bottom: 24px;

    ${Devices.tabletS} {
      font-size: 17px;
      line-height: 123%;
    }
    ${Devices.tabletM} {
      font-size: 17px;
      line-height: 123%;
    }
    ${Devices.laptopS} {
      font-size: 17px;
      line-height: 123%;
    }
  `;
  const DeliverablesCardImg = styled.img`
    width: 100%;
    max-width: 100%;
    height: auto;
    display: block;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-top: auto;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
  `;
  return (
    <DeliverablesCard>
      <CardContent>
        {headline && (
          <DeliverablesCardHeadline>{headline}</DeliverablesCardHeadline>
        )}
        {copy && <DeliverablesCardCopy>{copy}</DeliverablesCardCopy>}
        <DeliverablesCardImg src={img} />
      </CardContent>
    </DeliverablesCard>
  );
};

export default DeliverablesCard;
