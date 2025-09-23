import React from "react";
import styled from "@emotion/styled";
import { Menu, X } from "lucide-react";

import { ButtonSmall } from "../Button";
import { Colors } from "../DesignSystem";
import IdentitySticky from "../Identity/IdentitySticky";
import LandingpageMenu from "./LandingpageMenu";
import {
  CTA,
  GlobalNavCurtain,
  MenuButton,
  MenuItem,
  MenuLink,
  MenuList,
  NavigationInnerBase,
  NavigationMenuMobile,
  NavigationWrapperBase,
  handleBookAudit,
  navLinks,
  useNavigationMenu,
} from "./shared";

const NavigationWrapper = styled(NavigationWrapperBase)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 52px;
  border-bottom: 1px solid;
  border-color: ${Colors.primaryText.highEmphasis};
  background-color: ${Colors.background};
`;

const NavigationContainer = styled(NavigationInnerBase)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 52px;
  border-bottom: 1px solid;
  border-color: ${Colors.primaryText.highEmphasis};
  background-color: ${Colors.background};
`;

const NavigationSticky = () => {
  const { menuOpen, currentPath, openMenu, closeMenu } = useNavigationMenu();

  return (
    <NavigationWrapper>
      {menuOpen ? (
        <NavigationMenuMobile>
          <CTA onClick={closeMenu}>
            <MenuButton>
              <X size={24} strokeWidth={1} onClick={closeMenu} />
            </MenuButton>
          </CTA>
          <MenuList>
            {navLinks.map(({ to, label }) => (
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
            ))}
          </MenuList>
        </NavigationMenuMobile>
      ) : (
        <NavigationContainer>
          <IdentitySticky />
          <CTA>
            <LandingpageMenu style={{ marginTop: "4px" }} />

            <ButtonSmall
              clickAction={(event) =>
                handleBookAudit(
                  event,
                  "https://calendar.notion.so/meet/alexandros/onboarding-discovery",
                  "hero-section"
                )
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

export default NavigationSticky;
