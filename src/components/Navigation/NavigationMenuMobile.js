import React from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

import { Devices, Colors } from "../DesignSystem";
import Wortmarke from "../Identity/Wortmarke";
import ButtonSmall from "../Button/ButtonSmall";
import LandingpageMenu from "./LandingpageMenu";
import Identity from "../Identity/Identity";
import IdentitySticky from "../Identity/IdentitySticky";
import { X } from "lucide-react";

const NavigationMenuMobile = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const NavigationMenuWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 52px;
    width: 100%;
    
   
    
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
  const GlobalNavCurtain = styled.div`
    background: rgba(232, 232, 237, 0.4);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    visibility: hidden;
    position: fixed;
    opacity: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9998;
    transition: opacity 0.32s cubic-bezier(0.4, 0, 0.6, 1) 80ms,
      visibility 0.32s step-end 80ms;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background: rgba(255, 255, 255, 0.7);
    opacity: 1;
    visibility: visible;
    transition: opacity 0.32s cubic-bezier(0.4, 0, 0.6, 1) 80ms,
      visibility 0.32s step-start 80ms;
    backdrop-filter: blur(20px);
  `;

  const NavigationMenuMobile = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 52px;
    z-index: 9999;

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
    z-index: 9999;
  `;

  const Menu = styled.ul`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: px 24px 0 24px;
    gap: 16px;
    z-index: 9999;
  `;

  const MenuItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    line-height: 1.1428571429;
    font-weight: 600;
    letter-spacing: 0.007em;
    text-decoration: none;
  `;
  const MenuLink = styled(Link)`
    font-size: 28px;
    line-height: 1.1428571429;
    font-weight: 600;
    letter-spacing: 0.007em;
    text-decoration: none;
  `;

  return (
    <NavigationMenuWrapper>
      <NavigationMenuMobile>
        <CTA>
          <X size={24} strokeWidth={1} />
        </CTA>
        <Menu>
          <MenuItem>
            <MenuLink
              to="/case-studies"
              style={{
                color:
                  currentPath === "/case-studies"
                    ? Colors.primaryText.highEmphasis
                    : Colors.primaryText.mediumEmphasis,
                textDecoration: "none",
              }}
            >
              Case Studies
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to="/reports"
              style={{
                color:
                  currentPath === "/reports"
                    ? Colors.primaryText.highEmphasis
                    : Colors.primaryText.mediumEmphasis,
                textDecoration: "none",
              }}
            >
              Reports
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to="/flows"
              style={{
                color:
                  currentPath === "/flows"
                    ? Colors.primaryText.highEmphasis
                    : Colors.primaryText.mediumEmphasis,
                textDecoration: "none",
              }}
            >
              Flow Gallery
            </MenuLink>
          </MenuItem>
        </Menu>
      </NavigationMenuMobile>

      <GlobalNavCurtain />
    </NavigationMenuWrapper>
  );
};

export default NavigationMenuMobile;
