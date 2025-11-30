import React from "react";
import { Colors, Devices } from "../DesignSystem";

import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

const LandingpageMenu = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const LandingpageMenu = styled.div`
    text-align: left;
    float: left;

    flex-direction: column;
    align-items: left;
    gap: 2px;
    visibility: hidden;
    display: none;
    ${Devices.tabletS} {
      display: flex;

      flex-direction: row;
      align-items: center;

      visibility: visible;
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
  `;
  const MenuItemSmall = styled.div`
    font-family: "Noto Sans", sans-serif;
    font-size: 18px;
    line-height: 137%;

    margin-left: 24px;

    text-decoration: none;

    font-weight: 400;
    color: ${Colors.primaryText.mediumEmphasis};
    &:hover {
      color: ${Colors.primaryText.highEmphasis};
      cursor: pointer;
    }
  `;

  return (
    <LandingpageMenu className="Menu">
      <MenuItemSmall>
        <Link
          to={`/`}
          style={{
            color:
              currentPath === "/"
                ? Colors.primaryText.highEmphasis
                : Colors.primaryText.mediumEmphasis,
            textDecoration: "none",
          }}
        >
          Home
        </Link>
      </MenuItemSmall>
      <MenuItemSmall>
        <Link
          to={`/about`}
          style={{
            color:
              currentPath === "/about"
                ? Colors.primaryText.highEmphasis
                : Colors.primaryText.mediumEmphasis,
            textDecoration: "none",
          }}
        >
          About
        </Link>
      </MenuItemSmall>
      <MenuItemSmall>
        <Link
          to={`/writing`}
          style={{
            color:
              currentPath === "/writing"
                ? Colors.primaryText.highEmphasis
                : Colors.primaryText.mediumEmphasis,
            textDecoration: "none",
          }}
        >
          Writing
        </Link>
      </MenuItemSmall>
    </LandingpageMenu>
  );
};

export default LandingpageMenu;
