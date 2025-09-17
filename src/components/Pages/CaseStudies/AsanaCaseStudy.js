import styled from "@emotion/styled";
import React from "react";
import { Helmet } from "react-helmet";

// DESIGN SYSTEM
import { Colors, Devices } from "../../DesignSystem";
// CASE STUDY SLIDER
import CaseStudySlider from "../../CaseStudySlider/CaseStudySlider";
import asanaCaseStudy from "../../../data/casestudies/asanaCaseStudy.json";

//COMPONENTS
import CaseCopy from "../../Content/Case/CaseCopy";
import CaseHeadlineThree from "../../Content/Case/CaseHeadlineThree";
import CaseImage from "../../Content/Case/CaseImage";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseSublineTwo from "../../Content/Case/CaseSublineTwo";
import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";

import BookAnAudit from "../../LeadGen/BookAnAudit";

import FlowCarousel from "../../Content/FlowCarousel/FlowCarousel";
import asanaFlow from "../../../data/flows/asana.json";

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

    list-style-type: none;
    list-style-image: none;

    list-style-position: outside;
    padding-left: 0px;

    /* Inside Auto Layout */

    font-size: 24px;
    line-height: 160%;

    margin: 0 auto;
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

  const greenArrowStyle = {
    color: Colors.green,
    fontWeight: "bold",
  };

  return (
    <Content>
      <Helmet>
        <meta charSet="utf-8" />
        <title>myKnauf | Alexandros Shomper</title>
        <meta
          name="description"
          content="Digital Anthropologist. Experienced Product-, Service & Business
          Designer with demonstrated track record of successfully developing
          meaningful experiences that people love by using emerging technology,
          solid company purpose, and a strong brand to elevate human experiences
          and interactions."
        />
        <description></description>
        <title>Asana Case Study</title>
      </Helmet>
      <Section>
        <CaseTitleEyebrow
          text={"Case Study"}
          color1="#00b8d4"
          color2="#62ebff"
        />
        <CaseTitle headline={"Asana – Onboarding and Activation"} />
        <CaseSectionHead
          subline={
            "How positioning for teams & enterprise impacts your segmentation, setup, and plan selection"
          }
        />

        <CaseImage imgURL="/img/case_studies/asana/Cover@2x.png" size="M" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CaseCopy
          copy={
            "In this case study we’ll take a look at asana’s onboarding and activation flow."
          }
        />
        <CaseCopy
          copy={
            "While we’ve identified two use cases (Personal Task Management and Team Collaboration), the case study reveals a strong bias towards the team use case, occasionally at the expense of individual users."
          }
        />
        <CaseCopy
          copy={
            "Asana has clearly positioned itself towards enterprise and team collaboration, which is reflected throughout their user onboarding journey. This strategic focus impacts everything from landing page messaging, signup, to activation metrics."
          }
        />
        <CaseCopy copy={"Let’s take a look."} />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <Paragraph>
          <CaseHeadlineThree headline={"At a glance"} />
          <CaseUnorderedList>
            <li>Digital Strategy</li>
            <li>Information Architecture</li>
            <li>Roadmap</li>
            <li>Digital Branding</li>
          </CaseUnorderedList>
       </Paragraph>*/}

        <Paragraph>
          <CaseSectionHead
            headline={"Audit Walkthrough"}
            subline={"A step-by-step look at the onboarding journey⁠"}
          />
          <CaseStudySlider slides={asanaCaseStudy} />
        </Paragraph>
        <Paragraph>
          <CaseSectionHead
            headline={"Key Takeaways"}
            subline={
              "While Asana offers a strong team-oriented setup with thorough segmentation, it provides little effort payoff for the user and misses personalization opportunities.⁠"
            }
          />{" "}
          <CaseUnorderedList
            style={{ marginBottom: "24px", listStyleType: "circle" }}
          >
            <li>
              Strong team-oriented setup flow with emphasis on collaboration
              features
            </li>
            <li>Complex but thorough segmentation process during onboarding</li>
            <li>Activation heavily dependent on team participation</li>
            <li>
              Personal users may feel overwhelmed by enterprise-focused features
            </li>
          </CaseUnorderedList>
        </Paragraph>
        <Paragraph>
          <CaseSectionHead
            headline={"Onboarding Flow Evaluation"}
            subline={
              "The onboarding process shows both strengths and areas for improvement"
            }
          />{" "}
          <CaseHeadlineThree headline={"Strengths"} />
          <CaseUnorderedList>
            <li>
              <span style={greenArrowStyle}> 👍 </span>
              Well-designed project setup with visual workspace representation
            </li>
            <li>
              <span style={greenArrowStyle}> 👍 </span>
              Strong targeting for team collaboration use case
            </li>
            <li>
              <span style={greenArrowStyle}> 👍 </span>
              Comprehensive feature introduction
            </li>
            <li>
              <span style={greenArrowStyle}> 👍 </span>
              Flexible trial period approach
            </li>
          </CaseUnorderedList>
          <br />
          <br />
          <CaseHeadlineThree headline={"Areas for Improvement"} />
          <CaseUnorderedList>
            <li>
              <span style={greenArrowStyle}>👎 </span>
              Segmentation data not effectively utilized for personalization
            </li>
            <li>
              <span style={greenArrowStyle}> 👎 </span>
              Unclear messaging about trial period and feature availability
            </li>
            <li>
              <span style={greenArrowStyle}> 👎 </span>
              Complex first experience that may overwhelm new users
            </li>
            <li>
              <span style={greenArrowStyle}> 👎 </span>
              Limited support for personal use case activation
            </li>
          </CaseUnorderedList>
        </Paragraph>
        <Paragraph>
          <CaseSectionHead
            headline={"Recommendations"}
            subline={
              "Based on the audit findings, several opportunities for improvement exist"
            }
          />{" "}
          <CaseHeadlineThree headline={"Landingpage"} />
          <CaseSublineTwo
            subline={
              "Strong team-oriented setup flow with emphasis on collaboration features"
            }
          />
          <br />
          <CaseCopy
            copy={
              "Asana is a versatile project management tool that does not want to be put in one specific use."
            }
          />
          <CaseCopy
            copy={
              "On the website homepage It positions itself as a tool to connect any type of work with each other. This positioning is mainly focused on the buyer, the exec. They make the decision to purchase asana on a big plan. For the actual users of asana this positioning is very vague. Common for products with versatile use cases and aiming for enterprise customers."
            }
          />
          <CaseCopy
            copy={
              "But the exec comes in very late in the funnel. Most likely an Low-Mid level employee is the driving force, researching tools, advocating to their managers, etc."
            }
          />
          <CaseCopy
            copy={
              "Which is why asana provides many Landingpages and positionings for the different functions in a corporate. Marketing, Sales, Dev, HR, etc. which they can now afford compared to when they started - because multi-positioning & GTM is complex and costly."
            }
          />
          <CaseImage
            imgURL="/img/case_studies/asana/Fletch-horizontal-positioning-landingpage.png"
            size="S"
          />
          <CaseCopy copy={"So, what could asana do better? "} />
          <CaseCopy
            copy={
              "On the design side, the above the fold is very monotone. The CTA kind of blend in with the design. If everything has the same color, nothing is emphasized."
            }
          />
          <CaseCopy
            copy={
              "I wonder about the engagement and success KPI for the Chatbot, as it is very distracting and overlapping."
            }
          />
          <CaseCopy
            copy={
              "But asana could also leverage it’s multi-positioning. It could use the Landingpage as a source for personalizing the onboarding flow. For example reiterating the usp for marketing on the first signup screen when the user came from the marketing Landingpage."
            }
          />
          <CaseHeadlineThree headline={"Segmentation & Profiling"} />
          <CaseCopy
            copy={"Move certain profiling questions to post-commitment phase"}
          />
          <CaseHeadlineThree headline={"Personalization"} />
          <CaseCopy
            copy={
              "Leverage segmentation data to offer personalized templates and experiences"
            }
          />
          <br />
          <CaseHeadlineThree headline={"Plan Selection"} />
          <CaseCopy
            copy={
              "Provide clearer communication about trial period and feature limitations"
            }
          />
          <br />
          <CaseHeadlineThree headline={"Persona & Product Markets Fit"} />
          <CaseCopy
            copy={
              "Create a more streamlined experience for personal users while maintaining team functionality"
            }
          />
          <br />
          <CaseHeadlineThree headline={"First Experience"} />{" "}
          <CaseCopy
            copy={
              "First screen is overloaded, Personal users may feel overwhelmed by enterprise-focused features"
            }
          />
          <br />
          <CaseHeadlineThree headline={"Activation"} />{" "}
          <CaseCopy
            copy={"Activation heavily dependent on team participation"}
          />
          <br />
        </Paragraph>
        <Paragraph>
          <CaseSectionHead headline={"Flow"} />{" "}
          <FlowCarousel data={asanaFlow} appname={"Asana"} />{" "}
        </Paragraph>
        <Paragraph>
          <BookAnAudit />
        </Paragraph>
      </Section>
    </Content>
  );
};

export default Content;
