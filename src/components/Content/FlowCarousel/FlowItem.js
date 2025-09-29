import styled from "@emotion/styled";
import React from "react";

import { Colors, Devices } from "../../DesignSystem";

const FlowItemCard = styled.div`
  border-radius: 12px;
  width: 70%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;
  border-color: rgb(194, 194, 194);
  border-width: 1px;
  border-style: solid;
  scroll-snap-align: center;

  &:first-of-type {
    scroll-snap-align: start;
  }

  &:last-of-type {
    scroll-snap-align: end;
  }

  ${Devices.tabletS} {
    width: 480px;
  }
`;

const FlowItemWrapper = styled.div`
  width: 100%;
`;

const FlowItemLink = styled.a`
  display: flex;
  border-radius: 12px;

  overflow: hidden;
  cursor: zoom-in;

  width: 100%;

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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlowItemPicture = styled.img`
  border-radius: 12px;
  object-fit: contain;
  width: 100%;
  height: auto;
  display: block;
`;

const FlowItem = ({ image }) => {
  return (
    <FlowItemCard>
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
