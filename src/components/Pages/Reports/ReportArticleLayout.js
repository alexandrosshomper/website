import styled from "@emotion/styled";

import { Colors, Devices } from "../../DesignSystem";

export const ReportContent = styled.div`
  text-align: left;
  margin-top: 72px;
`;

export const ReportSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-self: stretch;
  flex-grow: 0;
  padding: 0 24px;
  margin: 0 auto;

  ${Devices.tabletS} {
    padding: 0;
    width: 350px;
  }
  ${Devices.tabletM} {
    width: 480px;
  }
  ${Devices.laptopS} {
    width: 567px;
  }
  ${Devices.laptopM} {
    width: 567px;
  }
`;

export const ReportParagraph = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-self: stretch;
  flex-grow: 0;
  margin-bottom: 140px;
  margin-left: auto;
  margin-right: auto;

  ${Devices.tabletS} {
    width: 350px;
  }
  ${Devices.tabletM} {
    width: 480px;
  }
  ${Devices.laptopS} {
    width: 567px;
  }
  ${Devices.laptopM} {
    width: 567px;
  }
`;

export const ReportUnorderedList = styled.ul`
  position: static;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: ${Colors.primaryText.highEmphasis};

  list-style-type: circle;
  list-style-image: none;

  list-style-position: outside;
  padding-left: 0px;

  font-size: 24px;
  line-height: 130%;

  margin: 8px auto;
  width: 100%;

  ${Devices.tabletS} {
    width: 350px;
  }
  ${Devices.tabletM} {
    width: 480px;
  }
  ${Devices.laptopS} {
    width: 567px;
  }
  ${Devices.laptopM} {
    width: 567px;
  }
`;

export const ReportUnorderedListItem = styled.li`
  margin-bottom: 12px;
`;
