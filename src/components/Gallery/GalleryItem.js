import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";

import { Colors, Devices } from "../DesignSystem";

const GalleryItem = ({ title, desc, logo, thumbnail, slug }) => {
  const GalleryItem = styled.div`
    border-radius: 12px;
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    ${Devices.tabletS} {
      width: 100%;
    }
    ${Devices.tabletM} {
      width: 100%;
    }
    ${Devices.laptopS} {
      width: 100%;
    }
    ${Devices.laptopM} {
      width: 100%;
    }
  `;

  const GalleryItemLink = styled.a`
    cursor: pointer;
    direction: ltr;
    display: block;
    height: 100%;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    position: relative;
    text-align: left;
    text-decoration-color: blue;
    text-decoration: none;
    text-decoration-style: solid;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;

    &:hover {
      color: ${Colors.primaryText.highEmphasis};
    }
    &:visited {
      color: ${Colors.primaryText.mediumEmphasis};
      text-decoration: none;
    }
  `;

  const GalleryItemContent = styled(motion.div)`
    background-color: white;
    border-radius: 22px;

    direction: ltr;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 16px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    padding: 18px 18px 24px 18px;

    text-align: left;
    text-decoration-thickness: none;
    text-size-adjust: 100%;
    -webkit-box-direction: normal;
    -webkit-box-flex: 1;
    -webkit-font-smoothing: antialiased;
  `;

  const GalleryItemTitleContainer = styled.div`
    direction: ltr;
    display: flex;
    flex-grow: 0;
    flex-direction: row;
    gap: 12px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    position: relative;
    align-items: flex-start;
    align-content: flex-start;

    text-align: left;
    text-decoration-thickness: none;
    text-size-adjust: 100%;
    -webkit-box-direction: normal;
    -webkit-box-flex: 1;
    -webkit-font-smoothing: antialiased;
  `;

  const GalleryItemTitle = styled.div`
    direction: ltr;
    display: flex;
    flex-grow: 0;
    flex-direction: column;

    text-align: left;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;
    -webkit-box-direction: normal;
    -webkit-box-flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-pack: justify;
    -webkit-font-smoothing: antialiased;
  `;
  const GalleryItemName = styled.h3`
    color: rgba(0, 0, 0, 0.86);

    direction: ltr;

    font-weight: 600;
    font-size: 16px;

    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    line-height: 133%;

    margin: 0px;
    margin-block: 0px;
    margin-inline: 0px;
    margin-bottom: 0px;

    padding: 0px;
  `;
  const GalleryItemDesc = styled.p`
    color: ${Colors.primaryText.mediumEmphasis};

    direction: ltr;

    font-weight: 500;
    font-size: 14px;

    line-height: 133%;

    margin: 0px;
    margin-block: 0px;
    margin-inline: 0px;
    margin-bottom: 0px;

    padding: 0px;
  `;

  const GalleryCoverImage = styled.div`
    background-color: ${Colors.primaryText.lowEmphasis};
    flex-grow: 0;
    direction: ltr;
    width: 100%;
    height: auto;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    overflow-x: hidden;
    overflow-y: hidden;

    text-align: left;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;

    -webkit-box-direction: normal;
    -webkit-font-smoothing: antialiased;

    border-radius: 10px;

    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
    }
  `;
  const GalleryItemLogo = styled.div`
    background-color: ${Colors.primaryText.lowEmphasis};
    flex-grow: 0;
    flex-shrink: 0;
    direction: ltr;
    width: 40px;
    height: 40px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    overflow-x: hidden;
    overflow-y: hidden;

    text-align: left;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;

    -webkit-box-direction: normal;
    -webkit-font-smoothing: antialiased;

    border-radius: 10px;

    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
    }
  `;
  const Picture = styled.img`
    direction: ltr;
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0px;

    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    text-align: left;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;

    -webkit-box-direction: normal;
    -webkit-font-smoothing: antialiased;
  `;

  return (
    <GalleryItem>
      <GalleryItemLink href={slug}>
        <GalleryItemContent>
          <GalleryCoverImage>
            <Picture src={thumbnail ? thumbnail : ""} alt={""} />
          </GalleryCoverImage>
          <GalleryItemTitleContainer>
            <GalleryItemLogo>
              <Picture src={logo ? logo : ""} alt={""} />
            </GalleryItemLogo>
            <GalleryItemTitle>
              <GalleryItemName>{title ? title : "App Name"}</GalleryItemName>
              <GalleryItemDesc>
                {desc ? desc : "App Description"}
              </GalleryItemDesc>
            </GalleryItemTitle>
          </GalleryItemTitleContainer>
        </GalleryItemContent>
      </GalleryItemLink>
    </GalleryItem>
  );
};

export default GalleryItem;
