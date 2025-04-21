import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useInView } from "react-intersection-observer";

// DESIGN SYSTEM
import { Colors, Devices } from "../../DesignSystem";
// CASE STUDY SLIDER
import CaseStudySlider from "../../CaseStudySlider/CaseStudySlider";
import asanaCaseStudy from "../../../data/casestudies/asanaCaseStudy.json";

//COMPONENTS
import CaseCopy from "../../Content/Case/CaseCopy";
import CaseCover from "../../Content/Case/CaseCover";
import CaseHeadlineThree from "../../Content/Case/CaseHeadlineThree";
import CaseImage from "../../Content/Case/CaseImage";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseSublineTwo from "../../Content/Case/CaseSublineTwo";
import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";

import CaseHeadlineTwo from "../../Content/Case/CaseHeadlineTwo";
import CaseSubline from "../../Content/Case/CaseSubline";
import CaseCard from "../../Content/CaseCard/CaseCard";
import Drawer from "../../Content/Drawer/Drawer";

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

const Content = (props) => {
  const galleryItems = [
    {
      id: 1,
      imgURL: "./img/Knauf/myKnaufProjectJourney.jpg",
      imgMobileURL: "./img/Occhio/Personae-mobile.png",
      headline: "Detailing the construction project journey",
      copy: "We went back to the drawing board. A journey that has been created at the start of the projects, when we still aimed for separate offerings per customer type. This is not a customer journey. It covers the journey of all our customer types along the lifecycle of a construction project. Revising this journey helped us discover close interfaces between the apps, but also long gaps that could be filled. Also we could discover important handover moments between the customer types, but also where customer types repeatedly have to check into the project again.",
    },
    {
      id: 2,
      imgURL: "./img/Knauf/myKnaufProductsMicroServices.jpg",
      imgMobileURL: "./img/Occhio/CustomerJourney-mobile.png",
      headline: "Investigating the interfaces of the apps",
      copy: "With that knowledge, we are able to at our apps with new eyes. What can be combined? What can be broken up? It is a difficult but also exciting opportunity to revise two years of work.",
    },
  ];
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

  const CaseCardGrid = styled.section`
    margin: 0px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 24px;
    margin-bottom: calc(-1 * var(--gap));

    & > * {
      margin-left: var(--gap);
      margin-bottom: var(--gap);
    }

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
        <CaseCover imgURL="./img/Knauf/OrderOverview.png" />
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
          <CaseSectionHead headline={"Audit Walkthrough"} />
          <CaseStudySlider slides={asanaCaseStudy} />
        </Paragraph>
        <Paragraph>
          <CaseSectionHead
            headline={"Key Takeaways"}
            subline={"Suiting the diverse needs of construction customer types"}
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
          <CaseHeadlineThree headline={"Segmentation & Personalization"} />
          <CaseSublineTwo
            subline={
              "Complex but thorough segmentation process during onboarding without much personalization payoff"
            }
          />
          <br />
          <CaseHeadlineThree headline={"Plan Selection"} />
          <CaseSublineTwo
            subline={
              "Critical plan selection has been removed with intransparent freemium"
            }
          />
          <br />
          <CaseHeadlineThree headline={"First Experience"} />{" "}
          <CaseSublineTwo
            subline={
              "First screen is overloaded, Personal users may feel overwhelmed by enterprise-focused features"
            }
          />
          <br />
          <CaseHeadlineThree headline={"Activation"} />{" "}
          <CaseSublineTwo
            subline={"Activation heavily dependent on team participation"}
          />
          <br />
        </Paragraph>
        <Paragraph>
          <CaseSectionHead
            headline={"Recommendations & Experiments"}
            subline={"Suiting the diverse needs of construction customer types"}
          />

          <CaseHeadlineThree
            headline={"Experiment 1"}
            color1="#00b8d4"
            color2="#62ebff"
          />
          <CaseUnorderedList
            style={{ marginBottom: "24px", listStyleType: "circle" }}
          >
            <li>
              <b>Title:</b> Users experience inefficiencies when managing
              projects across multiple applications or services, each with its
              own interface and settings.
            </li>
            <li>
              <b>Hypothesis:</b> Users involved in construction projects often
              struggle with information silos, inefficient handoffs between
              different phases and customer types, and a lack of a centralized
              hub for project information.
            </li>
            <li>
              <b>Measurement:</b> Users involved in construction projects often
              struggle with information silos, inefficient handoffs between
              different phases and customer types, and a lack of a centralized
              hub for project information.
            </li>
            <li>
              <b>Experiment Design:</b> Users involved in construction projects
              often struggle with information silos, inefficient handoffs
              between different phases and customer types, and a lack of a
              centralized hub for project information.
            </li>
          </CaseUnorderedList>
          <Drawer items={galleryItems} />
        </Paragraph>

        <Paragraph>
          <CaseSectionHead headline={"Similar Case Studies"} />
          <CaseCardGrid>
            <FadeInWhenVisible>
              <CaseCard
                eyebrow="Case Study"
                eyebrowColor2="#231768"
                eyebrowColor1="#10d5f5"
                headline="Knauf Digital Transformation & Business Design"
                copy="Knauf want's to explore the opportunities of digitizing the construction business by rapidly developing validated product & business ideas"
                imgURL="./img/Knauf/CoverKnaufTransformation.png"
                link="/knauf-explorations"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <CaseCard
                eyebrow="Case Study"
                eyebrowColor2="#231768"
                eyebrowColor1="#10d5f5"
                headline="myKnauf: Building a global construction app platform"
                copy="Knauf want's to explore the opportunities of digitizing the construction business by rapidly developing validated product & business ideas"
                imgURL="./img/Knauf/CoverMyKnauf.png"
                link="/myKnauf"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <CaseCard
                eyebrow="Deep Dive"
                eyebrowColor2="#231768"
                eyebrowColor1="#10d5f5"
                headline="Product Analytics: How to analyze and define retention & engagement metrics for an app platform"
                copy="Knauf want's to explore the opportunities of digitizing the construction business by rapidly developing validated product & business ideas"
                imgURL="./img/Knauf/CoverProductAnalytics.png"
                comingSoon="true"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <CaseCard
                eyebrow="Deep Dive"
                eyebrowColor2="#231768"
                eyebrowColor1="#10d5f5"
                headline="User Acquisition: How to develop a marketing messaging framework for an app platform"
                copy="Knauf want's to explore the opportunities of digitizing the construction business by rapidly developing validated product & business ideas"
                imgURL="./img/Knauf/CoverUserAcquisition.png"
                comingSoon="true"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <CaseCard
                eyebrow="Deep Dive"
                eyebrowColor2="#231768"
                eyebrowColor1="#10d5f5"
                headline="Signups: How to increase signups with user psychology and data analysis"
                copy="Increasing signups for Knauf Account. Reducing signup friction by applying user psychology on registration flows."
                imgURL="./img/Knauf/CoverSignup.png"
                link="/knauf-account"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <CaseCard
                eyebrow="Deep Dive"
                eyebrowColor2="#231768"
                eyebrowColor1="#10d5f5"
                headline="User Retention: How to increase user engagement & activation by analyzing featuer adoption"
                copy="Increasing user engagement & activation for Knauf Digital's app. An unexpected finding: a neglected feature used by 7% of users, accounting for 20% of total traffic."
                imgURL="./img/Knauf/CoverUserRetention.png"
                link="/knauf-orderoverview"
              />
            </FadeInWhenVisible>
          </CaseCardGrid>
        </Paragraph>
      </Section>
    </Content>
  );
};

export default Content;
