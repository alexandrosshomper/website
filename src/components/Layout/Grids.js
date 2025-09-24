import styled from "@emotion/styled";

import { Devices } from "../DesignSystem";

export const CaseCardGrid = styled.section`
  margin: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 24px;
  margin-bottom: calc(-1 * var(--gap));

  & > * {
    margin-left: var(--gap);
    margin-bottom: var(--gap);
  }

  ${Devices.tabletS} {
    width: 564px;
  }
  ${Devices.tabletM} {
    width: 708px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  ${Devices.laptopS} {
    width: 852px;
  }
  ${Devices.laptopM} {
    width: 1140px;
  }
`;

export const PricePanelGrid = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 12px;
  justify-content: center;
  align-content: center;
  align-items: stretch;
  --gap: 12px;

  margin-bottom: calc(1 * var(--gap));
  margin-right: 12px;
  margin-left: 12px;

  ${Devices.tabletS} {
    width: 576px;
    margin-right: 0px;
    margin-left: 0px;
    margin-bottom: calc(-1 * var(--gap));
  }
  ${Devices.tabletM} {
    width: 720px;
    flex-direction: row;
  }
  ${Devices.laptopS} {
    width: 864px;
  }
  ${Devices.laptopM} {
    width: 1152px;
  }
`;

export const DeliverablesGrid = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: flex-start;
  column-gap: 16px;
  row-gap: 16px;
  margin-left: 12px;
  margin-right: 12px;

  ${Devices.tabletS} {
    margin-left: 0px;
    margin-right: 0px;
    width: 576px;
  }
  ${Devices.tabletM} {
    width: 720px;
    flex-direction: row;
  }
  ${Devices.laptopS} {
    width: 864px;
  }
  ${Devices.laptopM} {
    width: 1152px;
  }
`;
