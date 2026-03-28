import React, { useState, useMemo, useEffect } from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

import { Devices, Colors } from "../DesignSystem";
import LandingpageMenu from "./LandingpageMenu";
import Logo from "../Identity/Logo";
import Wortmarke from "../Identity/WortmarkeLang";
import { X, Plus } from "lucide-react";
import Button from "../Button/Button";

const NavigationWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: transparent;
  z-index: 1000;
`;

const StickyBar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  margin: 12px;
  height: 52px;

  ${Devices.tabletS} {
    margin: 14px;
  }
`;

const CTAEnd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 12px;
  justify-self: end;
  visibility: hidden;
  ${Devices.tabletL} {
    visibility: visible;
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
  transition:
    opacity 0.32s cubic-bezier(0.4, 0, 0.6, 1) 80ms,
    visibility 0.32s step-end 80ms;
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  background: rgba(255, 255, 255, 0.7);
  opacity: 1;
  visibility: visible;
  transition:
    opacity 0.32s cubic-bezier(0.4, 0, 0.6, 1) 80ms,
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

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  gap: 4px;
  grid-column: 1 / -1;
  ${Devices.tabletL} {
    justify-content: center;
    grid-column: auto;
    justify-self: start;
  }
  background-color: ${Colors.background}dd;
  backdrop-filter: blur(2.40437px);
  z-index: 9999;
  height: 3rem;
  padding: 0 20px 0 16px;
  border-radius: 16px;
  corner-shape: squircle;
`;
const Identity = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 4px;
`;

const NavButton = styled(Button)`
  background-color: ${Colors.background}cc;
  backdrop-filter: blur(2.40437px);
  color: ${Colors.greyDark};
`;

const CTA = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 12px;
  background-color: ${Colors.background}dd;
  backdrop-filter: blur(2.40437px);
  z-index: 9999;
  height: 3rem;
  padding: 0 20px 0 20px;
  border-radius: 16px;
  corner-shape: squircle;
  visibility: hidden;
  ${Devices.tabletL} {
    visibility: visible;
  }
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
  display: flex;
  justify-content: center;
  cursor: pointer;
  ${Devices.tabletL} {
    visibility: hidden;
    display: none;
    flex-direction: row;
    align-items: center;
  }
`;

const NavigationSticky = () => {
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
      { label: "Work", to: "/portfolio" },
      { label: "About", to: "/about" },
      { label: "Writing", to: "/writing" },
      { label: "Contact", to: "/contact" },
    ],
    [],
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
          <NavButton
            as="a"
            size="medium"
            variant="primary"
            href="mailto:alexandros@alexandrosshomper.de"
            text="Get in touch"
            gradient={{ from: Colors.greyLight, to: Colors.greyLight }}
            color={Colors.greyDark}
          />
        </NavigationMenuMobile>
      ) : (
        <NavigationWrapper data-navigation="sticky">
          <StickyBar>
            <Main>
              <Identity>
                <Logo />
                <Wortmarke />
              </Identity>
              <MenuButton onClick={menuButtonClick}>
                <Plus size={24} strokeWidth={1} />
              </MenuButton>
            </Main>
            <CTA>
              <LandingpageMenu />
            </CTA>
            <CTAEnd>
              <NavButton
                as="a"
                size="medium"
                variant="primary"
                href="mailto:alexandros@alexandrosshomper.de"
                text="Get in touch"
                gradient={{ from: Colors.greyLight, to: Colors.greyLight }}
                color={Colors.greyDark}
              />
            </CTAEnd>
          </StickyBar>{" "}
        </NavigationWrapper>
      )}
      {menuOpen && <GlobalNavCurtain />}
    </>
  );
};

export default NavigationSticky;
