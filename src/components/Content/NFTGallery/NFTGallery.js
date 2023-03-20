import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { Devices, Colors } from "../../DesignSystem";

//Components
import Eyebrow from "./NFTGalleryEyebrow";
import Headline from "./NFTGalleryHeadline";
import Image from "./NFTGalleryImage";
import Price from "./NFTPrice";

import AutoplayVideo from "../AutoplayVideo/AutoplayVideo";

const NFTGallery = ({
  eyebrow,
  eyebrowColor1,
  eyebrowColor2,
  headline,
  imgURL,
  videoURL,
  price,
  link,
  comingSoon,
}) => {
  const NFTGallery = styled(motion.li)`
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    direction: ltr;
    display: list-item;
    grid-row-end: auto;
    grid-row-start: 1;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    text-align: left;
    text-size-adjust: 100%;
    width: 200px;
    -webkit-font-smoothing: antialiased;

    ${Devices.tabletS} {
      width: 260px;
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
    }
  `;

  const NFTGalleryMotion = {
    rest: {
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      scale: 1,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeInOut",
      },
    },
    hover: {
      boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.1)",
      scale: 1.01,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeInOut",
      },
    },
    click: {
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      scale: 0.9,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const NFTGalleryLink = styled.a`
    cursor: pointer;
    direction: ltr;
    display: block;
    height: auto;
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
  const NFTGalleryArticle = styled.div`
    background-color: white;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    box-shadow: none;
    cursor: pointer;
    direction: ltr;
    display: flex;
    flex-direction: column;
    height: auto;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    overflow-x: hidden;
    overflow-y: hidden;
    text-align: left;
    text-decoration-thickness: none;
    text-size-adjust: 100%;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -webkit-font-smoothing: antialiased;
  `;
  const NFTGalleryContent = styled(motion.div)`
    background-color: white;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

    cursor: pointer;
    direction: ltr;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    padding: 24px 18px 24px 18px;

    text-align: left;
    text-decoration-thickness: none;
    text-size-adjust: 100%;
    -webkit-box-direction: normal;
    -webkit-box-flex: 1;
    -webkit-font-smoothing: antialiased;
  `;

  const NFTGalleryHeaderContainer = styled.div`
    cursor: pointer;
    direction: ltr;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
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

  const NFTGalleryHeader = styled.div`
    cursor: pointer;
    direction: ltr;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: stretch;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    text-align: left;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;
    -webkit-box-direction: normal;
    -webkit-box-flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-pack: justify;
    -webkit-font-smoothing: antialiased;
  `;

  return (
    <NFTGallery
      initial="rest"
      whileHover="hover"
      whileTap="click"
      animate="rest"
      variants={NFTGalleryMotion}
    >
      <NFTGalleryLink href={link}>
        <NFTGalleryArticle>
          {videoURL ? (
            <AutoplayVideo videoURL={videoURL} />
          ) : (
            <Image imgURL={imgURL} alt={headline} comingSoon={comingSoon} />
          )}
          <NFTGalleryContent>
            <NFTGalleryHeaderContainer>
              <NFTGalleryHeader>
                {eyebrow && (
                  <Eyebrow
                    text={eyebrow}
                    color1={eyebrowColor1}
                    color2={eyebrowColor2}
                  />
                )}
                {headline && <Headline text={headline} />}
                <Price price={price}></Price>
              </NFTGalleryHeader>
            </NFTGalleryHeaderContainer>
          </NFTGalleryContent>
        </NFTGalleryArticle>
      </NFTGalleryLink>
    </NFTGallery>
  );
};

export default NFTGallery;
