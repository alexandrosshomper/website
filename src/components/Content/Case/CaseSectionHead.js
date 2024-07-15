import React, { useEffect } from "react";
import styled from "@emotion/styled";

import { Devices } from "../../DesignSystem";

import CaseHeadlineTwo from "./CaseHeadlineTwo";
import CaseSubline from "./CaseSubline";
//import SectionCopy from "./SectionCopy";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

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
          y: 0,
        },
        hidden: {
          opacity: 0.2,
          y: "+5%",
        },
      }}
    >
      {children}
    </motion.div>
  );
}

const CaseSectionHead = ({ headline, subline, copy }) => {
  const CaseSectionHead = styled.div`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    position: static;

    left: 0px;
    top: 0px;

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    width: 100%;

    padding-bottom: 60px;

    ${Devices.tabletS} {
      width: 564px;
    }
    ${Devices.tabletM} {
      width: 708px;
    }
    ${Devices.laptopS} {
      width: 740px;
    }
    ${Devices.laptopM} {
    }
  `;
  return (
    <FadeInWhenVisible>
      <CaseSectionHead>
        {headline && <CaseHeadlineTwo headline={headline} />}
        {subline && <CaseSubline subline={subline} />}
        {/*{copy && <SectionCopy copy={copy} />}*/}
      </CaseSectionHead>
    </FadeInWhenVisible>
  );
};

export default CaseSectionHead;
