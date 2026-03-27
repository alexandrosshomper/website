import React from "react";
import styled from "@emotion/styled";
import { Devices } from "../../DesignSystem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  padding: 0 24px;

  ${Devices.tabletS} {
    padding: 0;
    gap: 48px;
  }
`;

const IconRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 280px;

  ${Devices.tabletS} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 24px;
    max-width: none;
    width: auto;
  }

  ${Devices.laptopM} {
    gap: 32px;
  }
`;

const AppIcon = styled.img`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 22%;
  object-fit: cover;
  display: block;

  ${Devices.tabletS} {
    width: 100px;
    height: 100px;
  }

  ${Devices.laptopS} {
    width: 120px;
    height: 120px;
  }

  ${Devices.laptopM} {
    width: 140px;
    height: 140px;
  }
`;

const Robot = styled.img`
  width: 56px;
  height: auto;
  display: block;
  image-rendering: pixelated;

  ${Devices.tabletS} {
    width: 64px;
  }
`;

const AiTechStack = () => {
  return (
    <Wrapper>
      <IconRow>
        <AppIcon src="/img/tech-stack/figma.png" alt="Figma" />
        <AppIcon src="/img/tech-stack/spline.png" alt="Spline" />
        <AppIcon src="/img/tech-stack/lasso.png" alt="Lasso" />
        <AppIcon src="/img/tech-stack/claude.png" alt="Claude" />
      </IconRow>
      <Robot src="/img/tech-stack/robot.png" alt="" />
    </Wrapper>
  );
};

export default AiTechStack;
