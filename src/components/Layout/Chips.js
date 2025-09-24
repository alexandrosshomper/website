import styled from "@emotion/styled";

import { Colors, Devices } from "../DesignSystem";

export const ChipRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
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

export const ChipPill = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: ${Colors.primaryText.highEmphasis};
  background-color: white;
  border-radius: 20px;
  padding: 8px 16px 8px 16px;
  cursor: default;
  white-space: nowrap;
`;
