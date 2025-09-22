import React from "react";
import styled from "@emotion/styled";

import { Devices, Colors } from "../../DesignSystem";

import FlowItem from "./FlowItem";
const StyledFlowCarousel = styled.div`
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
const StyledCarousel = styled.div`
  overflow: scroll hidden;
  scrollbar-width: none;
  border-radius: inherit;
  width: 100%;
  height: 100%;
`;
const StyledCarouselGrid = styled.div`
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
const StyledTitel = styled.a`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0;
  font-weight: 500;
  margin: 0;
  color: ${Colors.primaryText.highEmphasis};
  cursor: pointer;
  text-decoration: none;
`;
const StyledSubline = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.014em;
  font-weight: 400;
  margin: 0;
  color: ${Colors.primaryText.mediumEmphasis};
  cursor: pointer;
`;


const FlowCarousel = ({ data, appname, url }) => {
const Scroller = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
  `;
const CarouselWrapper = styled.div`
    min-width: 100%;
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
const Appendix = styled.span`
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0;
    font-weight: 500;
    margin: 0;
    color: ${Colors.primaryText.mediumEmphasis};
    cursor: pointer;
  `;
return (
    <StyledFlowCarousel>
      <Scroller>
        <StyledCarousel>
          <CarouselWrapper>
            <StyledCarouselGrid>
              {data.map((item) => (
                <FlowItem key={item.id} {...item} image={item.image} />
              ))}
            </StyledCarouselGrid>
          </CarouselWrapper>
        </StyledCarousel>
      </Scroller>
      <Text>
        <StyledTitel href={url || "#"}>
          {" "}
          {appname} <Appendix>Onboarding & Activation Flow</Appendix>
        </StyledTitel>
        <StyledSubline>{data.length} Screens</StyledSubline>
      </Text>
    </StyledFlowCarousel>
  );
};

export default FlowCarousel;
