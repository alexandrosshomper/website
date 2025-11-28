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

    margin-right: 24px;
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
    font-family: "Roboto", sans-serif;
    font-size: 21px;
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
          to={`/profile`}
          style={{
            color:
              currentPath === "/profile"
                ? Colors.primaryText.highEmphasis
                : Colors.primaryText.mediumEmphasis,
            textDecoration: "none",
          }}
        >
          Profile
        </Link>
      </MenuItemSmall>
      <MenuItemSmall>
        <Link
          to={`/portfolio`}
          style={{
            color:
              currentPath === "/portfolio"
                ? Colors.primaryText.highEmphasis
                : Colors.primaryText.mediumEmphasis,
            textDecoration: "none",
          }}
        >
          Portfolio
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
