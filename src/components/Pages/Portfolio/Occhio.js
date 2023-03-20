import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Components
import { Devices, Colors } from "../../DesignSystem";
import SectionHead from "../../Content/Section/SectionHead";

import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseHeadlineThree from "../../Content/Case/CaseHeadlineThree";
import CaseSublineTwo from "../../Content/Case/CaseSublineTwo";
import CaseCopy from "../../Content/Case/CaseCopy";
import CaseVideo from "../../Content/Case/CaseVideo";
import CaseCover from "../../Content/Case/CaseCover";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";
import CaseTitle from "../../Content/Case/CaseTitle";

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            staggerChildren: 0.3,
          },
        },
        hidden: {
          opacity: 0,
          scale: 0.8,
          y: "+25%",
        },
      }}
    >
      {children}
    </motion.div>
  );
}

function MoveUpWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.6 }}
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
        hidden: {
          opacity: 0,
          scale: 0.8,
          y: "+100%",
          transition: {
            when: "afterChildren",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

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
        <CaseSectionHead
          headline="Summary"
          subline="Occhio is one of the most innovative interior companies in the world and also one of the most successful luxury brands of Germany. 
In the course of the brand redefinition and digitization Alexandros led the relaunch of the website and launch of the e-commerce in 2019."
        />
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
          <CaseHeadlineThree headline={"Problem"} />
          <CaseSublineTwo subline={"Brand vs User Experience vs Performance"} />
          <CaseCopy
            copy={
              "Occhio stands for perfection, highest quality, and pure design. Occhio also believes that light-quality is living-quality. That are high standards."
            }
          />
          <br />
          <CaseCopy
            copy={
              "The main challenge was finding perfect balance between Brand, User Experience, and Performance. Combining the pursuit of perfection with agile product development methods. And in the end, presenting the medium of light and its effect on living-quality."
            }
          />
          <br />
          <CaseCopy
            copy={
              "Also, the website had to fit in and augment a new brand direction of Occhio and it's whole customer experience. Luckily Alexandros was part of a broad set of initiatives on the customer journey. "
            }
          />
          <br />
          <CaseCopy
            copy={
              "Occhio's product range consists of several modular, configurable product systems. Counting for effectively several thousands of products. Which makes product discoverability but also product consultancy a challenge."
            }
          />
          <br />
          <CaseCopy
            copy={
              "The digital ecosystem of Occhio consisted of several products of a variety of heritage and tech stacks. Making an integration or connection into the new website real fun for devs."
            }
          />
        </Paragraph>
        <Paragraph>
          <CaseHeadlineThree headline={"Solution"} />
          <CaseSublineTwo subline={"New Brand. New Direction. New Website."} />
          <CaseCopy
            copy={
              "The brand re-definition, the digitization initiative, and the technical situation. It was clear. Occhio needed a complete relaunch of the website."
            }
          />
          <br />
          <CaseCopy
            copy={
              "In order to not only re-define the brand of Occhio, but also for the first time actually define the digital brand of Occhio, we needed a blank canvas to start from, and free us from all that has already been done or defined."
            }
          />
          <br />
          <CaseCopy
            copy={
              "For the Design we cooperated with the award-winning Brand Consultancy & Design Agency Martin et Karzinski. For the Development we cooperated with the Tech Consultancy & Agency Inviqa. In close collaboration and with an agile method, we took on the challenge."
            }
          />
          <br />
          <CaseCopy
            copy={
              "We already had some quantitative data from a market-research we did some months before. Now we needed to gather qualitative data, and validate our hypotheses. With that setup, we kicked it off in a  workshop to discover our goals, customers personae, the journey, and the value proposition."
            }
          />
        </Paragraph>
        <Paragraph>
          <CaseHeadlineThree headline={"Results"} />
          <CaseCopy
            copy={
              "The result was a distinct, exciting, and interactive brand experience and the intuitive structure from inspiration, over configuration, to purchase."
            }
          />
          <br />
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
