import styled from "@emotion/styled";
import React from "react";
import { Helmet } from "react-helmet";

//Components
import { Colors, Devices } from "../../DesignSystem";

import CaseCopy from "../../Content/Case/CaseCopy";
import CaseCover from "../../Content/Case/CaseCover";
import CaseHeadlineThree from "../../Content/Case/CaseHeadlineThree";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseSublineTwo from "../../Content/Case/CaseSublineTwo";
import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";
import CaseVideo from "../../Content/Case/CaseVideo";

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
  const CaseListItemLink = styled.a`
    position: static;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    color: ${Colors.primaryText.highEmphasis};

    /* Inside Auto Layout */

    font-size: 24px;
    line-height: 160%;
    &:hover {
      color: ${Colors.primaryText.mediumEmphasis};
    }
    &:visited {
      color: ${Colors.primaryText.highEmphasis};
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
        <title>Occhio | Alexandros Shomper</title>
        <description>
          Digital Anthropologist. Experienced Product-, Service & Business
          Designer with demonstrated track record of successfully developing
          meaningful experiences that people love by using emerging technology,
          solid company purpose, and a strong brand to elevate human experiences
          and interactions.
        </description>
      </Helmet>
      <Section>
        <CaseTitleEyebrow text={"Case Study"} />
        <CaseTitle headline={"Occhio Website Relaunch & eCommerce Launch"} />
        <CaseCover imgURL="./img/Occhio/Occhio-Website.png" />
        <CaseSublineTwo
          subline={
            "I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of Occhio."
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
          <CaseSectionHead
            headline={"Occhio's Digital Overhaul: Light Meets Luxury"}
            subline={
              "In 2019, Occhio needed a website relaunch and e-commerce launch for their brand redefinition"
            }
          />
          <CaseCopy
            copy={
              "In 2019, Occhio, a leading luxury interior and lighting brand in Germany, embarked on a brand redefinition and digitization journey."
            }
          />
          <br />
          <CaseCopy
            copy={
              "As part of this initiative, the company needed to relaunch its website and introduce an e-commerce platform. Occhio's reputation for perfection, highest quality, and pure design posed a significant challenge: balancing these high standards with user experience and website performance."
            }
          />
          <br />
          <CaseCopy
            copy={
              "I served as the UX/UI Manager and Product Owner for this project, collaborating with stakeholders including the CEO, CMO, and CTO, and leading a team comprising development, design, CRM, and social media experts."
            }
          />
        </Paragraph>
        <Paragraph>
          <CaseHeadlineThree headline={"Task"} />
          <CaseSectionHead
            headline={
              "Mission Impossible: Perfecting Brand, UX, and Performance"
            }
            subline={
              "Led website and e-commerce relaunch to enhance digital presence and improve product discoverability"
            }
          />
          <CaseCopy
            copy={
              "My primary task was to lead the relaunch of Occhio's website and the launch of its e-commerce platform."
            }
          />
          <br />
          <CaseCopy
            copy={
              "The goals were to enhance the digital brand presence, align with the new brand direction, improve product discoverability, and integrate various products from different tech stacks seamlessly."
            }
          />
          <br />
          <CaseCopy
            copy={
              "Additionally, the website needed to support a broad set of initiatives across the customer journey and cater to Occhio's extensive range of modular and configurable products."
            }
          />
          <br />
        </Paragraph>
        <Paragraph>
          <CaseHeadlineThree headline={"Action"} />
          <CaseSectionHead
            headline={"From Blank Canvas to Digital Masterpiece"}
            subline={
              "Partnered with top agencies, adopted agile methods, conducted research, and redefined Occhio's digital brand experience"
            }
          />
          <CaseCopy
            copy={"To achieve these goals, we took the following steps:"}
          />
          <CaseUnorderedList style={{ listStyleType: "circle" }}>
            <li>
              <b>Research and Persona Development:</b> <br />
              Conducted extensive market and brand equity research, including
              secondary research in Munich stores, speaking directly with
              customers and sales teams. Identified key personas based on Sigma
              Milieus of Social Climbers and the Established, understanding
              their values, needs, and behaviors.
            </li>
            <li>
              <b>User Journey Mapping:</b> <br />
              Visualized and prioritized user needs throughout their journey,
              addressing pain points such as difficulty in imagining products at
              home, getting an overview of available product variants, and fear
              of making wrong decisions.
            </li>
            <li>
              <b>Sitemap and Navigation:</b> <br />
              Developed a comprehensive sitemap to guide user experience, SEO,
              social media strategy, and marketing. Designed navigation that
              catered to different mental models, allowing users to search by
              room, luminaire type, or specific products.
            </li>
            <li>
              <b>Product Detail Page Optimization:</b> <br />
              Initially used lavish renderings to impress users but pivoted to a
              more functional design with a mini-configurator for color and
              size, value proposition, price, and a buy button to enhance
              performance.
            </li>
            <li>
              <b>Interactive Features and AR:</b> <br />
              Implemented interactive components and animations to educate users
              about product features, making the process entertaining and
              informative. Introduced WebAR to help users visualize products in
              their own homes, addressing concerns about fit and placement, and
              reducing fear of making wrong decisions.
            </li>
            <li>
              <b>Design and Development Collaboration:</b>
              <br />
              Partnered with the award-winning Brand Consultancy & Design Agency
              Martin et Karzinski for design and Tech Consultancy & Agency
              Inviqa for development. Adopted an agile product development
              approach to ensure flexibility and responsiveness throughout the
              project.
            </li>
          </CaseUnorderedList>
          <br />
        </Paragraph>
        <Paragraph>
          <CaseHeadlineThree headline={"Results"} />
          <CaseSectionHead
            headline={"A Bright Future: Awards and Engagement Soar"}
            subline={
              "Created an engaging, stunning website, boosting conversion rates, engagement, visitors, and newsletter sign-ups, winning awards"
            }
          />
          <CaseCopy
            copy={
              "The relaunch resulted in a highly engaging and visually appealing website that seamlessly integrated Occhio's new brand direction with an enhanced user experience."
            }
          />
          <br />
          <CaseCopy
            copy={
              "The new e-commerce platform significantly improved product discoverability and consultancy, leading to:"
            }
          />
          <CaseSublineTwo subline={"Awards"} />
          <CaseUnorderedList>
            <li>
              🏅{" "}
              <CaseListItemLink href="https://www.horizont.net/schweiz/nachrichten/annual-multimedia-award-martin-et-karczinski-holt-gold-und-zweimal-silber-178283">
                Gold, Annual Multimedia Award 2020
              </CaseListItemLink>
            </li>
            <li>
              🏅{" "}
              <CaseListItemLink href="https://www.acquia.com/fr/node/114276">
                Winner, Splash Award 2020
              </CaseListItemLink>
            </li>
          </CaseUnorderedList>
          <br />
          <br />
          <CaseSublineTwo subline={"KPI (Numbers confidential)"} />
          <CaseUnorderedList>
            <li>
              <span style={greenArrowStyle}> ↑ </span>
              Conversion Rate
            </li>
            <li>
              <span style={greenArrowStyle}> ↑ </span>
              User Engagement
            </li>
            <li>
              <span style={greenArrowStyle}> ↑ </span>
              Visitors
            </li>
            <li>
              <span style={greenArrowStyle}> ↑ </span>
              Newsletter Sign-Ups
            </li>
          </CaseUnorderedList>
          <br />
          <br />
          {/*<CaseImage imgURL="./img/BlackQuoteTextBackgroundImage/GradBGTiny.png" />*/}
          <CaseVideo
            mp4="https://firebasestorage.googleapis.com/v0/b/alexandrosshomper-11a20.appspot.com/o/Occhio%2FWebsite%2FOcchioWebsite.mp4?alt=media&token=729e66b2-0dbf-48b0-8550-0f37ff183980"
            ogg="https://firebasestorage.googleapis.com/v0/b/alexandrosshomper-11a20.appspot.com/o/Occhio%2FWebsite%2FOcchioWebsite.ogv?alt=media&token=7cee14a3-2fa4-4798-a739-7557828ba986"
            img="https://firebasestorage.googleapis.com/v0/b/alexandrosshomper-11a20.appspot.com/o/Occhio%2FWebsite%2F%20OcchioWebsite.png?alt=media&token=c9328dce-65ad-445a-98ad-ce2201060ae1"
            url="https://vimeo.com/517036386"
          />
        </Paragraph>
      </Section>
    </Content>
  );
};

export default Content;
