import React from "react";
import styled from "@emotion/styled";

import { Colors, Devices } from "../DesignSystem";
import Identity from "../Identity/Identity";
import LandingpageMenu from "./LandingpageMenu";
import ButtonSmallSecondary from "../Button/ButtonSmallSecondary";
import NavigationBase from "./NavigationBase";

const NavigationWrapper = styled.header`
  margin: 0 auto;
  height: 220px;
  width: 100%;

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

const NavigationBar = styled.header`
  height: 132px;
  padding-bottom: 72px;
  border-bottom: 1px solid;
  border-color: ${Colors.primaryText.highEmphasis};
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

const Navigation = () => (
  <NavigationBase
    Wrapper={NavigationWrapper}
    Bar={NavigationBar}
    renderIdentity={() => <Identity />}
    renderLandingMenu={() => <LandingpageMenu />}
    renderCtaButton={({ handleBookAudit }) => (
      <ButtonSmallSecondary
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
    analyticsInstance="navigation"
  />
);

export default Navigation;
