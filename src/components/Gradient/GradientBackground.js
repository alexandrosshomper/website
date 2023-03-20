import React from "react";
import styled from "@emotion/styled";

const GradientBackground = ({}) => {
  const breakpoints = [576, 768, 1024, 1220];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  const GradientBackground = styled.div`
    height: 300px;
    width: 600px;
  `;

  const Red = styled.div`
    position: absolute;
    align-items: stretch;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      105.41% 140% at 105.41% 100%,
      #ff1744 0%,
      rgba(255, 255, 255, 0) 100%
    );
    mix-blend-mode: multiply;
    transform: matrix(1, 0, 0, -1, 0, 0);
    background-size: cover;
  `;
  const Purple = styled.div`
    align-items: stretch;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      100% 150% at 10% 100%,
      #6200ea 50%,
      #ffffff 100%
    );
    mix-blend-mode: normal;
    transform: matrix(1, 0, 0, -1, 0, 0);
    background-size: cover;
  `;
  const Blue = styled.div`
    align-items: stretch;
    width: 100%;
    height: 100%;

    background: radial-gradient(
      100% 119.39% at 0% 0%,
      #010dd4 51.57%,
      rgba(255, 255, 255, 0.24) 100%
    );
    mix-blend-mode: darken;
    transform: matrix(1, 0, 0, -1, 0, 0);
  `;
  const Yellow = styled.div`
    align-items: stretch;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      100% 100% at 100% 0%,
      #ff6d00 0%,
      rgba(255, 255, 255, 0) 100%
    );
    mix-blend-mode: multiply;
    transform: matrix(1, 0, 0, -1, 0, 0);
    background-size: cover;
  `;
  const Orange = styled.div`
    align-items: stretch;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      100% 100% at 100% 0%,
      #ff6d00 0%,
      rgba(255, 255, 255, 0) 100%
    );
    mix-blend-mode: color-burn;
    transform: matrix(1, 0, 0, -1, 0, 0);
    background-size: cover;
  `;

  return (
    <GradientBackground>
      <Purple />
      <Blue />
      <Red />
      <Orange />
      <Yellow />
    </GradientBackground>
  );
};

export default GradientBackground;
