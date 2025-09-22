import React from "react";
import { Devices } from "../DesignSystem";
import MenuItem from "./MenuItem";

import styled from "@emotion/styled";
const StyledMenu = styled.div`
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


const Menu = (props) => {
return (
    <StyledMenu className="Menu">
      <MenuItem title="Case Studies" link="/portfolio" />
      <MenuItem title="White Papers" link="/writing" />
    </StyledMenu>
  );
};

export default Menu;
