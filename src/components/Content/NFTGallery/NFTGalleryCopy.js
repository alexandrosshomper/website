import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
const StyledNFTGalleryCopy = styled(motion.p)`
  backface-visibility: visible;
  bottom: -24px;

  color: rgba(0, 0, 0, 0.86);
  cursor: pointer;

  direction: ltr;
  display: --webkit-box;

  font-weight: 400;
  font-size: 12px;

  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  line-height: 133%;

  margin: 0px;
  margin-block: 0px;
  margin-inline: 0px;
  margin-bottom: 0px;

  opacity: 0;
  overflow-x: hidden;
  overflow-y: hidden;

  padding: 0px;
  position: absolute;

  quotes: "“" "”";

  text-align: left;
  text-decoration-thickness: auto;
  text-size-adjust: 100%;

  visibility: hidden;

  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  -webkit-font-smoothing: antialiased;
  -webkit-line-clamp: 2;
`;


const NFTGalleryCopy = ({ text, motionVariants }) => {
return <StyledNFTGalleryCopy variants={motionVariants}>{text}</StyledNFTGalleryCopy>;
};

export default NFTGalleryCopy;
