import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { Devices, Colors } from "../DesignSystem";
import Wortmarke from "../Identity/Wortmarke";
import ButtonSmall from "../Button/ButtonSmall";
import LandingpageMenu from "./LandingpageMenu";
import Identity from "../Identity/Identity";
import IdentitySticky from "../Identity/IdentitySticky";

const NavigationSticky = (props) => {
  const NavigationWrapper = styled.header`
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
    animation: moveDown 0.5s ease-in-out;
    ${Devices.tabletS} {
     
    }
    ${Devices.tabletM} {
     
    }
    ${Devices.laptopS} {
 
    }
    ${Devices.laptopM} {
      
  `;
  const NavigationSticky = styled.div`
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
    animation: moveDown 0.5s ease-in-out;
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
    padding-top: 15px;
  `;

  return (
    <NavigationWrapper>
      <NavigationSticky>
        {/*<IdentitySmall>
        <Logo />
        <div style={{ marginTop: "3px" }}>
          <Wortmarke />
        </div>
      </IdentitySmall>*/}
        <IdentitySticky />
        <CTA>
          <LandingpageMenu style={{ marginTop: "4px;" }} />

          <ButtonSmall
            href="https://calendar.app.google/qNqHiTZCN54GL2ij7"
            text={"Book my audit"}
            color1={Colors.blue}
            color2={Colors.blueDark}
          />
        </CTA>
      </NavigationSticky>
    </NavigationWrapper>
  );
};

export default NavigationSticky;
