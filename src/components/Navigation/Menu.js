import React from "react";
import { Devices } from "../DesignSystem";
import MenuItem from "./MenuItem";

import styled from "@emotion/styled";

const Menu = (props) => {
  const Menu = styled.div`
    text-align: left;
    height: 145px;
    float: left;
    top: -4px;

    ${Devices.tabletS} {
      width: 130px;
    }
    ${Devices.tabletM} {
      width: 204px;
    }
    ${Devices.laptopS} {
      width: 204px;
    }
    ${Devices.laptopM} {
      width: 276px;
    }
  `;

  return (
    <Menu className="Menu">
      <MenuItem title="Home" link="/" />
      <MenuItem title="Profile" link="/profile" />
      <MenuItem title="Portfolio" link="/portfolio" />
      <MenuItem title="Writing" link="/writing" />
    </Menu>
  );
};

export default Menu;
