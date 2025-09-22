import React from "react";
import styled from "@emotion/styled";
const StyledNFTPrice = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;
const StyledETH = styled.img`
    height: 12px;
    width: 12px;
  `;


const NFTPrice = ({ price }) => {
const Amount = styled.p`
    direction: ltr;
    display: block;

    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    padding: 0px;
    margin-block-end: 0px;
    margin-block-start: 0px;
    margin-bottom: 0x;
    margin-inline-end: 0px;
    margin-inline-start: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 2px;

    text-align: left;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;
    -webkit-box-direction: normal;
    -webkit-font-smoothing: antialiased;

    font-weight: 400;
    font-size: 12px;
    line-height: 120%;

    color: black;
  `;
return (
    <StyledNFTPrice>
      <Amount>{price}</Amount>
      <StyledETH src="./img/NFT/ether.svg" />
    </StyledNFTPrice>
  );
};

export default NFTPrice;
