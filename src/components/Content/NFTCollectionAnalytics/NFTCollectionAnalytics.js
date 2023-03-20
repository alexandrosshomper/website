import React, { Component } from "react";
import NFTCollectionAnalyticsContainer from "./NFTCollectionAnalyticsContainer";

class NFTCollectionAnalytics extends Component {
  constructor() {
    super();
    this.state = {
      collection: [],
    };
  }

  componentDidMount() {
    const options = {
      method: "GET",
      headers: { "X-API-KEY": "ce95491e81dd4e99b6fde7762e616ed3" },
    };
    fetch(
      "https://api.opensea.io/api/v1/collection/" + this.props.collectionName,
      options
    ).then((response) => {
      if (!response.ok) {
        throw Error("Error fetching data");
      }
      return response
        .json()
        .then((allData) => {
          this.setState({ collection: allData.collection });
        })
        .catch((err) => {
          throw Error(err.message);
        });
    });
  }

  render() {
    console.log("Collection allData: " + this.state.collection);
    return (
      <>
        <NFTCollectionAnalyticsContainer collection={this.state.collection} />
      </>
    );
  }
}

export default NFTCollectionAnalytics;
