import React from "react";
import styled from "@emotion/styled";

const GradientContainer = styled.div`
  position: relative;
  height: 300px;
  width: 600px;
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Purple = styled(Layer)`
  background-image: radial-gradient(
    100% 150% at 10% 100%,
    #6200ea 50%,
    #ffffff 100%
  );
  mix-blend-mode: normal;
  transform: matrix(1, 0, 0, -1, 0, 0);
  background-size: cover;
`;

const Blue = styled(Layer)`
  background: radial-gradient(
    100% 119.39% at 0% 0%,
    #010dd4 51.57%,
    rgba(255, 255, 255, 0.24) 100%
  );
  mix-blend-mode: darken;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const Red = styled(Layer)`
  background-image: radial-gradient(
    105.41% 140% at 105.41% 100%,
    #ff1744 0%,
    rgba(255, 255, 255, 0) 100%
  );
  mix-blend-mode: multiply;
  transform: matrix(1, 0, 0, -1, 0, 0);
  background-size: cover;
`;

const Orange = styled(Layer)`
  background-image: radial-gradient(
    100% 100% at 100% 0%,
    #ff6d00 0%,
    rgba(255, 255, 255, 0) 100%
  );
  mix-blend-mode: color-burn;
  transform: matrix(1, 0, 0, -1, 0, 0);
  background-size: cover;
`;

const Yellow = styled(Layer)`
  background-image: radial-gradient(
    100% 100% at 100% 0%,
    #ff6d00 0%,
    rgba(255, 255, 255, 0) 100%
  );
  mix-blend-mode: multiply;
  transform: matrix(1, 0, 0, -1, 0, 0);
  background-size: cover;
`;

const GradientBackground = ({ className, ...props }) => (
  <GradientContainer className={className} {...props}>
    <Purple />
    <Blue />
    <Red />
    <Orange />
    <Yellow />
  </GradientContainer>
);

export default GradientBackground;
