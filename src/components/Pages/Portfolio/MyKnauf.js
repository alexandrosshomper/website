import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useInView } from "react-intersection-observer";

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

import CaseHeadlineTwo from "../../Content/Case/CaseHeadlineTwo";
import CaseSubline from "../../Content/Case/CaseSubline";
import CaseCard from "../../Content/CaseCard/CaseCard";

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
        <CaseTitle
          headline={"myKnauf: Building a global construction app platform"}
        />
        <CaseCover imgURL="./img/Knauf/OrderOverview.png" />
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
          <CaseSubline
            subline={
              "Change of direction: From a products to a platform strategy"
            }
          />
          <CaseCopy
            copy={
              "After our explorations we continued with the development of several applications, each designed to address key challenges faced by specific customer types at construction sites, including planners, dealers, and applicators."
            }
          />
          <CaseCopy
            copy={
              "We believed that by tailoring our apps to these customer types, we would be able to provide the most effective solutions."
            }
          />
          <CaseCopy
            copy={
              "However, as we delved deeper and gathered more user insights, we found that the situation was not as straightforward as we had initially perceived. The lines separating our customer types were blurrier than we had assumed, and we discovered that our solutions could be useful across a broader spectrum of customers. Not only could these apps provide value to multiple customer types, but they could also create synergies when used in conjunction."
            }
          />
          <CaseImage imgURL="./img/Knauf/ProblemBasedSolutions.png" size="M" />

          <CaseCopy
            copy={
              "An example of this was the role of General Contractors, who oversee the entire construction journey from start to finish. Their role is comprehensive and involves interacting with almost all customer types. This meant that our apps, initially designed for specific customer types, were equally applicable and beneficial to them."
            }
          />
          <CaseCopy
            copy={
              "It was clear we had to rethink our strategy. Our strategy needed to be more fluid, encompassing the diverse needs of the construction site participants and ensuring that our apps could be effectively used by different customer types. This was a significant learning for us and provided a valuable direction."
            }
          />
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
          <CaseCopy
            copy={
              "To create a platform strategy that would allow us to offer our apps to multiple customer types and generate synergies between the single apps. This would involve reshaping our apps offering to suit the diverse needs of construction site participants and ensure that our apps could be effectively used by different customer types."
            }
          />
          <CaseSublineTwo subline={"Problem"} />
          <CaseCopy
            copy={
              "How can we reshape our apps offering to suite multiple customer types and generate synergies between the single apps?"
            }
          />
        </Paragraph>
        <Paragraph>
          <CaseHeadlineThree
            headline={"Action"}
            color1="#00b8d4"
            color2="#62ebff"
          />
          <CaseSubline subline={"User Research"} />
          <CaseHeadlineTwo
            headline={"Revisiting Interviews and talking to users"}
          />
          <CaseCopy
            copy={
              "Over the years we gathered a vast repository of research and interviews for the different customer types and products. With this new objective, we were able to look at the bigger picture. Discover bigger problems and opportunities."
            }
          />
          <CaseCopy copy={"Two Pattern occurred:"} />
          <CaseUnorderedList
            style={{ marginBottom: "24px", listStyleType: "circle" }}
          >
            <li>
              <b>Workspace:</b> Users experience inefficiencies when managing
              projects across multiple applications or services, each with its
              own interface and settings.
            </li>
            <li>
              <b>Team:</b> Users involved in construction projects often
              struggle with information silos, inefficient handoffs between
              different phases and customer types, and a lack of a centralized
              hub for project information.
            </li>
          </CaseUnorderedList>
          <br />
          <br />
          <br />
          <CaseHeadlineTwo
            headline={"Detailing the construction project journey"}
          />
          <CaseCopy
            copy={
              "We went back to the drawing board. A journey that has been created at the start of the projects, when we still aimed for separate offerings per customer type."
            }
          />
          <CaseCopy
            copy={
              "This is not a customer journey. It covers the journey of all our customer types along the lifecycle of a construction project."
            }
          />
          <CaseImage imgURL="./img/Knauf/myKnaufProjectJourney.jpg" size="M" />
          <CaseCopy
            copy={
              "Revising this journey helped us discover close interfaces between the apps, but also long gaps that could be filled. Also we could discover important handover moments between the customer types, but also where customer types repeatedly have to check into the project again."
            }
          />
          <br />
          <br />
          <br />
          <CaseHeadlineTwo
            headline={"Investigating the interfaces of the apps"}
          />
          <CaseCopy
            copy={
              "With that knowledge, we are able to at our apps with new eyes. What can be combined? What can be broken up? "
            }
          />
          <CaseCopy
            copy={
              "It is a difficult but also exciting opportunity to revise two years of work."
            }
          />
          <CaseImage
            imgURL="./img/Knauf/myKnaufProductsMicroServices.jpg"
            size="M"
          />{" "}
          <br />
          <br />
          <br />
          {/*<CaseSubline subline={"2. Concept"} />
          <CaseHeadlineTwo headline={"Creating a new platform strategy"} />
          <CaseImage
            imgURL="./img/Knauf/ChangeOfProductStrategy.png"
            size="M"
          />
          <CaseSublineTwo subline={"Creating a new platform strategy"} />
          <CaseHeadlineTwo headline={"3. Validation"} />
          <CaseHeadlineTwo headline={"3. Design"} />
          <CaseCopy copy={"."} />
          */}
        </Paragraph>
        {/*<Paragraph>
          <CaseHeadlineThree headline={"Results"} />
          <CaseCopy copy={"."} />
          <CaseSublineTwo subline={"Conclusion"} />
          <CaseCopy copy={"."} />
          </Paragraph>*/}
        <Paragraph>
          <CaseSectionHead headline={"Other Projects"} />
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
