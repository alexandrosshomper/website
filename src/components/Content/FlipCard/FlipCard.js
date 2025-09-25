import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

import FlipCardEyebrow from "./FlipCardEyebrow";
import FlipCardCopy from "./FlipCardCopy";
import { mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import InViewMotion from "../../animation/InViewMotion";

const FlipCard = ({
  eyebrow,
  eyebrowColor1,
  eyebrowColor2,
  backgroundColor,
  copy,
  copyBack,
  jpg,
  png,
  webp,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const FlipCard = styled.div`
    text-align: left;
    border-radius: 30px;
    margin-bottom: 12px;
    float: left;
    background-color: ${isFlipped ? backgroundColor : Colors.back};
    flex-grow: 1;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
    }
  `;

  const FrontContent = styled.div`
    text-align: left;
    padding: 30px 30px 72px 30px;
    visibility: ${!isFlipped ? "visible" : "hidden"};
    display: ${!isFlipped ? "block" : "none"};

    ${Devices.tabletS} {
      padding: 30px 30px 72px 30px;
    }
    ${Devices.tabletM} {
      padding: 30px 20px 72px 20px;
    }
    ${Devices.laptopS} {
      padding: 30px 20px 72px 20px;
    }
    ${Devices.laptopM} {
      padding: 30px 30px 71px 30px;
    }
  `;
  const BackContent = styled.div`
    text-align: left;
    padding: 30px 30px 72px 30px;
    visibility: ${isFlipped ? "visible" : "hidden"};
    display: ${isFlipped ? "block" : "none"};
    ${Devices.tabletS} {
      padding: 30px 30px 72px 30px;
    }
    ${Devices.tabletM} {
      padding: 30px 20px 72px 20px;
    }
    ${Devices.laptopS} {
      padding: 30px 20px 72px 20px;
    }
    ${Devices.laptopM} {
      padding: 30px 30px 71px 30px;
    }
  `;
  const ButtonFooterRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: auto;
    align-items: center;
    margin-top: 24px;
    margin-bottom: 0px;
    padding-bottom: 12px;
    padding-right: 12px;
    padding-left: 12px;
    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
    }
  `;
  const FlipButton = styled.button`
    background-color: ${isFlipped
      ? Colors.textWhite.highEmphasis
      : Colors.background};
    color: ${Colors.primaryText.mediumEmphasis};
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 20px;

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(${isFlipped ? "45deg" : "0deg"});
    transition: transform 3s;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
    }
  `;

  const flipCard = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
    console.log("CLick!!!");
  };

  return (
    <FlipCard>
      <FrontContent>
        {eyebrow && (
          <FlipCardEyebrow
            text={eyebrow}
            color1={eyebrowColor1}
            color2={eyebrowColor2}
          />
        )}
        {copy && <FlipCardCopy textArray={[copy]} />}
        {/*jpg && <FlipCardImage jpg={jpg} png={png} webp={webp} />*/}
      </FrontContent>
      <BackContent>
        {eyebrow && (
          <FlipCardEyebrow
            text={eyebrow}
            color1={eyebrowColor1}
            color2={eyebrowColor1}
          />
        )}
        <br />
        {copy && (
          <InViewMotion>
            <FlipCardCopy textArray={copyBack} />{" "}
          </InViewMotion>
        )}
        {/*jpg && <FlipCardImage jpg={jpg} png={png} webp={webp} />*/}
      </BackContent>

      <ButtonFooterRow>
        <FlipButton onClick={flipCard}>
          <Icon path={mdiPlus} size={1} />
        </FlipButton>
      </ButtonFooterRow>
    </FlipCard>
  );
};

export default FlipCard;
