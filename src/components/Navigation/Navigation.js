import React from "react";
import styled from "@emotion/styled";
import { Menu, X } from "lucide-react";

import { Colors, Devices } from "../DesignSystem";
import ButtonSmallSecondary from "../Button/ButtonSmallSecondary";
import Identity from "../Identity/Identity";
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

const Navigation = () => {
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
    <NavigationWrapper>
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
        <NavigationContainer>
          <Identity />
          <CTA>
            <LandingpageMenu />
            <ButtonSmallSecondary
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
        </NavigationContainer>
      )}
      {menuOpen && <GlobalNavCurtain />}
    </NavigationWrapper>
  );
};

export default Navigation;
