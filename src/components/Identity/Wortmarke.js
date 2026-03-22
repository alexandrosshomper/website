import React from "react";
import styled from "@emotion/styled";

const Wortmarke = (props) => {
  const Wortmarke = styled.img`
    width: 194.64px;
    height: 21.6x;
  `;
  const Wrapper = styled.a`
    width: 194.64px;
    height: 21.6x;
  `;

  return (
    <Wrapper href="/">
      <Wortmarke
        className="Wortmarke"
        src="/img/Identity/Wortmarke/wortmarke.svg"
        alt="Alexandros Shomper Wortmarke"
        href="/"
      ></Wortmarke>
    </Wrapper>
  );
};

export default Wortmarke;
