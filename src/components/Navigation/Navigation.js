import React from "react";
import styled from "@emotion/styled";
import { Menu, X } from "lucide-react";

import { Colors } from "../DesignSystem";
import Identity from "../Identity/Identity";
import { ButtonSmallSecondary } from "../Button";
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
  height: 220px;
`;

const NavigationContainer = styled(NavigationInnerBase)`
  height: 132px;
  padding-bottom: 72px;
  border-bottom: 1px solid;
  border-color: ${Colors.primaryText.highEmphasis};
`;

const Navigation = () => {
  const { menuOpen, currentPath, openMenu, closeMenu } = useNavigationMenu();

  return (
    <NavigationWrapper>
      {menuOpen ? (
        <NavigationMenuMobile>
          <CTA>
            <MenuButton onClick={closeMenu}>
              <X size={24} strokeWidth={1} />
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
          <Identity />

          <CTA>
            <LandingpageMenu />

            <ButtonSmallSecondary
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

export default Navigation;
