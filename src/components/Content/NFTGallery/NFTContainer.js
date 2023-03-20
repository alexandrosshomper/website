import React from "react";
import NFT from "./NFT";

const NFTContainer = (props) => {
  const displayNFTs = () => {
    if (!props.nfts) return "no data";
    if (!Array.isArray(props.nfts)) return "results are not array";
    return props.nfts.map((nft) => {
      console.log(nft);

      return (
        <NFT
          nft={nft}
          name={nft.name}
          url={nft.image_thumbnail_url}
          price={
            nft.last_sale
              ? nft.last_sale.total_price / 1000000000000000000
              : "-"
          }
        />
      );
    });
  };
  return <>{displayNFTs()}</>;
};

export default NFTContainer;
