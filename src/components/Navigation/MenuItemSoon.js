import React from "react";
import styled from "@emotion/styled";

const MenuItemSoon = ({ title, link }) => {
  const MenuItem = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 32px;
    font-weight: 300;
    margin: -2px;
    color: rgba(0, 0, 0, 0.75);
    text-decoration: line-through;
    &:hover {
      color: rgba(0, 0, 0, 0.4);
      cursor: wait;
    }
  `;

  return <MenuItem>{title}</MenuItem>;
};

export default MenuItemSoon;
