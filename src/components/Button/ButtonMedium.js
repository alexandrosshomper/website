import React from "react";
import styled from "@emotion/styled";
import Icon from "@mdi/react";

const StyledButtonMedium = styled("a", {
  shouldForwardProp: (prop) =>
    !["gradientStart", "gradientEnd", "hoverColor"].includes(prop),
})`
    align-items: flex-start;
    appearance: auto;
    background-attachment: scroll;
    background-clip: border-box;
    background-image: linear-gradient(
      to right,
      ${({ gradientStart }) => gradientStart},
      ${({ gradientEnd }) => gradientEnd}
    );
    background-origin: padding-box;
    background-position-x: 0%;
    background-position-y: 0%;
    background-size: auto;

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    border-bottom-style: none;
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;

    border-bottom-width: 0px;
    border-top-width: 0px;
    border-right-width: 0px;
    border-left-width: 0px;

    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;

    border-left-color: rgb(255, 255, 255);
    border-right-color: rgb(255, 255, 255);
    border-top-color: rgb(255, 255, 255);
    border-bottom-color: rgb(255, 255, 255);

    color: rgba(255, 255, 255, 1);
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
      background-color: ${({ hoverColor }) => hoverColor};
      background-image: none;
    }
    &:visited {
      text-decoration: none;
    }
  `;

const ButtonMedium = ({ href, text, color1, color2, icon, clickAction }) => {
  const gradientStart = color1 || "#ff6d00";
  const gradientEnd = color2 || "#ff9e40";
  const hoverColor = color2 || "#000000";

  return (
    <StyledButtonMedium
      href={href}
      onClick={clickAction}
      gradientStart={gradientStart}
      gradientEnd={gradientEnd}
      hoverColor={hoverColor}
    >
      {text}
      {icon && <Icon path={icon} title={text} size={"16px"} />}
    </StyledButtonMedium>
  );
};

export default ButtonMedium;
