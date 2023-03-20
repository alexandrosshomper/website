import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { Colors } from "../DesignSystem";

const MenuItem = ({ title, link }) => {
  const MenuItem = styled.p`
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

  return (
    <MenuItem>
      <Link
        to={`${link}`}
        style={{
          color: Colors.primaryText.highEmphasis,
          textDecoration: "none",
        }}
      >
        {title}
      </Link>
    </MenuItem>
  );
};

export default MenuItem;
