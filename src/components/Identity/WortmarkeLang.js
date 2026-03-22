import React from "react";
import styled from "@emotion/styled";
import { Devices } from "../DesignSystem";

const Wortmarke = (props) => {
  const Wortmarke = styled.div`
    width: 194.64px;
    height: 21.6px;
    visibility: visible;
    background-image: url(/img/Identity/Wortmarke/wortmarke-lang.svg);
    background-repeat: no-repeat;
    ${Devices.tabletS} {
      width: 194.64px;
      background-image: url(/img/Identity/Wortmarke/wortmarke-lang.svg);
    }
  `;

  const Wrapper = styled.a`
    width: 194.64px;
    height: 21.6px;
  `;

  return (
    <Wrapper href="/">
      <Wortmarke
        className="Wortmarke"
        alt="Alexandros Shomper Wortmarke"
        href="/"
      ></Wortmarke>
    </Wrapper>
  );
};

export default Wortmarke;
