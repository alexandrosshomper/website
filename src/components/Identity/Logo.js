import React from "react";
import styled from "@emotion/styled";

const LogoImage = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("/img/Identity/Logo/alexandros shomper logo@2x.png");
  background-size: contain;
  border-radius: 30px;
  cursor: grab;
  margin-bottom: 2px;
  transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
  &:active {
    cursor: grabbing;
    transform: scale(0.88) rotate(-8deg);
  }
`;

const Logo = () => {
  return <LogoImage />;
};

export default Logo;
