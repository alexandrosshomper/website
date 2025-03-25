import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../DesignSystem";
import Menu from "./Menu";
import Identity from "../Identity/Identity";
import ButtonSmall from "../Button/ButtonSmall";
import LandingpageMenu from "./LandingpageMenu";

const Navigation = (props) => {
  const Navigation = styled.header`
    padding-top: 16px;
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

  const CTA = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 4px;
  `;

  return (
    <Navigation>
      <Identity />
      {/*<Bio />*/}
      <CTA>
        {/*<LandingpageMenu />*/}

        <ButtonSmall
          href="https://calendar.app.google/qNqHiTZCN54GL2ij7"
          text={"Book my audit"}
          color1={Colors.blue}
          color2={Colors.blueDark}
        />
      </CTA>
    </Navigation>
  );
};

export default Navigation;
