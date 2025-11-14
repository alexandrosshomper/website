import React from "react";

import createCasePage from "../CaseStudies/createCasePage";
import {
  ArticleSection,
  ArticleSectionContent,
  Colors,
} from "../../DesignSystem";
import CaseCopy from "../../Content/Case/CaseCopy";
import CaseCover from "../../Content/Case/CaseCover";
import CaseHeadlineThree from "../../Content/Case/CaseHeadlineThree";
import CaseImage from "../../Content/Case/CaseImage";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseSublineTwo from "../../Content/Case/CaseSublineTwo";
import Drawer from "../../Content/Drawer/Drawer";

const metaTitle =
  "myKnauf: Building a global construction app platform | Alexandros Shomper";

const metaDescription =
  "Digital Anthropologist. Experienced Product-, Service & Business Designer with demonstrated track record of successfully developing meaningful experiences that people love by using emerging technology, solid company purpose, and a strong brand to elevate human experiences and interactions.";

const hero = () => <CaseCover imgURL="./img/Knauf/OrderOverview.png" />;

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

const greenArrowStyle = {
  color: Colors.green,
  fontWeight: "bold",
};

const renderContent = () => (
  <>
    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          headline="A globally successful company needs to find new ways to compete by fulfilling a digital transformation and applying customer centricity. The best way to benefit from a digital transformation of an industry is to lead it. "
          subline="But what does this mean for Knauf and the Construction Industry? And how could I help?"
        />
        <CaseSublineTwo subline="I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of Knauf." />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseHeadlineThree headline="Situation" />
        <CaseSectionHead
          headline="Change of direction"
          subline="From a products to a platform strategy"
        />
        <CaseCopy copy="After our explorations we continued with the development of several applications, each designed to address key challenges faced by specific customer types at construction sites, including planners, dealers, and applicators." />
        <CaseCopy copy="We believed that by tailoring our apps to these customer types, we would be able to provide the most effective solutions." />
        <CaseCopy copy="However, as we delved deeper and gathered more user insights, we found that the situation was not as straightforward as we had initially perceived. The lines separating our customer types were blurrier than we had assumed, and we discovered that our solutions could be useful across a broader spectrum of customers. Not only could these apps provide value to multiple customer types, but they could also create synergies when used in conjunction." />
        <CaseImage imgURL="./img/Knauf/ProblemBasedSolutions.png" size="M" />
        <CaseCopy copy="An example of this was the role of General Contractors, who oversee the entire construction journey from start to finish. Their role is comprehensive and involves interacting with almost all customer types. This meant that our apps, initially designed for specific customer types, were equally applicable and beneficial to them." />
        <CaseCopy copy="It was clear we had to rethink our strategy. Our strategy needed to be more fluid, encompassing the diverse needs of the construction site participants and ensuring that our apps could be effectively used by different customer types. This was a significant learning for us and provided a valuable direction." />
        <ul>
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
        </ul>
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseHeadlineThree headline="Task" />
        <CaseSectionHead
          headline="Shaping our apps offering"
          subline="Suiting the diverse needs of construction customer types"
        />
        <CaseCopy copy="To create a platform strategy that would allow us to offer our apps to multiple customer types and generate synergies between the single apps. This would involve reshaping our apps offering to suit the diverse needs of construction site participants and ensure that our apps could be effectively used by different customer types." />
        <CaseSublineTwo subline="Problem" />
        <CaseCopy copy="How can we reshape our apps offering to suite multiple customer types and generate synergies between the single apps?" />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseHeadlineThree
          headline="Action"
          color1="#00b8d4"
          color2="#62ebff"
        />
        <CaseSectionHead
          headline="Revisiting Interviews and talking to users"
          subline="User Research"
        />
        <CaseCopy copy="Over the years we gathered a vast repository of research and interviews for the different customer types and products. With this new objective, we were able to look at the bigger picture. Discover bigger problems and opportunities." />
      </ArticleSectionContent>
      <ArticleSectionContent>
        <Drawer items={galleryItems} />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseCopy copy="Two Patterns occurred:" />
        <ul style={{ listStyleType: "circle" }}>
          <li>
            <b>Workspace:</b> Users experience inefficiencies when managing
            projects across multiple applications or services, each with its own
            interface and settings.
          </li>
          <li>
            <b>Team:</b> Users involved in construction projects often struggle
            with information silos, inefficient handoffs between different
            phases and customer types, and a lack of a centralized hub for
            project information.
          </li>
        </ul>
      </ArticleSectionContent>
    </ArticleSection>
  </>
);

const MyKnauf = createCasePage({
  metaTitle,
  metaDescription,
  eyebrow: "Case Study",
  eyebrowColor1: "#00b8d4",
  eyebrowColor2: "#62ebff",
  title: "myKnauf: Building a global construction app platform",
  hero,
  renderContent,
});

export default MyKnauf;
