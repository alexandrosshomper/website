import React from "react";
import styled from "@emotion/styled";
import { Devices } from "../../DesignSystem";

const StyledGrid = styled.section`
  margin: 0px 24px 0px 24px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  --gap: 24px;
  gap: var(--gap);
  ${Devices.tabletS} {
    width: 100%;
  }
  ${Devices.tabletM} {
    margin: 0px 0px 80px 0px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  ${Devices.laptopS} {
  }
  ${Devices.laptopM} {
    --gap: 12px;
  }
`;
const CaseCardGrid = ({ children, ...rest }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default CaseCardGrid;
