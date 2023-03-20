import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Logo = (props) => {
  const Logo = styled.div`
    width: 60px;
    height: 60px;
    background-image: url("./img/Identity/Logo/alexandros shomper logo@2x.png");
    background-size: contain;
    background-color: black;
    box-shadow: 0px 1px 0.1em black, 0 2px 0.2em black;
    border-radius: 30px;
    cursor: grab;
  `;

  return (
    <motion.div
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Logo />
    </motion.div>
  );
};

export default Logo;
