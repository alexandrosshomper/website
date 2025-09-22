import React from "react";
import styled from "@emotion/styled";
import Typewriter from "typewriter-effect";

import { Devices } from "../../DesignSystem";
const StyledIntro = styled.h1`
  margin: 0px auto;
  margin-bottom: 160px;

  font-style: normal;
  font-weight: bold;
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


const Intro = (props) => {
return (
    <StyledIntro>
      Hi! I'm a product
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              " <span style='color: transparent; background-image: linear-gradient(to right, #ff1744, #6200ea); -webkit-background-clip: text; background-clip: text;'>lead</span>"
            )
            .pauseFor(2000)
            .deleteChars(4)
            .typeString(
              "<span style='color: transparent; background-image: linear-gradient(to right, #6200ea, #00b8d4); -webkit-background-clip: text; background-clip: text;'>consultant</span>"
            )
            .pauseFor(2000)
            .deleteChars(10)
            .typeString(
              "<span style='color: transparent; background-image: linear-gradient(to right, #ff6d00, #ff1744); -webkit-background-clip: text; background-clip: text;'>designer</span>"
            )

            .pauseFor(2500)
            .start();
        }}
      />
      <br />I help you make customer-centric & data-driven product decisions.
    </StyledIntro>
  );
};

export default Intro;
