import React from "react";

import createCasePage from "../CaseStudies/createCasePage";
import {
  ArticleSection,
  ArticleSectionContent,
  Colors,
} from "../../DesignSystem";
import CaseCopy from "../../Content/Case/CaseCopy";
import CaseCover from "../../Content/Case/CaseCover";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseCitations from "../../Content/Case/CaseCitations";
import Drawer from "../../Content/Drawer/Drawer";
import CaseSubline from "../../Content/Case/CaseSubline";
import CaseSublineTwo from "../../Content/Case/CaseSublineTwo";
import CaseImage from "../../Content/Case/CaseImage";
import CaseImageBlank from "../../Content/Case/CaseImageBlank";
import CaseHighlight from "../../Content/Case/CaseHighlight";
import { ImpactBoxGrid } from "../../Content/Case/ImpactBox";
import CaseVideo from "../../Content/Case/CaseVideo";
import Article from "../../Content/Article/Article";

const metaTitle = "Knauf Material Calculator | Alexandros Shomper";

const metaDescription =
  "Digital Anthropologist. Experienced Product-, Service & Business Designer with demonstrated track record of successfully developing meaningful experiences that people love by using emerging technology, solid company purpose, and a strong brand to elevate human experiences and interactions.";

const hero = () => (
  <CaseCover imgURL="/img/portfolio/knauf-material-calculator/cover.png" />
);

const galleryItemsDiscover = [
  {
    id: 1,
    imgURL:
      "/img/portfolio/knauf-material-calculator/detail-field-research-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-material-calculator/detail-field-research-mobile.png",
    headline: "Foundational Research",
    copy: "I spend the whole year of 2020 to do nothing else but research. This is an excerpt from one of our Interviews I made. There was no clear understanding of our customers in the company. Their daily tasks, their problems, their needs.",
  },
  {
    id: 2,
    imgURL:
      "/img/portfolio/knauf-material-calculator/detail-project-journey-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-material-calculator/detail-project-journey-mobile.png",
    headline: "Construction Project Journey",
    copy: "I then mapped everything onto something I called the “project Journey” which shows how a construction projects flows through all our customer types. ",
  },
  {
    id: 3,
    imgURL:
      "/img/portfolio/knauf-material-calculator/detail-scalability-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-material-calculator/detail-scalability-mobile.png",
    headline: "Scalability Assessment",
    copy: "That 7% of users that used the Delivery Notification turned out to have 30%+ Retention Rate over three months.",
  },
];
const galleryItemsDesign = [
  {
    id: 1,
    imgURL:
      "/img/portfolio/knauf-material-calculator/detail-sketch-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-material-calculator/detail-sketch-mobile.png",
    headline: "First Sketches",
    copy: "With quick sketches I made, I was able to align with stakeholders and customers on the best concept to continue.",
  },
  {
    id: 2,
    imgURL:
      "/img/portfolio/knauf-material-calculator/detail-sitemap-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-material-calculator/detail-sitemap-mobile.png",
    headline: "Sitemap",
    copy: "I designed a sitemap that not only organizes the screens, but the actual workflow of the users.",
  },
  {
    id: 3,
    imgURL:
      "/img/portfolio/knauf-material-calculator/detail-wireframes-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-material-calculator/detail-wireframes-mobile.png",
    headline: "Wireframes",
    copy: "Wireframes and flows, even if very high-level, helped us allocate the screen-real-estate for these information dense screens and complex workflows.",
  },
  {
    id: 4,
    imgURL:
      "/img/portfolio/knauf-material-calculator/detail-design-system-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-material-calculator/detail-design-system-mobile.png",
    headline: "Design System",
    copy: "I analyzed the wireframes from this and all other products to destill the most common design artifacts. From that I built an atomic design system that keeps consistency and provides scalability.",
  },
  {
    id: 5,
    imgURL:
      "/img/portfolio/knauf-material-calculator/detail-template-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-material-calculator/detail-template-mobile.png",
    headline: "Templates",
    copy: "Also, I defined base templates for common use cases across all prodcuts, and specifically for each product themselves.",
  },
];

const colorA = Colors.blue;
const colorB = Colors.blueLight;

const renderContent = () => (
  <>
    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Leadership Impact"
          headline="Building a Design Team & Culture"
          subline="Alongside product delivery, I scaled design maturity and growth mindset across Knauf Digital."
        />
        <CaseSubline subline="I didn’t just lead a product. I built a growth design culture." />
        <ul>
          <li>Hosted Activation Clinics to align teams on user metrics</li>
          <li>Mentored 2 designers on experiment design</li>
          <li>Led Growth Guild (Design, PM, Eng, Data).</li>
          <li>Built UX Maturity Model & Design System foundations</li>
        </ul>
      </ArticleSectionContent>
    </ArticleSection>
    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Leadership Impact"
          headline="Shaping Knauf’s digital ecosystem strategy"
          subline="This wasn’t just an account. It was the infrastructure for Knauf’s digital future."
        />
        <CaseSubline subline="Beyond product delivery, I drove strategic alignment across teams:" />
        <ul>
          <li>Led product direction for identity and access</li>
          <li>Aligned brands, markets, and legal teams on unified standards</li>
          <li>
            Established shared UX and technical patterns for the ecosystem
          </li>
          <li>Advocated for platform thinking across Knauf Digital</li>
          <li>Advocated for platform thinking across Knauf Digital</li>
        </ul>
      </ArticleSectionContent>
      <ArticleSection>
        <ImpactBoxGrid
          items={[
            {
              quote:
                "This was one of the most complex migrations we’ve done at Knauf. Alexandros aligned markets, brands, CRM, engineering, and delivered a platform that scales.",
              size: "L",
              subline: "Director, Knauf Digital",
            },
          ]}
        />
      </ArticleSection>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Leadership Impact"
          headline="Building a Design Team & Culture"
          subline="Alongside product delivery, I scaled design maturity and growth mindset across Knauf Digital."
        />
        <CaseImage
          imgURL="/img/portfolio/knauf-material-calculator/cover-ux-maturity.jpeg"
          size="L"
        />
        <CaseSubline subline="I didn’t just lead a product. I built a growth design culture." />
        <ul>
          <li>Built and led a 4-person product design team.</li>
          <li>
            Scaled design system across 4 apps, cutting delivery time by 40%.
          </li>
          <li>
            Mentored two designers in experimentation and metric-driven UX.
          </li>
          <li>Built “Growth Guild” (Design + PM + Data + Engineering).</li>
          <li>Introduced UX Maturity Assessments company-wide.</li>
        </ul>
      </ArticleSectionContent>
    </ArticleSection>
    <br />
    <br />
    <br />
    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead headline="Related Articles" />
        <Article
          headline="Is the Customer always right? It depends …"
          subline="The phrase >the customer is always right< has been a staple in customer service for decades and has been influential as it has been…"
          meta="Alexandros Shomper for Bootcamp @ Medium.com"
          link="https://medium.com/design-bootcamp/is-the-customer-always-right-it-depends-e875f37a6786"
          imgURL="https://miro.medium.com/v2/resize:fill:320:214/1*gSIDo1Rac8EDR0fhsraNeA.png"
        />
        <Article
          headline="Problem/Solution Fit vs Product/Market Fit"
          subline="Or: The difference between “good enough” and “awesome”"
          meta="Alexandros Shomper for Bootcamp @ Medium.com"
          link="https://medium.com/design-bootcamp/problem-solution-fit-vs-product-market-fit-bcfb7f8edfdc"
          imgURL="https://miro.medium.com/v2/resize:fill:320:214/0*JrB0_hChqOG3mFwj.png"
        />
        <Article
          headline="UX maturity assessment workshop"
          subline="A template version of a workshop we conducted to assess our team’s UX maturity, based on Nielsen Nelson’s UX Maturity Assessment."
          meta="Alexandros Shomper for Reforge @ Reforge.com"
          link="https://www.reforge.com/artifacts/ux-maturity-assessment-workshop"
          imgURL="https://cdn.sanity.io/images/pghoxh0e/production/b16f344e0d2c019f51295172b73cbccafe82e55d-528x343.png?w=2200&q=80&fit=max&auto=format"
        />
      </ArticleSectionContent>
    </ArticleSection>
  </>
);

export default createCasePage({
  metaTitle,
  metaDescription,
  eyebrow: "Case Study",
  eyebrowColor1: colorA,
  eyebrowColor2: colorB,
  title: "Knauf Material Calculator",
  subline:
    "From fragmented workflows to a unified product, helping construction applicators quote, plan, and order 3× faster.",
  hero,
  renderContent,
});
