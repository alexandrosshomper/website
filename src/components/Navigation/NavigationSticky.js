import React from "react";
import styled from "@emotion/styled";
import { Menu, X } from "lucide-react";

import { Colors, Devices } from "../DesignSystem";
import ButtonSmall from "../Button/ButtonSmall";
import IdentitySticky from "../Identity/IdentitySticky";
import LandingpageMenu from "./LandingpageMenu";
import {
  BOOK_AUDIT_URL,
  CTA,
  GlobalNavCurtain,
  MenuButton,
  MenuItem,
  MenuLink,
  MenuList,
  NAV_LINKS,
  NavigationMenuMobile,
  useNavigationMenu,
} from "./NavigationShared";

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
`;

const StickyContainer = styled.div`
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

const NavigationSticky = () => {
  const { currentPath, menuOpen, openMenu, closeMenu, handleBookAudit } =
    useNavigationMenu();

  const renderLink = ({ to, label }) => (
    <MenuItem key={to}>
      <MenuLink
        to={to}
        style={{
          color:
            currentPath === to
              ? Colors.primaryText.highEmphasis
              : Colors.primaryText.mediumEmphasis,
          textDecoration: "none",
        }}
      >
        {label}
      </MenuLink>
    </MenuItem>
  );

  return (
    <StickyWrapper>
      {menuOpen ? (
        <NavigationMenuMobile>
          <CTA>
            <MenuButton onClick={closeMenu}>
              <X size={24} strokeWidth={1} />
            </MenuButton>
          </CTA>
          <MenuList>{NAV_LINKS.map(renderLink)}</MenuList>
        </NavigationMenuMobile>
      ) : (
        <StickyContainer>
          <IdentitySticky />
          <CTA>
            <LandingpageMenu style={{ marginTop: "4px" }} />
            <ButtonSmall
              clickAction={(event) =>
                handleBookAudit(event, BOOK_AUDIT_URL, "hero-section")
              }
              text={"Book intro call"}
              color1={Colors.blue}
              color2={Colors.blueDark}
            />
            <MenuButton onClick={openMenu}>
              <Menu size={24} strokeWidth={1} />
            </MenuButton>
          </CTA>
        </StickyContainer>
      )}
      {menuOpen && <GlobalNavCurtain />}
    </StickyWrapper>
  );
};

export default NavigationSticky;
