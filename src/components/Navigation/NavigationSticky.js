import React, { useState } from "react";
import ReactGA from "react-ga4";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

import { Devices, Colors } from "../DesignSystem";
import ButtonSmall from "../Button/ButtonSmall";
import LandingpageMenu from "./LandingpageMenu";
import IdentitySticky from "../Identity/IdentitySticky";
import { X, Menu } from "lucide-react";
const StyledNavigationWrapper = styled.header`
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
      
  `;
const StyledGlobalNavCurtain = styled.div`
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
const StyledCTA = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 15px;
    gap: 12px;
    z-index: 9999;
  `;
const StyledMenuItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    line-height: 1.1428571429;
    font-weight: 600;
    letter-spacing: 0.007em;
    text-decoration: none;
  `;
const StyledMenuButton = styled.div`
    visibility: visible;
    display: block;
  ${Devices.tabletS} {
      visibility: hidden;
      display: none;
    flex-direction: row;
      align-items: center;
    }
  `;


const NavigationSticky = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonClick = (e) => {
    console.log("menuButtonClick 1");

    e.preventDefault();
    setMenuOpen(true);
    console.log("menuButtonClick 2");
  };
  const closeButtonClick = (e) => {
    console.log("closeButtonClick 1");
    e.preventDefault();
    setMenuOpen(false);
    console.log("closeButtonClick 2");
  };
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
const NavigationMenuMobile = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 52px;
    z-index: 9999;

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
const MenuList = styled.ul`
    position: fixed;
    top: 48;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0px 24px 0 24px;
    gap: 16px;
    z-index: 9999;
  `;
const MenuLink = styled(Link)`
    font-size: 28px;
    line-height: 1.1428571429;
    font-weight: 600;
    letter-spacing: 0.007em;
    text-decoration: none;
  `;
const hanldeBookAudit = (e, href, instance = "navigation-sticky") => {
    e.preventDefault();
    ReactGA.event({
      category: "User",
      action: "Clicked Book Audit",
      label: `Book Audit - ${instance}`,
      value: 10,
      nonInteraction: false,
    });
    setTimeout(() => {
      window.location.href = href;
    }, 150);
    console.log(`Clicked Book Audit - ${instance}`);
  };
  return (
    <StyledNavigationWrapper>
      {menuOpen ? (
        <NavigationMenuMobile>
          <StyledCTA onClick={closeButtonClick}>
            <StyledMenuButton>
              {" "}
              <X size={24} strokeWidth={1} onClick={closeButtonClick} />
            </StyledMenuButton>
          </StyledCTA>
          <MenuList>
            <StyledMenuItem>
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
            </StyledMenuItem>
            <StyledMenuItem>
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
            </StyledMenuItem>
            <StyledMenuItem>
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
            </StyledMenuItem>
          </MenuList>
        </NavigationMenuMobile>
      ) : (
        <NavigationSticky>
          <IdentitySticky />
          <StyledCTA>
            <LandingpageMenu style={{ marginTop: "4px;" }} />

            <ButtonSmall
              clickAction={(e) =>
                hanldeBookAudit(
                  e,
                  "https://calendar.notion.so/meet/alexandros/onboarding-discovery",
                  "hero-section"
                )
              }
              text={"Book intro call"}
              color1={Colors.blue}
              color2={Colors.blueDark}
            />
            <StyledMenuButton onClick={menuButtonClick}>
              <Menu size={24} strokeWidth={1} />
            </StyledMenuButton>
          </StyledCTA>
        </NavigationSticky>
      )}
      {menuOpen && <StyledGlobalNavCurtain />}
    </StyledNavigationWrapper>
  );
};

export default NavigationSticky;
