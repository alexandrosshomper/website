import React from "react";
import styled from "@emotion/styled";

const GradientWrapper = styled.div`
  height: 300px;
  width: 600px;
`;

const GradientLayer = styled.div`
  align-items: stretch;
  width: 100%;
  height: 100%;
`;

const PurpleLayer = styled(GradientLayer)`
  background-image: radial-gradient(
    100% 150% at 10% 100%,
    #6200ea 50%,
    #ffffff 100%
  );
  mix-blend-mode: normal;
  transform: matrix(1, 0, 0, -1, 0, 0);
  background-size: cover;
`;

const BlueLayer = styled(GradientLayer)`
  background: radial-gradient(
    100% 119.39% at 0% 0%,
    #010dd4 51.57%,
    rgba(255, 255, 255, 0.24) 100%
  );
  mix-blend-mode: darken;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const RedLayer = styled(GradientLayer)`
  position: absolute;
  background-image: radial-gradient(
    105.41% 140% at 105.41% 100%,
    #ff1744 0%,
    rgba(255, 255, 255, 0) 100%
  );
  mix-blend-mode: multiply;
  transform: matrix(1, 0, 0, -1, 0, 0);
  background-size: cover;
`;

const OrangeLayer = styled(GradientLayer)`
  background-image: radial-gradient(
    100% 100% at 100% 0%,
    #ff6d00 0%,
    rgba(255, 255, 255, 0) 100%
  );
  mix-blend-mode: color-burn;
  transform: matrix(1, 0, 0, -1, 0, 0);
  background-size: cover;
`;

const YellowLayer = styled(GradientLayer)`
  background-image: radial-gradient(
    100% 100% at 100% 0%,
    #ff6d00 0%,
    rgba(255, 255, 255, 0) 100%
  );
  mix-blend-mode: multiply;
  transform: matrix(1, 0, 0, -1, 0, 0);
  background-size: cover;
`;

const GradientBackground = () => (
  <GradientWrapper>
    <PurpleLayer />
    <BlueLayer />
    <RedLayer />
    <OrangeLayer />
    <YellowLayer />
  </GradientWrapper>
);

export default GradientBackground;
