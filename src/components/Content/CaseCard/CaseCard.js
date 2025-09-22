import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";

import { Colors, Devices } from "../../DesignSystem";

// Components
import Eyebrow from "./CaseCardEyebrow";
import Headline from "./CaseCardHeadline";
import CaseCardImage from "./CaseCardImage";
import CaseCardCopy from "./CaseCardCopy";

const StyledCaseCard = styled(motion.div)`
  border-radius: 0.38rem;
  direction: ltr;
  display: list-item;
  grid-row-end: auto;
  grid-row-start: 1;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  text-align: left;
  text-size-adjust: 100%;
  width: 100%;
  max-width: 327px;
  -webkit-font-smoothing: antialiased;
  margin: 0px;

  ${Devices.tabletS} {
    max-width: 100%;
  }
  ${Devices.tabletM} {
    max-width: 330px;
  }
  ${Devices.laptopS} {
    max-width: 400px;
  }
  ${Devices.laptopM} {
    max-width: 558px;
  }
`;

const StyledCaseCardLink = styled("a", {
  shouldForwardProp: (prop) => prop !== "disabled",
})`
  cursor: ${({ disabled }) => (disabled ? "wait" : "pointer")};
  direction: ltr;
  display: block;
  width: 100%;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  position: relative;
  text-align: left;
  text-decoration: none;
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &:hover {
    color: ${Colors.primaryText.highEmphasis};
  }

  &:visited {
    color: ${Colors.primaryText.mediumEmphasis};
    text-decoration: none;
  }
`;

const StyledCaseCardContent = styled(motion.div)`
  background-color: white;
  border-bottom-left-radius: 0.38rem;
  border-bottom-right-radius: 0.38rem;

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

const StyledCaseCardHeader = styled.div`
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

const StyledCaseCardArticle = styled.div`
  background-color: white;
  border-radius: 0.38rem;
  box-shadow: none;
  direction: ltr;
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 300px;
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

  ${Devices.tabletS} {
    min-height: 300px;
  }
  ${Devices.tabletM} {
    min-height: 300px;
  }
  ${Devices.laptopS} {
    min-height: 330px;
  }
  ${Devices.laptopM} {
    min-height: 400px;
  }
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

const CaseCardMotion = {
  rest: {
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeInOut",
    },
  },
  hover: {
    boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeInOut",
    },
  },
  click: {
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut",
    },
  },
};

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
    paddingBottom: "24px",
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeInOut",
    },
  },
  click: {
    paddingBottom: "24px",
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut",
    },
  },
};

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
  return (
    <StyledCaseCard
      initial="rest"
      whileHover="hover"
      whileTap="click"
      animate="rest"
      variants={CaseCardMotion}
    >
      <StyledCaseCardLink href={link} disabled={comingSoon}>
        <StyledCaseCardArticle>
          {imgURL && (
            <CaseCardImage
              imgURL={imgURL}
              alt={headline}
              comingSoon={comingSoon}
            />
          )}
          <StyledCaseCardContent variants={CaseCardContentMotion}>
            <CaseCardHeaderContainer>
              <StyledCaseCardHeader>
                {eyebrow && (
                  <Eyebrow
                    text={eyebrow}
                    color1={eyebrowColor1}
                    color2={eyebrowColor2}
                  />
                )}
                {headline && <Headline text={headline} />}
              </StyledCaseCardHeader>
              {copy && (
                <CaseCardCopy text={copy} motionVariants={CaseCardContentMotion} />
              )}
            </CaseCardHeaderContainer>
          </StyledCaseCardContent>
        </StyledCaseCardArticle>
      </StyledCaseCardLink>
    </StyledCaseCard>
  );
};

export default CaseCard;
