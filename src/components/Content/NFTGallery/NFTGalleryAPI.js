import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Components
import NFTGallery from "../../Content/NFTGallery/NFTGallery";

function NftApiGallery() {
  const [nftApiData, setNftApiData] = useState();
  const options = {
    method: "GET",
    headers: { "X-API-KEY": "ce95491e81dd4e99b6fde7762e616ed3" },
  };
  useEffect(() => {
    fetch(
      "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&collection=construction-token-by-jeff-davis",
      options
    ).then((response) => {
      console.log(response);
      if (!response.ok) {
        throw Error("Error fetching data");
      }
      return response
        .json()
        .then((allData) => {
          console.log(allData);
          console.log(allData.assets[0].name);
          setNftApiData(allData.assets);
          console.log("Oh nfts:" + nftApiData[0].name);
        })
        .catch((err) => {
          throw Error(err.message);
        });
    });
  });

  return <p>NFT API</p>;
}

const NFTGalleryAPI = (props) => {
  console.log("NFTGalleryAPI");
  const HeraklitNFT = () => {
    console.log("HeraklitNFT");
    return props.nfts.map((nft) => {
      console.log("NFT Name:" + nft.collection.name);
      return (
        <NFTGallery
          eyebrow={nft.collection.name}
          eyebrowColor1="#FF0000"
          eyebrowColor2="#FFCC00"
          headline={nft.name}
          imgURL={nft.image_thumbnail_url}
          price={nft.lastSale.total_price}
          link={nft.permalink}
        />
      );
    });
  };
  console.log("HeraklitNFT 2");

  return HeraklitNFT();
};

export default NFTGalleryAPI;
