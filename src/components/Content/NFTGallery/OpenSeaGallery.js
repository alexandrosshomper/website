import React, { Component } from "react";
import NFTContainer from "./NFTContainer";

class OpenSeaGallery extends Component {
  constructor() {
    super();
    this.state = {
      nfts: [],
    };
  }

  componentDidMount() {
    const options = {
      method: "GET",
      headers: { "X-API-KEY": "ce95491e81dd4e99b6fde7762e616ed3" },
    };
    fetch(
      "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=" +
        this.props.offset +
        "&limit=" +
        this.props.limit +
        "&collection=" +
        this.props.slug,
      options
    ).then((response) => {
      if (!response.ok) {
        throw Error("Error fetching data");
      }
      return response
        .json()
        .then((allData) => {
          this.setState({ nfts: allData.assets });
        })
        .catch((err) => {
          throw Error(err.message);
        });
    });
  }

  render() {
    return <NFTContainer nfts={this.state.nfts} />;
  }
}

export default OpenSeaGallery;
