import styled from "@emotion/styled";

import { Colors, Devices } from "../DesignSystem";

export const ChipRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  width: 70%;
  margin-top: 12px;

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

export const ChipPill = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: ${Colors.primaryText.mediumEmphasis};
  background-color: white;
  border-radius: 20px;
  padding: 8px 16px 8px 16px;
  cursor: default;
  white-space: nowrap;
`;
