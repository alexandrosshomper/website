import React from "react";
import styled from "@emotion/styled";

const WortmarkeImage = styled.img`
  width: 60.98px;
  height: 28.44px;
`;

const Wrapper = styled.a`
  width: 60.98px;
  height: 26px;
`;

const Wortmarke = (props) => {
  return (
    <Wrapper href="/">
      <WortmarkeImage
        className="Wortmarke"
        src="/img/Identity/Wortmarke/wortmarke.svg"
        alt="Alexandros Shomper Wortmarke"
      />
    </Wrapper>
  );
};

export default Wortmarke;
