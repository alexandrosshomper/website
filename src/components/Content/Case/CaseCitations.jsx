import React from "react";
import styled from "@emotion/styled";

import { Colors, Devices } from "../../DesignSystem";

const CitationsWrapper = styled.section`
  width: calc(100% + 48px);
  box-sizing: border-box;
  background: rgba(8, 8, 8, 0.04);

  padding: 32px 24px;
  margin: 48px -24px;
  display: flex;
  flex-direction: column;

  ${Devices.tabletS} {
    border-radius: 24px;
    width: calc(100% + 96px);
    margin: 48px -48px;
    padding: 48px;
  }
`;

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
`;

const MetaBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetaLabel = styled.span`
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${Colors.primaryText.mediumEmphasis};
  margin-bottom: 8px;
`;

const MetaValue = styled.p`
  font-size: 17px;
  line-height: 1.5;
  color: ${Colors.primaryText.highEmphasis};
  margin: 0;
`;

const KeyResultsHeading = styled.span`
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${Colors.primaryText.mediumEmphasis};
  margin-bottom: 8px;
`;

const KeyResultsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0;
  margin: 0;
  margin-top: 8px;
  !list-style: none;
`;

const KeyResultItem = styled.div`
  background: ${Colors.back};
  border: 1px solid rgba(8, 8, 8, 0.08);
  color: ${Colors.primaryText.highEmphasis};
  border-radius: 999px;
  padding: 10px 16px;
  font-size: 15px;
  line-height: 1.3;
`;

const CaseCitations = ({
  company,
  role,
  team,
  product,
  stage,
  timeline,
  keyResults = [],
}) => {
  const entries = [
    { label: "Role", value: role },
    { label: "Team", value: team },
    { label: "Product", value: product },
    { label: "Stage", value: stage },
    { label: "Timeline", value: timeline },
  ].filter(({ value }) => Boolean(value));

  return (
    <CitationsWrapper data-component="case-citations">
      <MetaGrid>
        {entries.map(({ label, value }) => (
          <MetaBlock key={label}>
            <MetaLabel>{label}</MetaLabel>
            <MetaValue>{value}</MetaValue>
          </MetaBlock>
        ))}
      </MetaGrid>

      {keyResults.length > 0 && (
        <>
          <br />
          <KeyResultsHeading>Key Results</KeyResultsHeading>
          <KeyResultsList>
            {keyResults.map((result) => (
              <KeyResultItem key={result}>{result}</KeyResultItem>
            ))}
          </KeyResultsList>
        </>
      )}
    </CitationsWrapper>
  );
};

export default CaseCitations;
