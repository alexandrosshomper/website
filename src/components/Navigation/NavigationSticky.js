import React from "react";
import styled from "@emotion/styled";

import { Colors, Devices } from "../DesignSystem";
import ButtonSmall from "../Button/ButtonSmall";
import LandingpageMenu from "./LandingpageMenu";
import IdentitySticky from "../Identity/IdentitySticky";
import NavigationBase from "./NavigationBase";

const StickyWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 52px;
  width: 100%;

  border-bottom: 1px solid;
  border-color: ${Colors.primaryText.highEmphasis};
  background-color: ${Colors.background};

  z-index: 1000;
  ${Devices.tabletS} {
  }
  ${Devices.tabletM} {
  }
  ${Devices.laptopS} {
  }
  ${Devices.laptopM} {
  }
`;

const StickyBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 52px;

  border-bottom: 1px solid;
  border-color: ${Colors.primaryText.highEmphasis};
  background-color: ${Colors.background};
  z-index: 1000;
  margin-right: 24px;
  margin-left: 24px;
  ${Devices.tabletS} {
    margin: 0 auto;

    width: 564px;
  }
  ${Devices.tabletM} {
    width: 708px;
  }
  ${Devices.laptopS} {
    width: 852px;
  }
  ${Devices.laptopM} {
    width: 1140px;
  }
`;

const NavigationSticky = () => (
  <NavigationBase
    Wrapper={StickyWrapper}
    Bar={StickyBar}
    renderIdentity={() => <IdentitySticky />}
    renderLandingMenu={() => <LandingpageMenu style={{ marginTop: "4px" }} />}
    renderCtaButton={({ handleBookAudit }) => (
      <ButtonSmall
        clickAction={(event) =>
          handleBookAudit(
            event,
            "https://calendar.notion.so/meet/alexandros/onboarding-discovery",
            "hero-section"
          )
        }
        text="Book intro call"
        color1={Colors.blue}
        color2={Colors.blueDark}
      />
    )}
    analyticsInstance="navigation-sticky"
    isSticky
  />
);

export default NavigationSticky;
