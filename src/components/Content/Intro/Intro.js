import React, { useCallback, useMemo } from "react";
import styled from "@emotion/styled";
import Typewriter from "typewriter-effect";

import { Devices, Colors } from "../../DesignSystem";

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0px auto;
  margin-bottom: 160px;

  font-style: normal;
  font-weight: 400;
  line-height: 142%;

  text-align: left;

  color: #000a12;
  ${Devices.tabletS} {
    margin: 0 auto;
    width: 563px;
    height: 188px;
    font-size: 44px;
    line-height: 107%;
    text-align: left;
    margin-bottom: 320px;
  }
  ${Devices.tabletM} {
    width: 707px;
    height: 208px;
    font-size: 52px;
    line-height: 100%;
    letter-spacing: -0.02em;
  }
  ${Devices.laptopS} {
    width: 852px;
    height: 292px;
    font-size: 60px;
    line-height: 122%;
  }
  ${Devices.laptopM} {
    width: 1141px;
    height: 336px;
    font-size: 80px;
    line-height: 105%;
  }
`;
const IntroHeading = styled.h1`
  margin: 0px auto;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 142%;

  text-align: left;
  margin-left: 24px;
  margin-right: 24px;

  color: #000a12;
  ${Devices.tabletS} {
    margin: 0 auto;
    width: 563px;
    height: 188px;
    font-size: 48px;
    line-height: 107%;
    text-align: left;
    margin-bottom: 32px;
  }
  ${Devices.tabletM} {
    width: 707px;
    height: 208px;
    font-size: 56px;
    line-height: 100%;
    letter-spacing: -0.02em;
  }
  ${Devices.laptopS} {
    width: 852px;
    height: 292px;
    font-size: 66px;
    line-height: 122%;
  }
  ${Devices.laptopM} {
    width: 1141px;
    height: 336px;
    font-size: 88px;
    line-height: 105%;
  }
`;
const IntroHeadingTwo = styled.span`
  margin: 0px auto;
  font-family: "Noto Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 142%;

  text-align: left;
  margin-left: 24px;
  margin-right: 24px;

  color: #000a12;
  ${Devices.tabletS} {
    margin: 0 auto;
    width: 563px;
    height: 188px;
    font-size: 44px;
    line-height: 107%;
    text-align: left;
    margin-bottom: 32px;
  }
  ${Devices.tabletM} {
    width: 707px;
    height: 208px;
    font-size: 52px;
    line-height: 100%;
    letter-spacing: -0.02em;
  }
  ${Devices.laptopS} {
    width: 852px;
    height: 292px;
    font-size: 62px;
    line-height: 122%;
  }
  ${Devices.laptopM} {
    width: 1141px;
    height: 336px;
    font-size: 82px;
    line-height: 105%;
  }
`;
const Subline = styled.p`
  margin: 0px auto;
  margin-bottom: 160px;
  font-size: 32px;
  font-style: normal;
  font-weight: 200;
  line-height: 142%;

  text-align: left;
  margin-left: 24px;
  margin-right: 24px;

  color: ${Colors.primaryText.mediumEmphasis};
  ${Devices.tabletS} {
    margin: 0 auto;
    width: 563px;
    height: 188px;
    font-size: 36px;
    line-height: 109%;
    text-align: left;
    margin-bottom: 320px;
  }
  ${Devices.tabletM} {
    width: 707px;
    height: 208px;

    letter-spacing: -0.002em;
  }
  ${Devices.laptopS} {
    width: 852px;
    height: 292px;
  }
  ${Devices.laptopM} {
    width: 1141px;
    height: 336px;
  }
`;

const Intro = () => {
  const typewriterOptions = useMemo(
    () => ({
      autoStart: true,
      loop: true,
    }),
    [],
  );

  const handleTypewriterInit = useCallback((typewriter) => {
    typewriter
      .typeString(
        "<span>AI first Product</span> <span style='color: transparent; background-image: linear-gradient(to right, #ff1744, #6200ea); -webkit-background-clip: text; background-clip: text;'>Architect</span>",
      )
      .pauseFor(1000)
      .deleteChars(9)
      .typeString(
        "<span style='color: transparent; background-image: linear-gradient(to right, #6200ea, #00b8d4); -webkit-background-clip: text; background-clip: text;'>Designer</span>",
      )
      .pauseFor(1000)
      .deleteChars(8)
      .typeString(
        "<span style='color: transparent; background-image: linear-gradient(to right, #ff6d00, #ff1744); -webkit-background-clip: text; background-clip: text;'>Manager</span>",
      )

      .pauseFor(1500)
      .start();
  }, []);

  return (
    <IntroWrapper>
      <IntroHeading>
        Alexandros Shomper
        <Typewriter options={typewriterOptions} onInit={handleTypewriterInit} />
        <IntroHeadingTwo style={{ fontFamily: "Noto Sans", fontWeight: 300 }}>
          with 15+ years experience in various products
        </IntroHeadingTwo>
        <br />
      </IntroHeading>
      <Subline>
        Now seeking a{" "}
        <span style={{ color: "black" }}>Product Design Manager</span> role in a
        high-growth environment where strategic leadership and hands-on
        execution accelerate product maturity and user value.
      </Subline>
    </IntroWrapper>
  );
};

export default Intro;
