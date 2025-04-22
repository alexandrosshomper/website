import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Devices, Colors } from "../../DesignSystem";

import { useState } from "react";

import FlowItem from "./FlowItem";

const FlowCarousel = ({ data, appname, url }) => {
  const FlowCarousel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    position: relative;
    width: 100%;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
    }
  `;
  const Scroller = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
  `;
  const Carousel = styled.div`
    overflow: scroll hidden;
    scrollbar-width: none;
    border-radius: inherit;
    width: 100%;
    height: 100%;
  `;
  const CarouselWrapper = styled.div`
    min-width: 100%;
  `;
  const CarouselGrid = styled.div`
    display: flex;
    gap: 24px;
    padding: 4px 20px 10px 20px;
    width: min-content;
    ${Devices.tabletS} {
      padding: 4px 330px 10px 330px;
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
  `;
  const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    margin: 0px auto 0px auto;
    width: 90%;
    ${Devices.tabletS} {
      width: 564px;
    }
    ${Devices.tabletM} {
      width: 708px;
    }
    ${Devices.laptopS} {
      width: 740px;
    }
  `;
  const Titel = styled.a`
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0;
    font-weight: 500;
    margin: 0;
    color: ${Colors.primaryText.highEmphasis};
    cursor: pointer;
    text-decoration: none;
  `;
  const Appendix = styled.span`
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0;
    font-weight: 500;
    margin: 0;
    color: ${Colors.primaryText.mediumEmphasis};
    cursor: pointer;
  `;
  const Subline = styled.p`
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.014em;
    font-weight: 400;
    margin: 0;
    color: ${Colors.primaryText.mediumEmphasis};
    cursor: pointer;
  `;

  return (
    <FlowCarousel>
      <Scroller>
        <Carousel>
          <CarouselWrapper>
            <CarouselGrid>
              {data.map((item) => (
                <FlowItem key={item.id} {...item} image={item.image} />
              ))}
            </CarouselGrid>
          </CarouselWrapper>
        </Carousel>
      </Scroller>
      <Text>
        <Titel href="/flows/asana">
          {" "}
          {appname} <Appendix>Onboarding & Activation Flow</Appendix>
        </Titel>
        <Subline>{data.length} Screens</Subline>
      </Text>
    </FlowCarousel>
  );
};

export default FlowCarousel;
