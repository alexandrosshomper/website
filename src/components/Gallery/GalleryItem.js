import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Colors, Devices } from "../DesignSystem";
import { getFlowScreens } from "../../data/flows";

const IMAGE_ROTATION_INTERVAL = 500;
const IMAGE_PRELOAD_COUNT = 5;
import { getFlowScreens } from "../../data/flows";

const IMAGE_ROTATION_INTERVAL = 500;
const IMAGE_PRELOAD_COUNT = 5;

const GalleryItem = ({
  title,
  desc,
  logo,
  thumbnail,
  path,
  comingSoon,
  slug,
}) => {
  const images = useMemo(() => {
    const flowScreens = getFlowScreens(slug);
    const screenImages = (flowScreens || [])
      .map((screen) => screen && screen.image)
      .filter(Boolean);

    const combinedImages = thumbnail
      ? [thumbnail, ...screenImages]
      : screenImages;

    const uniqueImages = combinedImages.filter((image, index, arr) => {
      if (!image) {
        return false;
      }

      return arr.indexOf(image) === index;
    });

    return uniqueImages;
  }, [slug, thumbnail]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const rotationIntervalRef = useRef(null);
  const isPointerInsideRef = useRef(false);
  const preloadedImagesRef = useRef([]);

  const clearRotation = useCallback(() => {
    isPointerInsideRef.current = false;
    if (rotationIntervalRef.current) {
      clearInterval(rotationIntervalRef.current);
      rotationIntervalRef.current = null;
    }
  }, []);

  useEffect(() => () => clearRotation(), [clearRotation]);

  useEffect(() => {
    preloadedImagesRef.current = [];

    if (typeof Image === "undefined") {
      return undefined;
    }

    const preloadTargets = images.slice(0, IMAGE_PRELOAD_COUNT);
    const loadedImages = preloadTargets.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    preloadedImagesRef.current = loadedImages;

    return () => {
      preloadedImagesRef.current = [];
    };
  }, [images]);

  useEffect(() => {
    setActiveImageIndex(0);
    clearRotation();
  }, [clearRotation, slug, images.length, comingSoon]);

  const startRotation = useCallback(() => {
    if (comingSoon || images.length <= 1) {
      return;
    }

    clearRotation();

    isPointerInsideRef.current = true;

    rotationIntervalRef.current = setInterval(() => {
      if (!isPointerInsideRef.current) {
        return;
      }

      setActiveImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        return nextIndex;
      });
    }, IMAGE_ROTATION_INTERVAL);
  }, [clearRotation, comingSoon, images.length]);

  const stopRotation = useCallback(() => {
    isPointerInsideRef.current = false;
    clearRotation();
    setActiveImageIndex(0);
  }, [clearRotation]);

  const currentImage = images[activeImageIndex] || thumbnail || "";

  const GalleryItem = styled.div`
    border-radius: 12px;
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    cursor: ${comingSoon ? "wait" : "pointer"};
    cursor: ${comingSoon ? "wait" : "pointer"};
    cursor: ${comingSoon ? "wait" : "pointer"};
    cursor: ${comingSoon ? "wait" : "pointer"};
    cursor: ${comingSoon ? "wait" : "pointer"};
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
    cursor: ${comingSoon ? "wait" : "pointer"};
    pointer-events: ${comingSoon ? "none" : "auto"};
    pointer-events: ${comingSoon ? "none" : "auto"};
    pointer-events: ${comingSoon ? "none" : "auto"};
    pointer-events: ${comingSoon ? "none" : "auto"};
    direction: ltr;
    display: block;
    height: 100%;
    color: inherit;
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
    flex-grow: 1;
    flex-shrink: 1;
    flex-direction: row;
    min-width: 0;
    min-width: 0;
    min-width: 0;
    min-width: 0;
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
    flex-grow: 1;
    flex-grow: 1;
    flex-grow: 1;
    flex-grow: 1;
    flex-direction: column;
    min-width: 0;
    min-width: 0;
    min-width: 0;
    min-width: 0;

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
    color: ${comingSoon
      ? Colors.primaryText.mediumEmphasis
      : Colors.primaryText.highEmphasis};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    max-width: 100%;
    max-width: 100%;
    max-width: 100%;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    max-width: 100%;
    max-width: 100%;
    max-width: 100%;

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
    aspect-ratio: 8 / 5;
    position: relative;
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

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

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
    opacity: ${comingSoon ? 0.3 : 1};
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
  const ComingSoon = styled.p`
    z-index: 2;
    direction: ltr;
    display: block;
    font-size: 36px;
    color: ${Colors.textWhite.highEmphasis};
    position: absolute;
    top: 20%;

    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    text-align: center;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;
    width: 90%;
    max-width: 100%;
    -webkit-box-direction: normal;
    -webkit-font-smoothing: antialiased;
  `;
  return (
    <GalleryItem>
      <GalleryItemLink
        href={comingSoon ? undefined : path}
        onMouseEnter={startRotation}
        onMouseLeave={stopRotation}
      >
        <GalleryItemContent>
          <GalleryCoverImage>
            {comingSoon && <ComingSoon>Coming Soon</ComingSoon>}
            <Picture src={currentImage} alt={""} />
            <Picture src={currentImage} alt={""} />
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
