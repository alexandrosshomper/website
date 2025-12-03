import React from "react";

import createCasePage from "../CaseStudies/createCasePage";
import { ArticleSection, ArticleSectionContent } from "../../DesignSystem";
import CaseCopy from "../../Content/Case/CaseCopy";
import CaseCover from "../../Content/Case/CaseCover";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseCitations from "../../Content/Case/CaseCitations";
import Drawer from "../../Content/Drawer/Drawer";
import CaseSubline from "../../Content/Case/CaseSubline";
import CaseSublineTwo from "../../Content/Case/CaseSublineTwo";
import CaseImage from "../../Content/Case/CaseImage";
import CaseHighlight from "../../Content/Case/CaseHighlight";
import { ImpactBoxGrid } from "../../Content/Case/ImpactBox";
import CaseVideo from "../../Content/Case/CaseVideo";
import CaseImageBlank from "../../Content/Case/CaseImageBlank";
import Article from "../../Content/Article/Article";

const metaTitle = "Knauf Order Overview | Alexandros Shomper";

const metaDescription =
  "Digital Anthropologist. Experienced Product-, Service & Business Designer with demonstrated track record of successfully developing meaningful experiences that people love by using emerging technology, solid company purpose, and a strong brand to elevate human experiences and interactions.";

const hero = () => (
  <CaseCover imgURL="/img/portfolio/knauf-order-overview/cover.png" />
);

const galleryItemsDiscover = [
  {
    id: 1,
    imgURL: "/img/portfolio/knauf-order-overview/detail-deepdive-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-order-overview/detail-deepdive-mobile.png",
    headline: "Field Research & Surveys",
    copy: "This survey has been conducted with 53 customers in order to get a basic understanding of this particular target segment and quantitatively validate initial hypotheses around the workflow.",
  },
  {
    id: 2,
    imgURL: "/img/portfolio/knauf-order-overview/detail-inmarket-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-order-overview/detail-inmarket-desktop.png",
    headline: "In Market Validation",
    copy: "After extensive interviews and analysis, I was able to validate order transparency was the biggest pain point for dealers.",
  },
  {
    id: 3,
    imgURL:
      "/img/portfolio/knauf-order-overview/detail-project-journey-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-order-overview/detail-project-journey-mobile.png",
    headline: "Construction Project Journey",
    copy: "I then mapped everything onto something I called the “project Journey” which shows how a construction projects flows through all our customer types. ",
  },
];
const galleryItemsDesign = [
  {
    id: 1,
    imgURL: "/img/portfolio/knauf-order-overview/detail-sitemap-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-order-overview/detail-sitemap-mobile.png",
    headline: "Sitemap",
    copy: "I designed a sitemap that not only organizes the screens, but the actual workflow of the users.",
  },

  {
    id: 2,
    imgURL: "/img/portfolio/knauf-order-overview/detail-sketch-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-order-overview/detail-sketch-mobile.png",
    headline: "Quick Sketches",
    copy: "With quick sketches I made, I was able to align with stakeholders and customers on the best concept to continue.",
  },
  {
    id: 3,
    imgURL:
      "/img/portfolio/knauf-order-overview/detail-mental-model-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-order-overview/detail-mental-model-mobile.png",
    headline: "Mental Model",
    copy: "I mapped the mental models of our customers along the user journey, and mapped them to our sitemap & wireframes to ensure my concept meet their expectations and needs.",
  },
  {
    id: 4,
    imgURL: "/img/portfolio/knauf-order-overview/detail-hypotheses-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-order-overview/detail-hypotheses-mobile.png",
    headline: "Feature Level Hypotheses",
    copy: "For each feature I defined the Value Proposition, Addressed Pain, User Goal for each of them. I used further interviews, simple flyers, and click-dummies to validate our hypotheses.",
  },
  {
    id: 5,
    imgURL:
      "/img/portfolio/knauf-order-overview/detail-design-system-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-order-overview/detail-design-system-mobile.png",
    headline: "Design System",
    copy: "I analyzed the wireframes from this and all other products to destill the most common design artifacts. From that I built an atomic design system that keeps consistency and provides scalability.",
  },
  {
    id: 6,
    imgURL: "/img/portfolio/knauf-order-overview/detail-template-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-order-overview/detail-template-mobile.png",
    headline: "Templates",
    copy: "Also, I defined base templates for common use cases across all prodcuts, and specifically for each product themselves.",
  },
];

const renderContent = () => (
  <>
    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Overview"
          headline="Bringing clarity to construction logistics, giving dealers and applicators real-time visibility into every delivery."
          subline="Knauf Order Overview is a B2B SaaS platform helping construction applicators & dealers manage their logistics and warehouse."
        />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/warehouse.png"
          size="L"
        />
        <CaseSublineTwo subline="About Knauf" />
        <p>
          <b>Knauf Digital</b> is the innovation arm of <b>Knauf Group</b> (a
          15+B global building materials leader with 43,500+ employees,
          operating in 90+ countries). The unit focuses on developing B2B
          digital products for the construction industry. The mandate was to
          scale a portfolio of digital solutions across global markets while
          driving a user-centric transformation.
        </p>
        <CaseSublineTwo subline="Customer Type" />
        <p>
          <b>Dealer:</b> B2B partners who sell Knauf materials to construction
          companies and manage order logistics.
        </p>
        <CaseCitations
          role="Product Design Manager, 12 markets"
          team="14 (PM, Eng, Data, BA, Design)"
          product="Centralized track-n-trace platform for a fragemnted conglomerate"
          stage="0→1→n"
          timeline="12 months"
          keyResults={[
            "↓20% service inquiry calls",
            "+30% activation rate",
            "+25% retention",
            "2h/week saved per dealer",
          ]}
        />
        <CaseSublineTwo subline="As Product Design Manager, I led the design from product strategy, to concept, to growth across all products & product teams." />
        <CaseImageBlank
          imgURL="/img/portfolio/knauf-material-calculator/design-management.png"
          size="L"
        />{" "}
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Challenge"
          headline="“We spent more time chasing delivery info than selling materials.”"
          subline="Construction dealers manage thousands of orders across different Knauf entities.
Delivery ETAs change daily, and keeping applicators informed meant endless phone calls."
        />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-problem.png"
          size="L"
        />
        <CaseSubline subline="The Problem" />
        <CaseCopy copy="The lack of transparency created frustration for both dealers and Knauf, resulting in inefficiencies and low trust in the system." />
        <ul>
          <li>Constantly changing ETAs</li>
          <li>No unified tracking platform</li>
          <li>Different contact points per Knauf entity</li>
          <li>Manual customer updates consuming hours weekly</li>
        </ul>
        <CaseSubline subline="The Goal" />
        <CaseCopy copy="Design a unified, easy-to-use order management platform that reduces friction, increases trust, and saves dealers time." />
        <ul>
          <li>
            Provide users a unified overview of all their orders live status &
            changes
          </li>
          <li>Give transparency to the deliveries on material level</li>
          <li>Help our customers work more seamlessly togehter</li>
        </ul>
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Research"
          headline="Discover the essential workflow that defines value."
          subline="Through interviews, diaries, and job walkthroughs, we found that transparency and autonomy were key drivers."
        />
        <p>
          I led field visits and interviews across 9 countries — logistics &
          warehouse management works in dealerships and on the construction
          site. We combined JTBD analysis, expert interviews, and a survey with
          20 dealers in Europe.
          <br />
          <i>
            Field shadowing • Expert interviews (9 countries) • JTBD analysis •
            UX surveys (n=20 EU).
          </i>
        </p>
        <br />
        <br />

        <CaseSubline subline="Key Insights" />
        <ul>
          <li>Changes in ETA = #1 priority.</li>
          <li>Dealers’ notification preferences vary widely.</li>
          <li>Users needed fast setup (Day 1 value).</li>
        </ul>

        <br />
        <CaseSubline subline="PMF Hypothesis" />
        <CaseSubline subline="If dealers have transparency about their deliveries, they will be able to better manage their customers, delivery points, and construction sites; returning daily." />

        <br />
        <br />
        <br />
        <Drawer
          items={galleryItemsDiscover}
          label="Research Process Deepdive"
        />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Solution"
          headline="Designing for Activation"
          subline="Once the problem was clear, we focused on time-to-value, helping users reach their “aha moment” (sending the first quote) within 15 minutes."
        />

        <CaseVideo
          img="/img/portfolio/knauf-material-calculator/KOO.png"
          url="https://vimeo.com/1138854460?share=copy&fl=sv&fe=ci"
          size="L"
        />
        <p>
          <b>Scope decisions</b> Desktop-first; all-in-one app; design system
          prioritized to accelerate delivery across 4 apps.
          <ul>
            <li>
              <b>Cross Knauf Brands Order Overview</b> See the status of any
              order from any Knauf brand or sub-brand.
            </li>
            <li>
              <b>Calendar View</b> Provide order & delivery data in an easy to
              grasp context that helps customers organize their day.
            </li>
            <li>
              <b>Notification Settings</b> Customize on event level what to get
              notifications on, and on which channel.
            </li>
          </ul>
        </p>
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-mobile-screens.png"
          size="L"
        />
        <ArticleSectionContent>
          <br />
          <br />
          <Drawer items={galleryItemsDesign} label="Design Process Deepdive" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </ArticleSectionContent>
        <CaseSubline subline="Key Feature 1: Unified Order Table" />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-home.png"
          size="L"
        />
        <CaseCopy
          copy="Every tender arrived in a different format — Excel, PDF, or even hand-written.
We built a guided import flow that parses items and matches them to Knauf’s product systems."
        />
        <CaseCopy copy="The single source of truth for all deliveries." />
        <br />
        <br />
        <CaseSublineTwo subline="Highlights" />
        <CaseHighlight
          headline="All Knauf entities in one view"
          copy="Think 10+ Knauf entities with their own contact... I created a single source-of-truth order table that consolidates all delivery information, replacing what used to require several calls or systems. Now dealers can see everything at a glance."
          imgURL="/img/portfolio/knauf-order-overview/closeup-knauf-brands.png"
          direction="LTR"
        />
        <CaseHighlight
          headline="Customizable columns"
          copy="Every customer has very different needs in monitoring their orders &
          deliveries. A one-size-fits-all solution was not going to be useful to
          any customer. So I gave our customers the ability to choose what they
          want to see, and in which order."
          imgURL="/img/portfolio/knauf-order-overview/closeup-table-personalization.png"
          direction="RTL"
        />
        <CaseHighlight
          headline="Simplified visual status"
          copy="The delivery states for every Knauf entity where completely different, and even worse, the states of an order could change quickly. I standardized the delivery states for all entities; color-coded and icon-coded for a quick grasp of the status quo."
          imgURL="/img/portfolio/knauf-order-overview/closeup-order-status.png"
          direction="LTR"
        />
        <br />
        <CaseSublineTwo subline="Impact" />
        <p>
          Dealers could see everything instantly, cutting down cross-team calls.
        </p>
        <ImpactBoxGrid
          items={[
            { impact: "2h", subline: "average saved per week" },
            {
              impact: "20%",
              subline: "reduction in service calls",
            },
            {
              impact: "3x",
              subline: "less back to back calls",
              quote:
                "You can't imagine how much work this saves me, and how much easier my client work now is.",
              size: "L",
            },
          ]}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CaseSubline subline="Key Feature 2: Calendar View" />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-home-calendar.png"
          size="L"
        />
        <CaseCopy copy="A bird’s-eye view of upcoming deliveries." />
        <br />
        <br />
        <CaseSublineTwo subline="Highlights" />
        <CaseHighlight
          headline="Visual timeline of the week"
          copy="Although tables are a great structured, and searchable view on orders, essentially orders and deliveries are about time. This calendar view now a birds-eye view on the day or whole week."
          imgURL="/img/portfolio/knauf-order-overview/closeup-calendar-view.png"
          direction="LTR"
        />
        <CaseHighlight
          headline="Easy day planning for warehouse teams"
          copy="Displaying deliveries like calendar events, helps customers manage their own fleet, their warehouses, and their logistics more precisely. Without having to click through several orders, or even worse - calling the customer services."
          imgURL="/img/portfolio/knauf-order-overview/closeup-calendar-planning.png"
          direction="RTL"
        />
        <CaseSublineTwo subline="Impact" />
        <p>Dealers reported fewer surprises and smoother operations.</p>
        <ImpactBoxGrid
          items={[
            { impact: "25%", subline: "reduction of logistics chokepoints" },
            {
              impact: "2X",
              subline: "warehouse planning efficiency",
            },
          ]}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CaseSubline subline="Key Feature 3: Notification Settings" />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-notifications.png"
          size="L"
        />
        <CaseCopy copy="Personalized update preferences." />
        <br />
        <br />
        <CaseSublineTwo subline="Highlights" />
        <CaseHighlight
          headline="Choose events to be notified about"
          copy="In numerous customer interviews we've learned that each and every customer has very different preferences on what they want to receive notifications on. I've therefore designed a notification center that gives the user maximum customization."
          imgURL="/img/portfolio/knauf-order-overview/closeup-notifications-options.png"
          direction="LTR"
        />
        <CaseHighlight
          headline="Email, app, or SMS alerts"
          copy="Not only the events, but also the channel differed. Not only from customer to customer. But a single customer might need one important event notification to be sent immediately via text, while the rest can be delivered by email."
          imgURL="/img/portfolio/knauf-order-overview/closeup-notifications-channels.png"
          direction="RTL"
        />
        <CaseSublineTwo subline="Impact" />
        <p>
          Engagement and trust increased — users stopped “checking constantly.”
        </p>
        <ImpactBoxGrid
          items={[
            {
              impact: "2X",
              subline: "improved change response time",
              quote:
                "It's good if you don't have to chase information about changes, but it comes to you asap.",
              size: "L",
            },
          ]}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CaseSubline subline="Key Feature 4: Share Order Details" />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-order-details.png"
          size="L"
        />
        <CaseCopy copy="Let dealers share live delivery info with applicators." />
        <br />
        <br />
        <CaseSublineTwo subline="Highlights" />
        <ul>
          <li>One link, always up to date</li>
          <li>Reduced double communication</li>
        </ul>
        <CaseSublineTwo subline="Impact" />
        <ImpactBoxGrid
          items={[
            {
              impact: "45%",
              subline: "less “where’s my order?” calls of clients",
              quote:
                "Keeping my clients up-to-date was half my day. Now they can keep them up to date by themselves.",
              size: "L",
            },
          ]}
        />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Results"
          headline="Success in numbers"
          subline="Knauf Order Overview became the core product in Knauf’s digital ecosystem, adopted across 12 European markets."
        />
        <p>
          A product that turned analog workflows into a digital growth engine —
          and a design-led transformation that shaped how Knauf builds all
          future tools.
        </p>
        <ul>
          <li>
            Scaled design system across 4 apps, cutting delivery time by 40%.
          </li>
          <li>Mentored designers in hypothesis-driven experimentation.</li>
          <li>Built “Growth Guild” (Design + PM + Data + Engineering).</li>
          <li>Introduced UX Maturity Assessments company-wide.</li>
        </ul>
        <table>
          <tbody>
            <tr>
              <th>Metric</th>
              <th>Δ</th>
            </tr>
            <tr>
              <td>Inquiry Calls</td>
              <td>↓20%</td>
            </tr>
            <tr>
              <td>Dealer Admin Work</td>
              <td>-2h/week</td>
            </tr>
            <tr>
              <td>Activation</td>
              <td>+30%</td>
            </tr>
            <tr>
              <td>Retention</td>
              <td>+25%</td>
            </tr>
            <tr>
              <td>Markets Rolled Out</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
      </ArticleSectionContent>
    </ArticleSection>

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
  eyebrow: "Knauf Order Overview",
  eyebrowColor1: "#666677",
  eyebrowColor2: "#444455",
  title: "A unified platform for all Knauf orders",
  subline:
    "The single source of truth for deliveries from all Knauf brands and subbrands.",
  hero,
  renderContent,
});
