import React from "react";
import styled from "@emotion/styled";

const Wortmarke = (props) => {
  const Wortmarke = styled.img`
    width: 60.98px;
    height: 28.44px;
  `;
  const Hülle = styled.a`
    width: 60.98px;
  `;

  return (
    <Hülle href="/">
      <Wortmarke
        className="Wortmarke"
        src="/img/Identity/Wortmarke/wortmarke.svg"
        alt="Alexandros Shomper Wortmarke"
        href="/"
      ></Wortmarke>
    </Hülle>
  );
};

export default Wortmarke;
