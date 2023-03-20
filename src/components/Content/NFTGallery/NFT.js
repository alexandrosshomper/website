import React from "react";
import NFTGallery from "./NFTGallery";

const NFT = (props) => {
  if (props.nft.animation_url) {
    console.log("Animation URL: " + props.nft.animation_url);
  }
  return (
    <NFTGallery
      eyebrow={props.nft.collection.name}
      eyebrowColor1="#FF0000"
      eyebrowColor2="#FFCC00"
      headline={props.nft.name}
      videoURL={props.nft.animation_url ? props.nft.animation_url : false}
      imgURL={props.nft.image_thumbnail_url}
      price={
        props.nft.last_sale
          ? props.nft.last_sale.total_price / 1000000000000000000
          : "-"
      }
      link={props.nft.permalink}
    />
  );
};

export default NFT;
