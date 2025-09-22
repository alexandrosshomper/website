import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { Colors } from "../DesignSystem";
const StyledMenuItem = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: 300;
  margin: -2px;
  color: ${Colors.primaryText.mediumEmphasis};
  text-decoration: none;
  &:hover {
    color: ${Colors.primaryText.highEmphasis};
  }
  &:visited {
    color: ${Colors.primaryText.mediumEmphasis};
    text-decoration: none;
  }
`;


const MenuItem = ({ title, link }) => {
return (
    <StyledMenuItem>
      <Link
        to={`${link}`}
        style={{
          color: Colors.primaryText.highEmphasis,
          textDecoration: "none",
        }}
      >
        {title}
      </Link>
    </StyledMenuItem>
  );
};

export default MenuItem;
