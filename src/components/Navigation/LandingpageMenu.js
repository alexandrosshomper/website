import React from "react";
import { Colors, Devices } from "../DesignSystem";

import styled from "@emotion/styled";
import ButtonSmall from "../Button/ButtonSmall";

const LandingpageMenu = (props) => {
  const LandingpageMenu = styled.div`
    text-align: left;
    float: left;
    top: -4px;
    padding-top: 1px;
    margin-right: 24px;
  `;
  const MenuItemSmall = styled.a`
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
      <MenuItemSmall>Case Studies</MenuItemSmall>
      <MenuItemSmall href="/reports">Reports</MenuItemSmall>
    </LandingpageMenu>
  );
};

export default LandingpageMenu;
