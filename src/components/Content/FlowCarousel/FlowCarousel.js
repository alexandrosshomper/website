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
  scroll-padding-inline: 20px;

  ${Devices.tabletS} {
    scroll-padding-inline: 330px;
  }
`;

const CarouselContent = styled.div`
  min-width: 100%;
`;

const CarouselGrid = styled.div`
  display: flex;
  gap: 24px;
  padding-top; 4px;
  padding-bottom: 10px;
  padding-left: calc((100vw - 70vw) / 2);
  padding-right: calc((100vw - 70vw) / 2);
  width: 70%;

  ${Devices.tabletS} {
  padding-left: calc((100vw - 520px) / 2);
  padding-right: calc((100vw - 520px) / 2);
  }
  ${Devices.laptopS} {
  padding-left: calc((100vw - 650px) / 2);
  padding-right: calc((100vw - 650px) / 2);
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin: 0px auto 0px auto;
  width: 70%;

  ${Devices.tabletS} {
    width: 520px;
  }
  ${Devices.tabletM} {
    width: 520px;
  }
  ${Devices.laptopS} {
    width: 650px;
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
              {data.map((item, index) => {
                const isFirst = index === 0;
                const isLast = index === data.length - 1;

                return (
                  <FlowItem
                    key={item.id}
                    {...item}
                    image={item.image}
                    snapAlignment={
                      isFirst ? "start" : isLast ? "end" : "center"
                    }
                  />
                );
              })}
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
