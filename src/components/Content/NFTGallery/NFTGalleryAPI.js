import React, { useEffect, useState } from "react";

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
      if (!response.ok) {
        throw Error("Error fetching data");
      }
      return response
        .json()
        .then((allData) => {
          setNftApiData(allData.assets);
        })
        .catch((err) => {
          throw Error(err.message);
        });
    });
  }, []);

  return <p>NFT API</p>;
}

const NFTGalleryAPI = (props) => {
  return props.nfts.map((nft) => (
    <NFTGallery
      eyebrow={nft.collection.name}
      eyebrowColor1="#FF0000"
      eyebrowColor2="#FFCC00"
      headline={nft.name}
      imgURL={nft.image_thumbnail_url}
      price={nft.lastSale.total_price}
      link={nft.permalink}
    />
  ));
};

export default NFTGalleryAPI;
