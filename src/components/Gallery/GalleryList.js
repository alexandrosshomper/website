import React from "react";
import styled from "@emotion/styled";
import GalleryItem from "./GalleryItem";

import { Devices } from "../DesignSystem";

const GalleryListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: minmax(300px, auto);
  gap: 16px;
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  min-height: 100vh;

  ${Devices.tabletS} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${Devices.tabletM} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${Devices.laptopS} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${Devices.laptopM} {
    max-width: 1336px;
    margin: 0 auto;
  }
`;

const GalleryList = ({ data, filter }) => {
  return (
    <GalleryListWrapper>
      {data.map((item) => (
        <GalleryItem
          key={item.id}
          {...item}
          title={item.name}
          desc={item.desc}
          logo={item.logo}
          thumbnail={item.thumbnail}
          slug={item.slug}
          comingSoon={item.comingSoon}
        />
      ))}
    </GalleryListWrapper>
  );
};

export default GalleryList;
