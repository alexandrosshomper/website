import React from "react";
import styled from "@emotion/styled";

const NFTPrice = ({ price }) => {
  const NFTPrice = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  `;

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

  const ETH = styled.img`
    height: 12px;
    width: 12px;
  `;

  return (
    <NFTPrice>
      <Amount>{price}</Amount>
      <ETH src="./img/NFT/ether.svg" />
    </NFTPrice>
  );
};

export default NFTPrice;
