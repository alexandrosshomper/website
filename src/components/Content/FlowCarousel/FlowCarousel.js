import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

import FlowItem from "./FlowItem";

const FlowCarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  width: 100%;
`;

const CarouselScroller = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const CarouselViewport = styled.div`
  overflow: scroll hidden;
  scrollbar-width: none;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselContent = styled.div`
  min-width: 100%;
`;

const CarouselGrid = styled.div`
  display: flex;
  gap: 16px;
  padding: 4px 20px 10px 20px;
  width: max-content;

  ${Devices.tabletS} {
    gap: 24px;
    padding: 4px 330px 10px 330px;
  }
`;

const TextWrapper = styled.div`
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

const TitleLink = styled.a`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0;
  font-weight: 500;
  margin: 0;
  color: ${Colors.primaryText.highEmphasis};
  cursor: pointer;
  text-decoration: none;
`;

const TitleAppendix = styled.span`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0;
  font-weight: 500;
  margin: 0;
  color: ${Colors.primaryText.mediumEmphasis};
  cursor: pointer;
`;

const CarouselSubline = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.014em;
  font-weight: 400;
  margin: 0;
  color: ${Colors.primaryText.mediumEmphasis};
  cursor: pointer;
`;

const FlowCarousel = ({ data, appname, url }) => {
  return (
    <FlowCarouselWrapper>
      <CarouselScroller>
        <CarouselViewport>
          <CarouselContent>
            <CarouselGrid>
              {data.map((item) => (
                <FlowItem key={item.id} {...item} image={item.image} />
              ))}
            </CarouselGrid>
          </CarouselContent>
        </CarouselViewport>
      </CarouselScroller>
      <TextWrapper>
        <TitleLink href={url || "#"}>
          {appname} <TitleAppendix>Onboarding & Activation Flow</TitleAppendix>
        </TitleLink>
        <CarouselSubline>{data.length} Screens</CarouselSubline>
      </TextWrapper>
    </FlowCarouselWrapper>
  );
};

export default FlowCarousel;
