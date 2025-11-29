import React from "react";
import styled from "@emotion/styled";

const Wortmarke = (props) => {
  const Wortmarke = styled.img`
    width: 359.63px;
    height: 19.7px;
  `;
  const Wrapper = styled.a`
    width: 359.63px;
    height: 19.7px;
  `;

  return (
    <Wrapper href="/">
      <Wortmarke
        className="Wortmarke"
        src="/img/Identity/Wortmarke/wortmarke-lang.svg"
        alt="Alexandros Shomper Wortmarke"
        href="/"
      ></Wortmarke>
    </Wrapper>
  );
};

export default Wortmarke;
