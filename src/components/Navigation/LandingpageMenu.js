import React from "react";
import { Colors, Devices } from "../DesignSystem";

import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

import ButtonSmall from "../Button/ButtonSmall";

const LandingpageMenu = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const LandingpageMenu = styled.div`
    text-align: left;
    float: left;
    top: -4px;
    padding-top: 1px;
    margin-right: 24px;
  `;
  const MenuItemSmall = styled.div`
    font-family: "Roboto", sans-serif;
    font-size: 12px;
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
          to={`/case-studies`}
          style={{
            color:
              currentPath === "/case-studies"
                ? Colors.primaryText.highEmphasis
                : Colors.primaryText.mediumEmphasis,
            textDecoration: "none",
          }}
        >
          Case Studies
        </Link>
      </MenuItemSmall>
      <MenuItemSmall>
        <Link
          to={`/reports`}
          style={{
            color:
              currentPath === "/reports"
                ? Colors.primaryText.highEmphasis
                : Colors.primaryText.mediumEmphasis,
            textDecoration: "none",
          }}
        >
          Reports
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
