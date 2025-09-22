import React, { useCallback, useEffect, useState } from "react";
import ReactGA from "react-ga4";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { Colors, Devices } from "../DesignSystem";

const LINKS = [
  { to: "/case-studies", label: "Case Studies" },
  { to: "/reports", label: "Reports" },
  { to: "/flows", label: "Flow Gallery" },
];

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

const CTA = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
  gap: 12px;
  z-index: 9999;
`;

const MenuList = styled.ul`
  position: fixed;
  top: 48px;
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

const useNavigationState = ({ analyticsInstance }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const openMenu = useCallback((event) => {
    if (event?.preventDefault) {
      event.preventDefault();
    }
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback((event) => {
    if (event?.preventDefault) {
      event.preventDefault();
    }
    setMenuOpen(false);
  }, []);

  const handleBookAudit = useCallback(
    (event, href, instanceOverride) => {
      if (event?.preventDefault) {
        event.preventDefault();
      }

      const labelInstance = instanceOverride || analyticsInstance;

      ReactGA.event({
        category: "User",
        action: "Clicked Book Audit",
        label: `Book Audit - ${labelInstance}`,
        value: 10,
        nonInteraction: false,
      });

      setTimeout(() => {
        window.location.href = href;
      }, 150);
    },
    [analyticsInstance]
  );

  return {
    currentPath: location.pathname,
    menuOpen,
    openMenu,
    closeMenu,
    handleBookAudit,
  };
};

const NavigationBase = ({
  Wrapper,
  Bar,
  renderIdentity,
  renderLandingMenu,
  renderCtaButton,
  analyticsInstance,
  isSticky = false,
}) => {
  const {
    currentPath,
    menuOpen,
    openMenu,
    closeMenu,
    handleBookAudit,
  } = useNavigationState({
    analyticsInstance: analyticsInstance || (isSticky ? "navigation-sticky" : "navigation"),
  });

  const identity = renderIdentity ? renderIdentity({ isSticky }) : null;
  const landingMenu = renderLandingMenu
    ? renderLandingMenu({ isSticky })
    : null;
  const ctaButton = renderCtaButton
    ? renderCtaButton({ handleBookAudit, isSticky })
    : null;

  return (
    <Wrapper isSticky={isSticky}>
      {menuOpen ? (
        <NavigationMenuMobile>
          <CTA>
            <MenuButton onClick={closeMenu}>
              <X size={24} strokeWidth={1} />
            </MenuButton>
          </CTA>
          <MenuList>
            {LINKS.map(({ to, label }) => (
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
        <Bar isSticky={isSticky}>
          {identity}
          <CTA>
            {landingMenu}
            {ctaButton}
            <MenuButton onClick={openMenu}>
              <Menu size={24} strokeWidth={1} />
            </MenuButton>
          </CTA>
        </Bar>
      )}
      {menuOpen && <GlobalNavCurtain />}
    </Wrapper>
  );
};

export default NavigationBase;

export {
  CTA,
  GlobalNavCurtain,
  MenuButton,
  MenuItem,
  MenuLink,
  MenuList,
  NavigationMenuMobile,
};
