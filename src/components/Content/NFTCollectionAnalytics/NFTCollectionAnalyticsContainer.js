import React from "react";
import NFTCollectionAnalyticsTitle from "./NFTCollectionAnalyticsTitle";

const NFTCollectionAnalyticsContainer = (props) => {
  const displayNFTs = () => {
    if (!props.collection) return "no data";
    //if (!Array.isArray(props.collection)) return "results are not array";
    console.log("XxX");
    console.log("C: " + props.collection);
    console.log(
      "Primary Asset Contracts: " + props.collection.primary_asset_contracts
    );
    console.log("Trait: " + JSON.stringify(props.collection.traits));

    return (
      <>
        <NFTCollectionAnalyticsTitle
        //title={props.collection.primary_asset_contracts[0].name}
        />
        <p>Symbol:</p>
        <p>Count:</p>
        <p>Owners:</p>
        <p>Market Cap: </p>
        <p>
          Total Volume: {JSON.stringify(props.collection.stats.total_volume)}
        </p>
        <p>Total Sales: {JSON.stringify(props.collection.stats.total_sales)}</p>
      </>
      //Symbol //Collection Stats //# Items //# Owners //Floor Price
      //Volume Traded
    );
  };
  return <>{displayNFTs()}</>;
};

export default NFTCollectionAnalyticsContainer;
