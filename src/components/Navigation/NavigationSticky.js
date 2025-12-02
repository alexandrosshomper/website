import React, { useState, useMemo, useEffect } from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

import { Devices, Colors } from "../DesignSystem";
import LandingpageMenu from "./LandingpageMenu";
import Wortmarke from "../Identity/WortmarkeLang";
import { X, Menu } from "lucide-react";

const NavigationWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 52px;

  border-bottom: 1px solid;
  border-color: ${Colors.primaryText.highEmphasis};
  background-color: ${Colors.background}dd;
  backdrop-filter: blur(2.40437px);
  z-index: 1000;
`;

const StickyBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 52px;
  border-bottom: 1px solid;
  width: 382px;
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
  bottom: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 13px 24px;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 9999;

  display: flex;
  flex-direction: column;
`;

const CTA = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  z-index: 9999;
`;
const Closer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  z-index: 9999;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px;
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

const MenuButton = styled.div`
  visibility: visible;
  display: block;
  ${Devices.tabletS} {
    visibility: hidden;
    display: none;
    flex-direction: row;
    align-items: center;
  }
`;

const NavigationSticky = ({ style }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  const menuButtonClick = (e) => {
    e.preventDefault();
    setMenuOpen(true);
  };
  const closeButtonClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
  };

  const navigationLinks = useMemo(
    () => [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Writing", to: "/writing" },
      { label: "Contact", to: "/contact" },
    ],
    []
  );
  return (
    <>
      {menuOpen ? (
        <NavigationMenuMobile>
          <Closer onClick={closeButtonClick}>
            <MenuButton>
              {" "}
              <X size={24} strokeWidth={1} onClick={closeButtonClick} />
            </MenuButton>
          </Closer>
          <MenuList>
            {navigationLinks.map((link) => {
              const isActive = currentPath === link.to;
              return (
                <MenuItem key={link.to}>
                  <MenuLink
                    to={link.to}
                    style={{
                      color: isActive
                        ? Colors.primaryText.highEmphasis
                        : Colors.primaryText.mediumEmphasis,
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </MenuLink>
                </MenuItem>
              );
            })}
          </MenuList>
        </NavigationMenuMobile>
      ) : (
        <NavigationWrapper data-navigation="sticky" style={style}>
          <StickyBar style={style}>
            <Wortmarke />
            <CTA>
              <LandingpageMenu />

              <MenuButton onClick={menuButtonClick}>
                <Menu size={24} strokeWidth={1} />
              </MenuButton>
            </CTA>
          </StickyBar>{" "}
        </NavigationWrapper>
      )}
      {menuOpen && <GlobalNavCurtain />}
    </>
  );
};

export default NavigationSticky;
