import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

import { Devices, Colors } from "../DesignSystem";
import Identity from "../Identity/Identity";
import LandingpageMenu from "./LandingpageMenu";
import { X, Menu } from "lucide-react";

const NavigationWrapper = styled.header`
  margin: 0 auto;
  height: 220px;
  width: 100%;
  z-index: 1000;
`;

const NavigationContainer = styled.header`
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

const CallToAction = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
  gap: 12px;
  z-index: 9999;
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

const MenuLinkStyled = styled(Link)`
  font-size: 28px;
  line-height: 1.1428571429;
  font-weight: 600;
  letter-spacing: 0.007em;
  text-decoration: none;
`;

const MenuButtonWrapper = styled.div`
  visibility: visible;
  display: block;

  ${Devices.tabletS} {
    visibility: hidden;
    display: none;
    flex-direction: row;
    align-items: center;
  }
`;
const Navigation = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  //PAGE RELOAD LOGIC
  useEffect(() => {
    // Perform actions when the route changes
    setMenuOpen(false);
  }, [location]); // Dependency array includes location to trigger effect on route changes

  //MENU OPEN LOGIC
  const menuButtonClick = (e) => {
    e.preventDefault();
    setMenuOpen(true);
  };
  const closeButtonClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
  };

  return (
    <NavigationWrapper>
      {menuOpen ? (
        <NavigationMenuMobile>
          <CallToAction>
            <MenuButtonWrapper onClick={closeButtonClick}>
              {" "}
              <X size={24} strokeWidth={1} />
            </MenuButtonWrapper>
          </CallToAction>
          <MenuList>
            <MenuItem>
              <MenuLinkStyled
                to="/profile"
                style={{
                  color:
                    currentPath === "/profile"
                      ? Colors.primaryText.highEmphasis
                      : Colors.primaryText.mediumEmphasis,
                  textDecoration: "none",
                }}
              >
                Profile
              </MenuLinkStyled>
            </MenuItem>
            <MenuItem>
              <MenuLinkStyled
                to="/portfolio"
                style={{
                  color:
                    currentPath === "/portfolio"
                      ? Colors.primaryText.highEmphasis
                      : Colors.primaryText.mediumEmphasis,
                  textDecoration: "none",
                }}
              >
                Portfolio
              </MenuLinkStyled>
            </MenuItem>
            <MenuItem>
              <MenuLinkStyled
                to="/writing"
                style={{
                  color:
                    currentPath === "/writing"
                      ? Colors.primaryText.highEmphasis
                      : Colors.primaryText.mediumEmphasis,
                  textDecoration: "none",
                }}
              >
                Writing
              </MenuLinkStyled>
            </MenuItem>
          </MenuList>
        </NavigationMenuMobile>
      ) : (
        <NavigationContainer>
          <Identity />

          <CallToAction>
            <LandingpageMenu />

            <MenuButtonWrapper onClick={menuButtonClick}>
              <Menu size={24} strokeWidth={1} />
            </MenuButtonWrapper>
          </CallToAction>
        </NavigationContainer>
      )}
      {menuOpen && <GlobalNavCurtain />}
    </NavigationWrapper>
  );
};

export default Navigation;
