import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

const StyledDeliverablesCardHeadline = styled("h3", {
  shouldForwardProp: (prop) =>
    !["gradientStart", "gradientEnd"].includes(prop),
})`
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  letter-spacing: 0.007em;

  text-align: left;

  color: transparent;
  background-image: linear-gradient(
    to right,
    ${({ gradientStart }) => gradientStart},
    ${({ gradientEnd }) => gradientEnd}
  );
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

const StyledCardContent = styled.div`
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

const StyledDeliverablesCardImg = styled.img`
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

const StyledDeliverablesCard = styled.div`
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

const DeliverablesCard = ({ headline, color1, color2, copy, img }) => {
  const gradientStart = color1 || Colors.green;
  const gradientEnd = color2 || Colors.greenDark;

  return (
    <StyledDeliverablesCard>
      <StyledCardContent>
        {headline && (
          <StyledDeliverablesCardHeadline
            gradientStart={gradientStart}
            gradientEnd={gradientEnd}
          >
            {headline}
          </StyledDeliverablesCardHeadline>
        )}
        {copy && <DeliverablesCardCopy>{copy}</DeliverablesCardCopy>}
        <StyledDeliverablesCardImg src={img} />
      </StyledCardContent>
    </StyledDeliverablesCard>
  );
};

export default DeliverablesCard;
