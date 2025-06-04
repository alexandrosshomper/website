// BookAnAudit.jsx
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Devices, Colors } from "../DesignSystem";

import ButtonMedium from "../Button/ButtonMedium";

const Headline = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-style: normal;

  color: ${Colors.primaryText.highEmphasis};
  margin-bottom: 8px;
  margin-top: 0px;

  font-size: 32px;
  line-height: 109%;
  text-align: center;
  padding-top: 24px;
  padding-bottom: 20px;
  ${Devices.tabletS} {
    text-align: center;
    width: 564px;
  }
  ${Devices.tabletM} {
    width: 708px;

    line-height: 114%;
  }
  ${Devices.laptopS} {
    width: 80%;
    font-size: 42px;
  }
  ${Devices.laptopL} {
  }
`;
const Subline = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-style: normal;

  color: ${Colors.primaryText.mediumEmphasis};
  margin-bottom: 8px;
  margin-top: 0px;

  font-size: 16px;
  line-height: 112%;
  text-align: center;
  width: 100%;

  ${Devices.tabletS} {
    font-size: 24px;

    text-align: center;
    width: 576px;
  }
  ${Devices.tabletM} {
    width: 708px;

    font-size: 24px;
    line-height: 111%;
  }
  ${Devices.laptopS} {
    width: 852px;

    font-size: 32px;
    line-height: 100%;
  }
  ${Devices.laptopM} {
    width: 720px;

    font-size: 24px;
    line-height: 124%;
  }
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

  margin: 20px 20px 40px 20px;

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
