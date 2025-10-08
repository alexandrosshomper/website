import styled from "@emotion/styled";
import React from "react";

import { Colors, Devices } from "../../DesignSystem";

const FlowItemCard = styled.div`
  border-radius: 12px;
  width: 100%;
  height: 100%;
  margin: 0;
  display: block;
  flex-shrink: 0;
  overflow: hidden;
  border-color: rgb(194, 194, 194);
  border-width: 1px;
  border-style: solid;
  scroll-snap-align: ${(props) => props.snapAlignment};
  scroll-snap-stop: always;

  ${Devices.tabletS} {
  }
  ${Devices.tabletM} {
  }
  ${Devices.laptopS} {
  }
  ${Devices.laptopM} {
  }
`;

const FlowItemWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 8 / 5;
`;

const FlowItemLink = styled.a`
  display: flex;
  position: absolute;
  inset: 0px;
  border-radius: 12px;

  overflow: hidden;
  cursor: zoom-in;

  width: 100%;
  height: 100%;

  &:hover {
    color: ${Colors.primaryText.highEmphasis};
  }
  &:visited {
    color: ${Colors.primaryText.mediumEmphasis};
    text-decoration: none;
  }
`;

const FlowItemImage = styled.div`
  flex-grow: 1;

  ${Devices.tabletS} {
  }
  ${Devices.tabletM} {
  }
  ${Devices.laptopS} {
  }
  ${Devices.laptopM} {
  }
`;

const FlowItemPicture = styled.img`
  border-radius: 12px;
  object-position: top;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const FlowItem = ({ image, snapAlignment = "center" }) => {
  return (
    <FlowItemCard snapAlignment={snapAlignment}>
      <FlowItemWrapper>
        <FlowItemLink
          href={image || undefined}
          target={image ? "_blank" : undefined}
          rel={image ? "noopener noreferrer" : undefined}
        >
          <FlowItemImage>
            <FlowItemPicture src={image} alt={""} />
          </FlowItemImage>
        </FlowItemLink>
      </FlowItemWrapper>
    </FlowItemCard>
  );
};

export default FlowItem;
