import React from "react";
import styled from "@emotion/styled";

export const GradientContainer = styled.div`
  height: 300px;
  width: 600px;
`;

const BaseLayer = styled.div`
  align-items: stretch;
  width: 100%;
  height: 100%;
  transform: matrix(1, 0, 0, -1, 0, 0);
  background-size: cover;
`;

export const PurpleLayer = styled(BaseLayer)`
  background-image: radial-gradient(
    100% 150% at 10% 100%,
    #6200ea 50%,
    #ffffff 100%
  );
  mix-blend-mode: normal;
`;

export const BlueLayer = styled(BaseLayer)`
  background: radial-gradient(
    100% 119.39% at 0% 0%,
    #010dd4 51.57%,
    rgba(255, 255, 255, 0.24) 100%
  );
  mix-blend-mode: darken;
`;

export const RedLayer = styled(BaseLayer)`
  position: absolute;
  background-image: radial-gradient(
    105.41% 140% at 105.41% 100%,
    #ff1744 0%,
    rgba(255, 255, 255, 0) 100%
  );
  mix-blend-mode: multiply;
`;

export const OrangeLayer = styled(BaseLayer)`
  background-image: radial-gradient(
    100% 100% at 100% 0%,
    #ff6d00 0%,
    rgba(255, 255, 255, 0) 100%
  );
  mix-blend-mode: color-burn;
`;

export const YellowLayer = styled(BaseLayer)`
  background-image: radial-gradient(
    100% 100% at 100% 0%,
    #ff6d00 0%,
    rgba(255, 255, 255, 0) 100%
  );
  mix-blend-mode: multiply;
`;

export const GradientLayers = () => (
  <>
    <PurpleLayer />
    <BlueLayer />
    <RedLayer />
    <OrangeLayer />
    <YellowLayer />
  </>
);
