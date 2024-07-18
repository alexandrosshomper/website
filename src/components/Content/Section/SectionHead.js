import React, { useEffect } from "react";
import styled from "@emotion/styled";

import { Devices } from "../../DesignSystem";

import SectionHeadline from "./SectionHeadline";
import SectionSubline from "./SectionSubline";
import SectionCopy from "./SectionCopy";
import SectionDivider from "./SectionDivider";

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
          scale: 1,
          y: 0,
        },
        hidden: {
          opacity: 0,
          scale: 0.8,
          y: "+25%",
        },
      }}
    >
      {children}
    </motion.div>
  );
}

const SectionHead = ({ divider, headline, subline, copy }) => {
  const SectionHead = styled.div`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    padding: 0px;

    position: static;

    left: 0px;
    top: 0px;

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 24px 40px 24px;

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
      width: 864px;
      margin: 0px 0px 60px 0px;
    }
    ${Devices.laptopM} {
      width: 1152px;
      margin: 0px 0px 60px 0px;
    }
  `;
  return (
    <FadeInWhenVisible>
      <SectionHead>
        {divider && <SectionDivider text={divider} />}
        {headline && <SectionHeadline headline={headline} />}
        {subline && <SectionSubline subline={subline} />}
        {copy && <SectionCopy copy={copy} />}
      </SectionHead>
    </FadeInWhenVisible>
  );
};

export default SectionHead;
