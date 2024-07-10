import React from "react";
import styled from "@emotion/styled";
import { Devices } from "../../DesignSystem";

const CaseCardGrid = (props) => {
  const CaseCardGrid = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    align-self: center;
    --gap: 24px;
    margin-left: 24px;
    margin-right: 24px;
    margin-left: calc(-1 * var(--gap));
    margin-bottom: calc(-1 * var(--gap));

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

  return <CaseCardGrid></CaseCardGrid>;
};

export default CaseCardGrid;
