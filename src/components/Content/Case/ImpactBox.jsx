import React from "react";
import styled from "@emotion/styled";

import { Colors, Devices } from "../../DesignSystem";

const ImpactGrid = styled.section`
  display: grid;
  width: 100%;
  gap: 16px;
  margin: 24px 0;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-auto-flow: row dense;

  ${Devices.tabletS} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${Devices.laptopS} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ImpactBoxWrapper = styled.article`
  background: rgba(8, 8, 8, 0.04);
  border-radius: 0.38rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ $size }) => ($size === "L" ? "24px" : "16px")};
  color: ${Colors.primaryText.highEmphasis};

  ${Devices.tabletS} {
    padding: 32px;
    grid-column: ${({ $size }) => ($size === "L" ? "span 2" : "span 1")};
  }

  ${Devices.laptopS} {
    grid-column: ${({ $size }) => ($size === "L" ? "span 2" : "span 1")};
  }
`;

const ImpactContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
  color: ${Colors.primaryText.highEmphasis};
`;

const ImpactQuote = styled.blockquote`
  margin: 0;
  font-family: "Noto Sans", sans-serif;
  font-weight: 450;
  letter-spacing: -0.01em;
  font-size: clamp(
    1.5rem,
    calc(1.5rem + 0.375 * ((100vw - 375px) / 1066)),
    1.875rem
  );
  line-height: clamp(
    1.98rem,
    calc(1.98rem + 0.495 * ((100vw - 375px) / 1066)),
    2.475rem
  );
  text-wrap: balance;
`;

const ImpactValueGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: ${({ $hasQuote }) => ($hasQuote ? "12px" : "0")};
`;

const ImpactValue = styled.span`
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  letter-spacing: -0.02em;
  font-size: clamp(
    1.5rem,
    calc(1.5rem + 0.88 * ((100vw - 375px) / 1066)),
    2.38rem
  );
  line-height: clamp(
    1.725rem,
    calc(1.725rem + 1.012 * ((100vw - 375px) / 1066)),
    2.737rem
  );
  text-wrap: balance;
`;

const ImpactSubline = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: -0.01em;
  font-size: 1.249rem;
  line-height: 130%;
  color: ${Colors.primaryText.mediumEmphasis};
  margin: 0;
  white-space: pre-line;
  text-wrap: balance;
`;

export const ImpactBox = ({ impact, subline, quote, size = "M", ...rest }) => {
  return (
    <ImpactBoxWrapper $size={size} data-component="impact-box" {...rest}>
      <ImpactContent $size={size}>
        {quote && <ImpactQuote $size={size}>{quote}</ImpactQuote>}
        <ImpactValueGroup $hasQuote={Boolean(quote)}>
          {impact && <ImpactValue $size={size}>{impact}</ImpactValue>}
          {subline && <ImpactSubline $size={size}>{subline}</ImpactSubline>}
        </ImpactValueGroup>
      </ImpactContent>
    </ImpactBoxWrapper>
  );
};

export const ImpactBoxGrid = ({ items = [], children, ...rest }) => {
  const hasItems = Array.isArray(items) && items.length > 0;

  return (
    <ImpactGrid data-component="impact-box-grid" {...rest}>
      {hasItems
        ? items.map(({ impact, subline, quote, size, ...itemRest }, index) => (
            <ImpactBox
              key={`${impact}-${index}`}
              impact={impact}
              subline={subline}
              quote={quote}
              size={size}
              {...itemRest}
            />
          ))
        : children}
    </ImpactGrid>
  );
};
