import styled from "@emotion/styled";
import React from "react";
import { Helmet } from "react-helmet";

//Components
import { Colors, Devices } from "../../DesignSystem";

import CaseCopy from "../../Content/Case/CaseCopy";
import CaseHeadlineThree from "../../Content/Case/CaseHeadlineThree";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";

import CaseSubline from "../../Content/Case/CaseSubline";
import LeadGenerationForm from "../../LeadGen/LeadGenerationForm";

const Content = (props) => {
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

  const Paragraph = styled.section`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    /* Inside Auto Layout */
    align-self: stretch;
    flex-grow: 0;
    margin-bottom: 140px;
  `;

  const CaseUnorderedList = styled.ul`
    position: static;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    color: ${Colors.primaryText.highEmphasis};

    list-style-type: circle;
    list-style-image: none;

    list-style-position: outside;
    padding-left: 0px;

    /* Inside Auto Layout */

    font-size: 24px;
    line-height: 130%;

    margin: 8px auto;
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

  const CaseUnorderedListItem = styled.li`
    margin-bottom: 12px;
  `;

  return (
    <Content>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Four industry shifts making user onboarding & activation indispensible
          | Alexandros Shomper
        </title>
        <description>
          For early-stage and growth startup founders, retention is everything.
          But what if the key to higher retention and ARR isn't just engagement
          or new features? Our latest whitepaper dives into why user onboarding
          and activation are the most powerful (and cost-effective) levers for
          boosting long-term retention and revenue. Discover how optimizing
          these critical stages can drastically reduce churn, increase customer
          lifetime value, and accelerate growth. Download the full report to
          uncover the strategies top SaaS companies use to turn new users into
          loyal, paying customers.
        </description>
      </Helmet>
      <Section>
        <CaseTitleEyebrow text={"Report"} color1="#00b8d4" color2="#62ebff" />
        <CaseTitle
          headline={
            "Four industry shifts making user onboarding & activation indispensible"
          }
        />
        <CaseSubline subline="User Onboarding & Activation: a strategic imperative for growth, retention, and survival." />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CaseSectionHead
          headline={"Introduction"}
          subline={"Is your SaaS equipped for the new-normal?"}
        />
        <CaseCopy
          copy={
            "In today's challenging startup landscape, acquiring and retaining users has never been more critical – or more difficult. This in-depth report reveals why exceptional user onboarding is no longer optional."
          }
        />
        <br />

        <Paragraph>
          <CaseHeadlineThree headline={"Our latest report reveals:"} />
          <CaseUnorderedList>
            <CaseUnorderedListItem>
              Market Dynamics Have Fundamentally Changed
            </CaseUnorderedListItem>
            <CaseUnorderedListItem>
              The Funding Environment Has Tightened
            </CaseUnorderedListItem>
            <CaseUnorderedListItem>
              Product and Team Structures Have Evolved
            </CaseUnorderedListItem>
            <CaseUnorderedListItem>
              External Influences Shape Internal Pressures
            </CaseUnorderedListItem>
          </CaseUnorderedList>
          <br />
          <br />
          <CaseHeadlineThree headline={"Key Insights You'll Discover:"} />
          <CaseUnorderedList>
            <CaseUnorderedListItem>
              How market dynamics have fundamentally shifted, making user
              activation more crucial than ever
            </CaseUnorderedListItem>
            <CaseUnorderedListItem>
              Why companies with strong onboarding see up to 86% higher customer
              lifetime value
            </CaseUnorderedListItem>
            <CaseUnorderedListItem>
              The direct link between onboarding quality and key metrics like
              CAC, CLV, and NRR
            </CaseUnorderedListItem>
            <CaseUnorderedListItem>
              Real-world examples and case studies from successful companies
            </CaseUnorderedListItem>
          </CaseUnorderedList>
        </Paragraph>
        <Paragraph>
          <CaseSectionHead
            headline={"Who this report is for"}
            subline={
              "We designed this report for founders of early-stage and growth startups who are:"
            }
          />

          <CaseUnorderedList>
            <CaseUnorderedListItem>
              Startup founders and product leaders seeking sustainable growth
            </CaseUnorderedListItem>
            <CaseUnorderedListItem>
              SaaS companies struggling with user retention and activation
            </CaseUnorderedListItem>
            <CaseUnorderedListItem>
              Product teams looking to optimize their onboarding experience
            </CaseUnorderedListItem>
            <CaseUnorderedListItem>
              Growth managers focused on improving key metrics
            </CaseUnorderedListItem>
          </CaseUnorderedList>
          <br />
          <CaseCopy
            copy={
              "Download now to understand why user onboarding and activation have become the cornerstone of sustainable business growth in today's market."
            }
          />

          <LeadGenerationForm
            portal={"49351608"}
            form={"ce820859-2f9e-41bb-a9f8-db512c279fba"}
            size={"M"}
            successLink="./report-docs/[Report] Four industry shifts making onboarding & activation indispensable.pdf"
          />
        </Paragraph>
      </Section>
    </Content>
  );
};

export default Content;
