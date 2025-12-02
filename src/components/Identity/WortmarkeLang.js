import React from "react";
import styled from "@emotion/styled";
import { Devices } from "../DesignSystem";

const Wortmarke = (props) => {
  const Wortmarke = styled.div`
    width: 237.16px;
    height: 19.7px;
    visibility: visible;
    background-image: url(/img/Identity/Wortmarke/wortmarke-kurz.svg);
    background-repeat: no-repeat;
    ${Devices.tabletS} {
      width: 359.63px;
      background-image: url(/img/Identity/Wortmarke/wortmarke-lang.svg);
    }
  `;

  const Wrapper = styled.a`
    width: 359.63px;
    height: 19.7px;
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
