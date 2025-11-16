import React from "react";

import createCasePage from "../CaseStudies/createCasePage";
import { ArticleSection, ArticleSectionContent } from "../../DesignSystem";
import CaseCopy from "../../Content/Case/CaseCopy";
import CaseCover from "../../Content/Case/CaseCover";
import CaseHeadlineThree from "../../Content/Case/CaseHeadlineThree";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseCitations from "../../Content/Case/CaseCitations";
import CaseSubline from "../../Content/Case/CaseSubline";
import Drawer from "../../Content/Drawer/Drawer";
import CaseSublineTwo from "../../Content/Case/CaseSublineTwo";
import CaseImage from "../../Content/Case/CaseImage";
import CaseImageComponent from "../../Content/Case/CaseImage";

const metaTitle = "Knauf Order Overview | Alexandros Shomper";

const metaDescription =
  "Digital Anthropologist. Experienced Product-, Service & Business Designer with demonstrated track record of successfully developing meaningful experiences that people love by using emerging technology, solid company purpose, and a strong brand to elevate human experiences and interactions.";

const hero = () => (
  <CaseCover imgURL="/img/portfolio/knauf-order-overview/cover.png" />
);

const galleryItems = [
  {
    id: 1,
    imgURL: "/img/portfolio/knauf-order-overview/in-market-validation.png",
    imgMobileURL:
      "/img/portfolio/knauf-order-overview/in-market-validation.png",
    headline: "In Market Validation",
    copy: "After extensive interviews  and analysis, I discovered order transparency was the biggest pain point for dealers.",
  },
  {
    id: 2,
    imgURL: "/img/portfolio/knauf-order-overview/mental-models.jpeg",
    imgMobileURL: "/img/portfolio/knauf-order-overview/mental-models.jpeg",
    headline: "Mental Models",
    copy: "I mapped our customers Mental Models onto a more detailed version of the sitemap - not yet wireframes, rather a high level concepts of the features out users might need.",
  },
];

const renderContent = () => (
  <>
    <ArticleSection>
      <ArticleSectionContent>
        <CaseHeadlineThree headline="Overview" />
        <CaseSectionHead
          headline="Bringing clarity to construction logistics, giving dealers and applicators real-time visibility into every delivery."
          subline="Knauf Order Overview is a B2B SaaS platform helping construction applicators & dealers manage their logistics and warehouse."
        />
        <p>
          Dealers lacked a unified way to track orders (inefficiency and
          frustration).
        </p>
        <CaseSublineTwo subline="Company" />
        <p>
          <b>Knauf</b> is a €15B global building materials manufacturer
          operating in more than 90 countries.
        </p>
        <p>
          <b>Knauf Digital</b> is the technology and innovation unit driving the
          digital transformation at scale; building digital ecosystems that
          connect contractors, dealers, and Knauf brands across markets.
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
          stage="0→1→n (PMF → Growth)"
          timeline="12 months"
          keyResults={[
            "↓20% service inquiry calls",
            "+30% activation rate",
            "+25% retention",
            "2h/week saved per dealer",
          ]}
        />
        <CaseSublineTwo subline="As Product Design Manager (Chapter Lead), I led it from concept to growth, reducing activation time-to-value by 40% and increasing repeat use by 30%." />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseHeadlineThree headline="Challenge" />
        <CaseSectionHead
          headline="“We spent more time chasing delivery info than selling materials.”"
          subline="Construction dealers manage thousands of orders across different Knauf entities.
Delivery ETAs change daily, and keeping applicators informed meant endless phone calls."
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
        <CaseHeadlineThree headline="Discovery & Hypothesis" />
        <CaseSectionHead
          headline="Discover the essential workflow that defines value."
          subline="Through interviews, diaries, and job walkthroughs, we found that transparency and autonomy were key drivers."
        />
        <CaseSubline subline="Research" />
        <p>
          I led field visits and interviews across 9 countries — logistics &
          warehouse management works in dealerships and on the construction
          site. We combined JTBD analysis, expert interviews, and a survey with
          20 dealers in Europe. I led field visits and interviews across 9
          countries — logistics & warehouse management works in dealerships and
          on the construction site. We combined JTBD analysis, expert
          interviews, and a survey with 20 dealers in Europe.
          <br />
          <i>
            Field shadowing • Expert interviews (9 countries) • JTBD analysis •
            UX surveys (n=20 EU). Field shadowing • Expert interviews (9
            countries) • JTBD analysis • UX surveys (n=20 EU).
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
        <CaseSublineTwo subline="“If dealers can trust their data and customize how they’re updated, they’ll come back every day.”" />
        <br />
        <br />
        <CaseSublineTwo subline="“If dealers can trust their data and customize how they’re updated, they’ll come back every day.”" />
        <br />
        <br />
        <CaseSubline subline="PMF Hypothesis" />
        <CaseSubline subline="If dealers have transparency about their deliveries, they will be able to better manage their customers, delivery points, and construction sites; returning daily." />
        <CaseSubline subline="If dealers have transparency about their deliveries, they will be able to better manage their customers, delivery points, and construction sites; returning daily." />
      </ArticleSectionContent>
      <ArticleSectionContent>
        <Drawer items={galleryItems} />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseHeadlineThree headline="Solution" />
        <CaseSectionHead
          headline="Designing for Activation"
          subline="Once the problem was clear, we focused on time-to-value, helping users reach their “aha moment” (sending the first quote) within 15 minutes."
        />
        <CaseSublineTwo subline="Key Feature 1: Unified Order Table" />
        <CaseImageComponent
          imgURL="/img/portfolio/knauf-order-overview/cover-home.png"
          size="L"
        />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-home.png"
          size="L"
        />
        <CaseCopy
          copy="Every tender arrived in a different format — Excel, PDF, or even hand-written.
We built a guided import flow that parses items and matches them to Knauf’s product systems."
        />
        <CaseCopy copy="The single source of truth for all deliveries." />
        <CaseSubline subline="Highlights" />
        <ul>
          <li>All Knauf entities in one view</li>
          <li>Customizable columns</li>
          <li>Simplified visual status</li>
        </ul>
        <CaseSubline subline="Impact" />
        <p>
          Dealers could see everything instantly, cutting down cross-team calls.
        </p>
        <ul>
          <li>Quote creation time reduced by 60%</li>
          <li>
            Early trust increased: users saw reliable, structured data from the
            start
          </li>
          <li>Foundation for automation and cross-system integration</li>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <CaseSublineTwo subline="Key Feature 2: Calendar View" />
        <CaseImageComponent
          imgURL="/img/portfolio/knauf-order-overview/cover-home-calendar.png"
          size="L"
        />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-home-calendar.png"
          size="L"
        />
        <CaseCopy copy="A bird’s-eye view of upcoming deliveries." />
        <CaseSubline subline="Highlights" />
        <ul>
          <li>Visual timeline of the week</li>
          <li>Easy day planning for warehouse teams</li>
        </ul>
        <CaseSubline subline="Impact" />
        <p>Dealers reported fewer surprises and smoother operations.</p>
        <ul>
          <li>3× faster take-offs</li>
          <li>Zero re-entries between planning and ordering</li>
          <li>Major confidence boost among early users</li>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <CaseSublineTwo subline="Key Feature 3: Notification Settings" />
        <CaseImageComponent
          imgURL="/img/portfolio/knauf-order-overview/cover-notifications.png"
          size="L"
        />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-notifications.png"
          size="L"
        />
        <CaseCopy copy="Personalized update preferences." />
        <CaseSubline subline="Highlights" />
        <ul>
          <li>Email, app, or SMS alerts</li>
          <li>Choose events to be notified about</li>
        </ul>
        <CaseSubline subline="Impact" />
        <p>
          Engagement and trust increased — users stopped “checking constantly.”
        </p>
        <ul>
          <li>Order accuracy ↑</li>
          <li>Reorders simplified</li>
          <li>Trust built between applicators and dealers</li>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <CaseSublineTwo subline="Key Feature 4: Share Order Details" />
        <CaseImageComponent
          imgURL="/img/portfolio/knauf-order-overview/cover-order-details.png"
          size="L"
        />
        <CaseImageComponent
          imgURL="/img/portfolio/knauf-order-overview/cover-order-details-documents.png"
          size="L"
        />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-order-details.png"
          size="L"
        />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-order-details-documents.png"
          size="L"
        />
        <CaseCopy copy="Let dealers share live delivery info with applicators." />
        <CaseSubline subline="Highlights" />
        <ul>
          <li>One link, always up to date</li>
          <li>Reduced double communication</li>
        </ul>
        <CaseSubline subline="Impact" />
        <p>+25% retention; fewer “where’s my order?” calls.</p>
        <ul>
          <li>Order accuracy ↑</li>
          <li>Reorders simplified</li>
          <li>Trust built between applicators and dealers</li>
        </ul>
      </ArticleSectionContent>
    </ArticleSection>
    <ArticleSection>
      <ArticleSectionContent>
        <CaseHeadlineThree headline="Driving Growth (1→n)" />
        <CaseSectionHead
          headline="Discovering the Growth Bottlenecks"
          subline="After PMF validation, we focused on activation and habit formation"
        />
        <CaseSublineTwo subline="Experiment 1: Auto Enable Notifications" />
        <CaseImageComponent
          imgURL="/img/portfolio/knauf-order-overview/cover-auto-notifictions.png"
          size="L"
        />
        <CaseSublineTwo subline="Experiment 1: Auto Enable Notifications" />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-auto-notifictions.png"
          size="L"
        />
        <p>Prompt new users to enable all updates on first login.</p>
        <ul>
          <li>+18% activation</li>
        </ul>
        <CaseSublineTwo subline="Experiment 2: Update Toast Nudges" />
        <CaseImageComponent
          imgURL="/img/portfolio/knauf-order-overview/cover-notifications-reminder.png"
          size="L"
        />
        <CaseSublineTwo subline="Experiment 2: Update Toast Nudges" />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-notifications-reminder.png"
          size="L"
        />
        <p>Show missed updates since last visit.</p>
        <CaseSubline subline="A small nudge turned notifications from a setting into a habit." />
        <CaseSubline subline="A small nudge turned notifications from a setting into a habit." />
        <ul>
          <li>+30% engagement</li>
          <li>+25% retention</li>
        </ul>
      </ArticleSectionContent>
    </ArticleSection>
    <ArticleSection>
      <ArticleSectionContent>
        <CaseHeadlineThree headline="Leadership Impact" />
        <CaseSectionHead
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
        <CaseHeadlineThree headline="Results" />
        <CaseSectionHead
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
        <CaseHeadlineThree headline="Reflections" />
        <CaseSectionHead headline="Great Product Design is Growth Design" />
        <CaseSublineTwo subline="Transparency builds trust, and trust drives retention." />
        <br />
        <CaseCopy
          copy="Knauf Order Overview transformed dealer operations from manual chaos to digital clarity.
It became Knauf’s blueprint for future B2B platforms and one of its fastest-adopted tools globally."
        />
        <CaseSubline subline="Key Takeaways" />
        <ul>
          <li>
            <b>Growth by design:</b> Focusing on user activation and behavioral
            loops, not just UI.
          </li>
          <li>
            <b>Leadership through impact:</b> Metrics, mentorship, and maturity
            in one strategy.
          </li>
          <li>
            <b>Clarity at scale:</b> Turning industrial complexity into
            intuitive user journeys.
          </li>
        </ul>
      </ArticleSectionContent>
    </ArticleSection>
  </>
);

export default createCasePage({
  metaTitle,
  metaDescription,
  eyebrow: "Case Study",
  eyebrowColor1: "#00b8d4",
  eyebrowColor2: "#62ebff",
  title: "Knauf Order Overview",
  hero,
  renderContent,
});
