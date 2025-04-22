// BookAnAudit.jsx
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Devices, Colors } from "../DesignSystem";

import ButtonMedium from "../Button/ButtonMedium";

const Headline = styled.h2`
  font-size: 48px;
  line-height: 1.0834933333;
  font-weight: 600;
  letter-spacing: -0.003em;
  text-align: center;
`;
const Subline = styled.p`
  font-size: 36px;
  line-height: 1.0834933333;
  font-weight: 600;
  letter-spacing: -0.003em;
  text-align: center;
  color: ${Colors.primaryText.mediumEmphasis};
`;
const OnboardingGradient = styled.span`
  color: transparent;
  background-image: linear-gradient(to right, #ff1744, #6200ea);
  -webkit-background-clip: text;
  background-clip: text;
`;
const ExperienceGradient = styled.span`
  color: transparent;
  background-image: linear-gradient(to right, #6200ea, #00b8d4);
  -webkit-background-clip: text;
  background-clip: text;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 40px;
  border-radius: 20px;
  background-color: white;

  margin-top: 20px;
  margin-bottom: 40px;

  direction: ltr;

  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;

  overflow-x: hidden;
  overflow-y: hidden;

  text-align: left;
  text-decoration-thickness: auto;
  text-size-adjust: 100%;

  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;

  max-width: 90%;
  ${Devices.tabletS} {
    width: 564px;
  }
  ${Devices.tabletM} {
    width: 708px;
  }
  ${Devices.laptopS} {
    width: 740px;
  }
  ${Devices.laptopM} {
  }
`;
const BookAnAudit = ({}) => {
  return (
    <Wrapper>
      <Headline>
        Let's fix your <OnboardingGradient>onboarding</OnboardingGradient>{" "}
        <ExperienceGradient>experience</ExperienceGradient>.
      </Headline>
      <Subline>
        Struggling to activate and retain users? <br />
        <br /> We help you create an onboarding experience that{" "}
        <span style={{ color: "black" }}>
          keeps users engaged longer
        </span> and{" "}
        <span style={{ color: "black" }}>converts new users faster</span>.
      </Subline>
      <br />
      <ButtonMedium
        href="https://calendar.app.google/qNqHiTZCN54GL2ij7"
        text={"Book my audit"}
        color1={Colors.blue}
        color2={Colors.blueDark}
      />
    </Wrapper>
  );
};

export default BookAnAudit;
