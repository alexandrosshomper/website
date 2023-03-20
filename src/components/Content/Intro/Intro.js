import React from "react";
import styled from "@emotion/styled";
import Typewriter from "typewriter-effect";

import { Devices } from "../../DesignSystem";

const Intro = (props) => {
  const Intro = styled.h1`
    margin: 0px auto;
    margin-bottom: 160px;

    font-style: normal;
    font-weight: bold;
    font-size: 22px;
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
      text-align: center;
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

  return (
    <Intro>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "Hi! I'm a product <span style='color: transparent; background-image: linear-gradient(to right, #ff1744, #6200ea); -webkit-background-clip: text; background-clip: text;'>designer</span>"
            )
            .pauseFor(2000)
            .deleteChars(8)
            .typeString(
              "<span style='color: transparent; background-image: linear-gradient(to right, #ff6d00, #ff1744); -webkit-background-clip: text; background-clip: text;'>manager</span>"
            )
            .pauseFor(2000)
            .deleteChars(7)
            .typeString(
              "<span style='color: transparent; background-image: linear-gradient(to right, #6200ea, #00b8d4); -webkit-background-clip: text; background-clip: text;'>consultant</span>"
            )
            .pauseFor(2500)
            .deleteAll()
            .start();
        }}
      />
      solving problems with meaningful, useful experiences that people love.
    </Intro>
  );
};

export default Intro;
