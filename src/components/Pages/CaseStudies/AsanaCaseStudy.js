import React from "react";

import createCasePage from "./createCasePage";
import CaseStudySlider from "../../CaseStudySlider/CaseStudySlider";
import asanaCaseStudy from "../../../data/casestudies/asanaCaseStudy.json";

import CaseImage from "../../Content/Case/CaseImage";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import FlowCarousel from "../../Content/FlowCarousel/FlowCarousel";
import BookAnAudit from "../../LeadGen/BookAnAudit";

import asanaFlow from "../../../data/flows/asana.json";
import { Colors, ArticleSection } from "../../DesignSystem";

const metaTitle =
  "Asana Case Study – Onboarding and Activation | Alexandros Shomper";

const metaDescription =
  "Digital Anthropologist. Experienced Product-, Service & Business Designer with demonstrated track record of successfully developing meaningful experiences that people love by using emerging technology, solid company purpose, and a strong brand to elevate human experiences and interactions.";

const greenArrowStyle = {
  color: Colors.green,
  fontWeight: "bold",
};

const renderContent = () => (
  <>
    <ArticleSection>
      <CaseImage imgURL="/img/case_studies/asana/Cover@2x.png" size="M" />
      <p>
        In this case study we’ll take a look at asana’s onboarding and activation
        flow.
      </p>
      <p>
        While we’ve identified two use cases (Personal Task Management and Team
        Collaboration), the case study reveals a strong bias towards the team use
        case, occasionally at the expense of individual users.
      </p>
      <p>
        Asana has clearly positioned itself towards enterprise and team
        collaboration, which is reflected throughout their user onboarding
        journey. This strategic focus impacts everything from landing page
        messaging, signup, to activation metrics.
      </p>
      <p>Let’s take a look.</p>
    </ArticleSection>

    <ArticleSection $width="wide" $disableTypography>
      <CaseSectionHead
        headline="Audit Walkthrough"
        subline="A step-by-step look at the onboarding journey⁠"
      />
      <CaseStudySlider slides={asanaCaseStudy} />
    </ArticleSection>

    <ArticleSection>
      <CaseSectionHead
        headline="Key Takeaways"
        subline="While Asana offers a strong team-oriented setup with thorough segmentation, it provides little effort payoff for the user and misses personalization opportunities.⁠"
      />
      <ul>
        <li>Strong team-oriented setup flow with emphasis on collaboration features</li>
        <li>Complex but thorough segmentation process during onboarding</li>
        <li>Activation heavily dependent on team participation</li>
        <li>Personal users may feel overwhelmed by enterprise-focused features</li>
      </ul>
    </ArticleSection>

    <ArticleSection>
      <CaseSectionHead
        headline="Onboarding Flow Evaluation"
        subline="The onboarding process shows both strengths and areas for improvement"
      />
      <h3>Strengths</h3>
      <ul>
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
      </ul>

      <h3>Areas for Improvement</h3>
      <ul>
        <li>
          <span style={greenArrowStyle}> 👎 </span>
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
      </ul>
    </ArticleSection>

    <ArticleSection>
      <CaseSectionHead
        headline="Recommendations"
        subline="Based on the audit findings, several opportunities for improvement exist"
      />
      <h3>Landingpage</h3>
      <p>
        Asana is a versatile project management tool that does not want to be
        put in one specific use.
      </p>
      <p>
        On the website homepage it positions itself as a tool to connect any type
        of work with each other. This positioning is mainly focused on the buyer,
        the exec. They make the decision to purchase Asana on a big plan. For the
        actual users of Asana this positioning is very vague. Common for products
        with versatile use cases and aiming for enterprise customers.
      </p>
      <p>
        But the exec comes in very late in the funnel. Most likely a low-mid
        level employee is the driving force, researching tools, advocating to
        their managers, etc.
      </p>
      <p>
        Which is why Asana provides many landing pages and positionings for the
        different functions in a corporate. Marketing, Sales, Dev, HR, etc. which
        they can now afford compared to when they started — because
        multi-positioning &amp; GTM is complex and costly.
      </p>
      <CaseImage
        imgURL="/img/case_studies/asana/Fletch-horizontal-positioning-landingpage.png"
        size="S"
      />
      <p>So, what could Asana do better?</p>
      <p>
        On the design side, the above the fold is very monotone. The CTA kind of
        blends in with the design. If everything has the same color, nothing is
        emphasized.
      </p>
      <p>
        I wonder about the engagement and success KPI for the chatbot, as it is
        very distracting and overlapping.
      </p>
      <p>
        But Asana could also leverage its multi-positioning. It could use the
        landing page as a source for personalizing the onboarding flow. For
        example reiterating the USP for marketing on the first signup screen when
        the user came from the marketing landing page.
      </p>

      <h3>Segmentation &amp; Profiling</h3>
      <p>Move certain profiling questions to post-commitment phase.</p>

      <h3>Personalization</h3>
      <p>Leverage segmentation data to offer personalized templates and experiences.</p>

      <h3>Plan Selection</h3>
      <p>Provide clearer communication about trial period and feature limitations.</p>

      <h3>Persona &amp; Product Market Fit</h3>
      <p>
        Create a more streamlined experience for personal users while maintaining
        team functionality.
      </p>

      <h3>First Experience</h3>
      <p>First screen is overloaded, personal users may feel overwhelmed by enterprise-focused features.</p>

      <h3>Activation</h3>
      <p>Activation heavily dependent on team participation.</p>
    </ArticleSection>

    <ArticleSection $width="wide" $disableTypography>
      <CaseSectionHead headline="Flow" />
      <FlowCarousel data={asanaFlow} appname="Asana" />
    </ArticleSection>

    <ArticleSection $width="wide">
      <BookAnAudit />
    </ArticleSection>
  </>
);

const AsanaCaseStudy = createCasePage({
  metaTitle,
  metaDescription,
  eyebrow: "Case Study",
  eyebrowColor1: "#00b8d4",
  eyebrowColor2: "#62ebff",
  title: "Asana – Onboarding and Activation",
  subline:
    "How positioning for teams & enterprise impacts your segmentation, setup, and plan selection",
  renderContent,
});

export default AsanaCaseStudy;
