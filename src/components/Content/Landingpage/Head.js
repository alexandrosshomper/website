import React from "react";
import styled from "@emotion/styled";

import { Colors, Devices } from "../../DesignSystem";

import HeadHeadline from "./HeadHeadline";
import HeadSubline from "./HeadSubline";
import HeadDivider from "./HeadDivider";

import Button from "../../Button/Button";
import InViewMotion from "../../animation/InViewMotion";

const Head = ({ divider, headline, subline, cta }) => {
  const Head = styled.div`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

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
      align-items: center;
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
    <InViewMotion staggerChildren={null}>
      <Head>
        {divider && <HeadDivider text={divider} />}
        {headline && <HeadHeadline headline={headline} />}
        {subline && <HeadSubline subline={subline} />}
        {cta && (
          <Button
            size="medium"
            variant="primary"
            href="https://calendar.app.google/qNqHiTZCN54GL2ij7"
            text={cta}
            gradient={{ from: Colors.blue, to: Colors.blueDark }}
          />
        )}
      </Head>
    </InViewMotion>
  );
};

export default Head;
