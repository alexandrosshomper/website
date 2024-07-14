import styled from "@emotion/styled";
import React from "react";
import { Helmet } from "react-helmet";

//Components
import { Colors, Devices } from "../../DesignSystem";

import CaseCopy from "../../Content/Case/CaseCopy";
import CaseCover from "../../Content/Case/CaseCover";
import CaseHeadlineThree from "../../Content/Case/CaseHeadlineThree";
import CaseImage from "../../Content/Case/CaseImage";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseSublineTwo from "../../Content/Case/CaseSublineTwo";
import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";

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
        <title>Knauf Explorations | Alexandros Shomper</title>
        <description>
          Digital Anthropologist. Experienced Product-, Service & Business
          Designer with demonstrated track record of successfully developing
          meaningful experiences that people love by using emerging technology,
          solid company purpose, and a strong brand to elevate human experiences
          and interactions.
        </description>
      </Helmet>
      <Section>
        <CaseTitleEyebrow
          text={"Case Study"}
          color1="#00b8d4"
          color2="#62ebff"
        />
        <CaseTitle headline={"Knauf Explorations"} />
        <CaseCover imgURL="./img/Knauf/KnaufExplorations.png" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CaseSectionHead
          headline="A globally successful company needs to find new ways to compete by fulfilling a digital transformation and applying customer centricity. The best way to benefit from a digital transformation of an industry is to lead it. "
          subline="But what does this mean for Knauf and the Construction Industry? And how could I help?"
        />
        <CaseSublineTwo
          subline={
            "I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of Knauf."
          }
        />
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
          <CaseHeadlineThree headline={"Situation"} />
          <CaseSectionHead headline={"Sleeping Giants"} />
          <CaseCopy
            copy={
              "The construction industry is no exception of the German Mittelstand. It’s decentralized. Has no applied standards across markets. Has a heterogeneous tech stack across markets. Heterogeneous customer types across markets. Mainly offline. Bad data quality."
            }
          />
          <CaseImage imgURL="./img/Knauf/CorporateDigitalisation.png" />
          <br />
          <CaseCopy
            copy={
              "To put it short… the construction industry is in the 90s (and not in a cool way)."
            }
          />
          <br />
          <CaseSublineTwo subline={"Knauf Digital: Hello World"} />
          <CaseCopy
            copy={
              "Knauf decided to change the status quo. In late 2019 I was hired by Knauf as one of the first Employees of their new Digital Innovation Hub: Knauf Digital."
            }
          />
          <br />
          <CaseCopy
            copy={
              "A potpourri of consultants, field experts, and industry specialists. Stacked together in a satellite far away from the head quarters, so we would not be tied up in the old corporate structures and dynamics."
            }
          />
          <br />
          <CaseUnorderedList>
            <li>
              <span style={greenArrowStyle}>👎 </span>
              No Data about customers
            </li>
            <li>
              <span style={greenArrowStyle}> 👎 </span>
              No Data interfaces available
            </li>
            <li>
              <span style={greenArrowStyle}> 👎 </span>
              Multi national project
            </li>
          </CaseUnorderedList>
        </Paragraph>
        <Paragraph>
          <CaseHeadlineThree headline={"Task"} />
          <CaseSectionHead headline={"Digital Transformation"} />
          <CaseCopy
            copy={
              "Secure Knaufs success and lead position by helping Knauf becoming the driving force of the digital transformation in the global construction industry."
            }
          />
          <br />
          <CaseSublineTwo subline={"Digitizing"} />
          <CaseCopy
            copy={
              "How can be get more profitable with innovative, customer centric optimizations of the current business."
            }
          />
          <br />
          <CaseSublineTwo subline={"Digitalization"} />
          <CaseCopy
            copy={
              "How can we generate new business with innovative, customer centric products and services."
            }
          />
        </Paragraph>
        <Paragraph>
          <CaseHeadlineThree headline={"Action"} />
          <CaseSectionHead headline={"Launch to learn."} />
          <CaseSublineTwo
            subline={
              "Using Silicon Valley’s secrets to disrupt the construction industry"
            }
          />
          <CaseCopy
            copy={
              "Consolidate customer needs and create a roadmap of validated customer centric digital solutions that can be scaled globally."
            }
          />
          <CaseImage imgURL="./img/Knauf/ServiceDesign.png" />

          <br />

          <br />
          <CaseCopy
            copy={
              "Traditional Business Strategies are no longer relevant in the new economy. Top performing, innovative companies are using new and efficient methods to understand customers, build innovative products & services, and to grow their business – and so did we."
            }
          />
          <br />
          <CaseSublineTwo subline={"Problem"} />
          <CaseCopy
            copy={
              "Understand Customer Needs & Pains with Design Thinking & Data Analysis"
            }
          />
          <br />
          <CaseSublineTwo subline={"Solution"} />
          <CaseCopy copy={"Build better Products with Design Sprint"} />
          <br />
          <CaseSublineTwo subline={"Scale"} />
          <CaseCopy copy={"Validate Business with Lean Startup"} />
        </Paragraph>
        <Paragraph>
          <CaseHeadlineThree headline={"Results"} />
          <CaseSectionHead headline={"The Roadmap"} />
          <CaseCopy
            copy={
              "At the end of this initiative we had a 5 years global roadmap for 3 customer types, validated in 4 key markets."
            }
          />
          <br />
          <CaseSublineTwo subline={"KPI (Numbers confidential)"} />
          <CaseUnorderedList>
            <li>
              <span style={greenArrowStyle}>👍 </span>
              10 Desireable Concepts
            </li>
            <li>
              <span style={greenArrowStyle}> 👍 </span>3 Viable Product
              Opportunities
            </li>
            <li>
              <span style={greenArrowStyle}> 👍 </span>5 Year Roadmap
            </li>
          </CaseUnorderedList>
          <br />
          <br />
          <CaseSublineTwo subline={"Facit"} />
          <CaseCopy
            copy={
              "Traditional strategies are no longer relevant in the new economy. Top performing companies are using new and efficient methods to maximize growth while solving actual problems of their customers."
            }
          />
          <br />
          <CaseCopy
            copy={
              "You don’t have to look far to find a problem needing a solution – especially in the old economy."
            }
          />
          <br />
          <CaseCopy
            copy={
              "Try starting the search for your must-have idea by looking at the whole picture and boil down to the one problem that will solve the biggest pain, and will make solving all other problems easier."
            }
          />
          <br />
          <CaseCopy
            copy={
              "Once you find your must-have product or service, it might be tempting to launch it on a global scale. But going too big too soon, you run the risk of spreading yourself too thin and ending up stretched across several markets."
            }
          />
        </Paragraph>
      </Section>
    </Content>
  );
};

export default Content;
