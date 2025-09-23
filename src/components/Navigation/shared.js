import ReactGA from "react-ga4";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import { Devices } from "../DesignSystem";

export const navLinks = [
  { to: "/case-studies", label: "Case Studies" },
  { to: "/reports", label: "Reports" },
  { to: "/flows", label: "Flow Gallery" },
];

export const NavigationWrapperBase = styled.header`
  margin: 0 auto;
  width: 100%;
  z-index: 1000;
`;

export const NavigationInnerBase = styled.div`
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

export const GlobalNavCurtain = styled.div`
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

export const NavigationMenuMobile = styled.div`
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

export const CTA = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
  gap: 12px;
  z-index: 9999;
`;

export const MenuList = styled.ul`
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

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  line-height: 1.1428571429;
  font-weight: 600;
  letter-spacing: 0.007em;
  text-decoration: none;
`;

export const MenuLink = styled(Link)`
  font-size: 28px;
  line-height: 1.1428571429;
  font-weight: 600;
  letter-spacing: 0.007em;
  text-decoration: none;
`;

export const MenuButton = styled.div`
  visibility: visible;
  display: block;

  ${Devices.tabletS} {
    visibility: hidden;
    display: none;

    flex-direction: row;
    align-items: center;
  }
`;

export const handleBookAudit = (
  event,
  href,
  instance = "navigation-sticky"
) => {
  if (event && event.preventDefault) {
    event.preventDefault();
  }
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

export const useNavigationMenu = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log("New page loaded:", location.pathname);
    setMenuOpen(false);
    return () => {
      console.log("Component is unmounting");
    };
  }, [location.pathname]);

  const openMenu = useCallback((event) => {
    console.log("menuButtonClick 1");
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    setMenuOpen(true);
    console.log("menuButtonClick 2");
  }, []);

  const closeMenu = useCallback((event) => {
    console.log("closeButtonClick 1");
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    setMenuOpen(false);
    console.log("closeButtonClick 2");
  }, []);

  return {
    menuOpen,
    currentPath: location.pathname,
    openMenu,
    closeMenu,
  };
};
