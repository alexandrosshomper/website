import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Devices, Colors } from "../../DesignSystem";

import FlipCardEyebrow from "./FlipCardEyebrow";
import FlipCardCopy from "./FlipCardCopy";
import { mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
const StyledFlipCard = styled.div`
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
const StyledBackContent = styled.div`
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
const StyledFlipButton = styled.button`
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
function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.3 }}
        variants={{
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
          hidden: {
            opacity: 0,
          },
        }}
      >
        {children}
      </motion.div>
    );
  }

  const flipCard = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
    console.log("CLick!!!");
  };

  return (
    <StyledFlipCard>
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
      <StyledBackContent>
        {eyebrow && (
          <FlipCardEyebrow
            text={eyebrow}
            color1={eyebrowColor1}
            color2={eyebrowColor1}
          />
        )}
        <br />
        {copy && (
          <FadeInWhenVisible>
            <FlipCardCopy textArray={copyBack} />{" "}
          </FadeInWhenVisible>
        )}
        {/*jpg && <FlipCardImage jpg={jpg} png={png} webp={webp} />*/}
      </StyledBackContent>

      <ButtonFooterRow>
        <StyledFlipButton onClick={flipCard}>
          <Icon path={mdiPlus} size={1} />
        </StyledFlipButton>
      </ButtonFooterRow>
    </StyledFlipCard>
  );
};

export default FlipCard;
