import styled from "@emotion/styled";

import { Devices } from "../DesignSystem";

export const PageContent = styled.div`
  text-align: left;
  margin-top: 72px;
`;

export const PageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-self: stretch;
  flex-grow: 0;
`;

export const PaddedPageSection = styled(PageSection)`
  flex: none;
  order: 3;
  align-items: stretch;
  margin-bottom: 200px;

  ${Devices.tabletS} {
    align-items: center;
  }
`;

export const PageHeaderSection = styled(PaddedPageSection)`
  margin-bottom: 40px;

  ${Devices.tabletS} {
    margin-bottom: 200px;
  }
`;

export const PageParagraph = styled(PageSection)`
  margin-bottom: 140px;
`;
