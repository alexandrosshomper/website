import React from "react";
import styled from "@emotion/styled";

import { Colors, Devices } from "../../DesignSystem";

import HeadHeadline from "./HeadHeadline";
import HeadSubline from "./HeadSubline";
import HeadDivider from "./HeadDivider";

import ButtonMedium from "../../Button/ButtonMedium";
import FadeInSection from "../../Content/FadeInSection/FadeInSection";

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
    <FadeInSection>
      <Head>
        {divider && <HeadDivider text={divider} />}
        {headline && <HeadHeadline headline={headline} />}
        {subline && <HeadSubline subline={subline} />}
        {cta && (
          <ButtonMedium
            href="https://calendar.app.google/qNqHiTZCN54GL2ij7"
            text={cta}
            color1={Colors.blue}
            color2={Colors.blueDark}
          />
        )}
      </Head>
    </FadeInSection>
  );
};

export default Head;
