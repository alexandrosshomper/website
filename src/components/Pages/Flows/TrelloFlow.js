import styled from "@emotion/styled";
import React from "react";
import { Helmet } from "react-helmet";

import flowData from "../../../data/flows/trello_flow.json";

// DESIGN SYSTEM
import { Colors, Devices } from "../../DesignSystem";

//COMPONENTS
import CaseSubline from "../../Content/Case/CaseSubline";
import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";

import FlowCarousel from "../../Content/FlowCarousel/FlowCarousel";

const Content = () => {
  const Content = styled.div`
    text-align: left;
    margin-top: 72px;
  `;

  const Section = styled.section`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    /* Inside Auto Layout */

    align-self: stretch;
    flex-grow: 0;
  `;

  const Chips = styled.div`
    display: flex;
    flex-direction: row;
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
  const Chip = styled.div`
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: ${Colors.primaryText.highEmphasis};
    background-color: white;
    border-radius: 20px;
    padding: 8px 16px 8px 16px;
    cursor: default;
  `;
  return (
    <Content>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Trello Onboarding Flow | Alexandros Shomper</title>
        <meta name="description" content="" />
        <description></description>
        <title>Trello Onboarding Flow</title>
      </Helmet>
      <Section>
        <CaseTitleEyebrow text={"Flow"} color1="#00b8d4" color2="#62ebff" />
        <CaseTitle headline={"Trello"} />
        <CaseSubline
          subline={"Capture, organize, and tackle your to-dos from anywhere."}
        />

        <Chips>
          <Chip>Project Management</Chip>
          <Chip>B2B</Chip>
          <Chip>Freemium</Chip>
        </Chips>
        <br />
        <br />
        <br />
        <FlowCarousel data={flowData} appname={"Trello"} />
        <br />
        <br />
        <br />
        <br />
      </Section>
    </Content>
  );
};

export default Content;
