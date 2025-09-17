import React from "react";
import styled from "@emotion/styled";
import { Colors } from "../DesignSystem";

const ButtonMediumText = ({
  href,
  color1,
  color2,
  text,
  icon,
  clickAction,
}) => {
  const ButtonMediumText = styled.a`
    align-items: flex-start;
    appearance: auto;

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    color: ${color1};
    cursor: pointer;
    direction: ltr;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;

    margin: 0px;
    min-width: 51px;

    overflow-x: visible;
    overflow-y: visible;

    padding: 16px 32px;

    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 130%;

    quotes: "“" "”";
    text-align: center;
    text-indent: 0px;
    text-rendering: auto;
    text-shadow: none;
    text-size-adjust: 100%;
    text-transform: none;
    vertical-align: baseline;

    letter-spacing: 0.02em;

    word-spacing: 0px;
    writing-mode: horizontal-tb;
    -webkit-font-smoothing: antialiased;
    border-image: none;
    -webkit-border-image: none;

    text-decoration: none;
    &:hover {
      background-color: ${Colors.greyLight};
      color: ${Colors.primaryText.highEmphasis};
      cursor: pointer;
    }
    &:visited {
      text-decoration: none;
    }
  `;

  return (
    <ButtonMediumText href={href} onClick={clickAction}>
      {text}
      {icon && icon}
    </ButtonMediumText>
  );
};

export default ButtonMediumText;
