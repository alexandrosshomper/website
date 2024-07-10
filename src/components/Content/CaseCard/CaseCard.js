import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";

import { Colors, Devices } from "../../DesignSystem";

//Components
import Copy from "./CaseCardCopy";
import Eyebrow from "./CaseCardEyebrow";
import Headline from "./CaseCardHeadline";
import Image from "./CaseCardImage";

const CaseCard = ({
  eyebrow,
  eyebrowColor1,
  eyebrowColor2,
  headline,
  copy,
  imgURL,
  link,
  comingSoon,
}) => {
  const CaseCard = styled(motion.div)`
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    direction: ltr;
    display: list-item;
    grid-row-end: auto;
    grid-row-start: 1;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    text-align: left;
    text-size-adjust: 100%;
    width: 327px;
    -webkit-font-smoothing: antialiased;
    margin: 0px;

    ${Devices.tabletS} {
      width: 100%;
    }
    ${Devices.tabletM} {
      width: 330px;
    }
    ${Devices.laptopS} {
      width: 400px;
    }
    ${Devices.laptopM} {
      width: 558px;
    }
  `;

  const CaseCardMotion = {
    rest: {
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      scale: 1,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeInOut",
      },
    },
    hover: {
      boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.1)",
      scale: 1.01,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeInOut",
      },
    },
    click: {
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      scale: 0.9,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const CaseCardLink = styled.a`
    cursor: ${!comingSoon ?? "pointer"};
    cursor: ${comingSoon && "wait"};
    direction: ltr;
    display: block;
    height: 400px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    position: relative;
    text-align: left;
    text-decoration-color: blue;
    text-decoration: none;
    text-decoration-style: solid;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;

    &:hover {
      color: ${Colors.primaryText.highEmphasis};
    }
    &:visited {
      color: ${Colors.primaryText.mediumEmphasis};
      text-decoration: none;
    }
  `;
  const CaseCardArticle = styled.div`
    background-color: white;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    box-shadow: none;
    direction: ltr;
    display: flex;
    flex-direction: column;
    height: 400px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    overflow-x: hidden;
    overflow-y: hidden;
    text-align: left;
    text-decoration-thickness: none;
    text-size-adjust: 100%;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -webkit-font-smoothing: antialiased;
  `;
  const CaseCardContent = styled(motion.div)`
    background-color: white;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

    direction: ltr;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    padding: 24px 18px 24px 18px;

    text-align: left;
    text-decoration-thickness: none;
    text-size-adjust: 100%;
    -webkit-box-direction: normal;
    -webkit-box-flex: 1;
    -webkit-font-smoothing: antialiased;
  `;

  const CaseCardHeaderContainer = styled.div`
    direction: ltr;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    position: relative;
    align-items: flex-start;
    align-content: flex-start;

    text-align: left;
    text-decoration-thickness: none;
    text-size-adjust: 100%;
    -webkit-box-direction: normal;
    -webkit-box-flex: 1;
    -webkit-font-smoothing: antialiased;
  `;

  const CaseCardHeader = styled.div`
    direction: ltr;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: stretch;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    text-align: left;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;
    -webkit-box-direction: normal;
    -webkit-box-flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-pack: justify;
    -webkit-font-smoothing: antialiased;
  `;

  const CaseCardContentMotion = {
    rest: {
      paddingBottom: "24px",
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeInOut",
      },
    },
    hover: {
      paddingBottom: "72px",
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeInOut",
      },
    },
    click: {
      paddingBottom: "72px",
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const CaseCardCopyMotion = {
    rest: {
      opacity: 0,
      visibility: "hidden",
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeInOut",
      },
    },
    hover: {
      opacity: 1,
      visibility: "visible",
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeInOut",
      },
    },
    click: {
      opacity: 1,
      visibility: "visible",
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  return (
    <CaseCard
      initial="rest"
      whileHover="hover"
      whileTap="click"
      animate="rest"
      variants={CaseCardMotion}
    >
      <CaseCardLink href={link}>
        <CaseCardArticle>
          {imgURL && (
            <Image imgURL={imgURL} alt={headline} comingSoon={comingSoon} />
          )}
          <CaseCardContent variants={CaseCardContentMotion}>
            <CaseCardHeaderContainer>
              <CaseCardHeader>
                {eyebrow && (
                  <Eyebrow
                    text={eyebrow}
                    color1={eyebrowColor1}
                    color2={eyebrowColor2}
                  />
                )}
                {headline && <Headline text={headline} />}
              </CaseCardHeader>
              {copy && <Copy motionVariants={CaseCardCopyMotion} text={copy} />}
            </CaseCardHeaderContainer>
          </CaseCardContent>
        </CaseCardArticle>
      </CaseCardLink>
    </CaseCard>
  );
};

export default CaseCard;
