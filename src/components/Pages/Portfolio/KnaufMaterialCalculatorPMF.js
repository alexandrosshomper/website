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
];

const colorA = Colors.blue;
const colorB = Colors.blueLight;

const renderContent = () => (
  <>
    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          headline="B2B SaaS platform for construction applicators"
          subline="Knauf Material Calculator is a B2B SaaS platform helping construction applicators quote, plan, and order materials in minutes instead of hours."
          overline="Overview"
        />
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
          <b>Applicator:</b> Contractors, on-site professionals who plan,
          measure, and execute installations.
        </p>
        <CaseCitations
          role="Product Design Manager, 12 markets"
          team="PO, Eng, Data, Design"
          product="B2B SaaS platform for construction professionals"
          stage="0 →1→n "
          timeline="18 months"
          keyResults={[
            "Activation ↑ 25%",
            "Retention ↑ 30%",
            "Time-to-Value ↓ 40%",
            "NPS ↑ 15",
          ]}
        />
        <CaseSublineTwo subline="As Product Design Manager, I led the design from product strategy, to concept, to growth across all products & product teams." />
        <CaseImageBlank
          imgURL="/img/portfolio/knauf-material-calculator/design-management.png"
          size="L"
        />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Challenge"
          headline="Delays led to quote errors costing millions in lost bids. "
          subline="The construction industry runs on experience, not software.
Project leads and applicators were spending hours moving between Excel sheets, PDFs, and phone calls, trying to calculate quantities, submit tenders, and order materials."
        />
        <CaseImage
          imgURL="/img/portfolio/knauf-material-calculator/cover-problem.png"
          size="L"
        />

        <CaseSubline subline="The Problem" />
        <CaseCopy copy="Construction professionals managed tenders, calculations, and orders across Excel sheets, PDFs, and calls, leading to:" />
        <ul>
          <li>Error-prone manual calculations</li>
          <li>Re-entry of data across fragmented tools</li>
          <li>Lack of visibility on profitability</li>
          <li>Low trust in “digital tools made for construction”</li>
        </ul>
        <CaseSubline subline="The Goal" />
        <CaseCopy copy="Build a unified, end-to-end platform that helps applicators plan jobs faster, make fewer mistakes, and order materials with confidence. An end-to-end material management platform that:" />
        <ul>
          <li>Helps users reach value (first quote sent) within 15 minutes</li>
          <li>Bridges quote → plan → order seamlessly</li>
          <li>Builds trust through precision and reliability</li>
        </ul>
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Discovery"
          headline="Discover the essential workflow that defines value."
          subline="Before designing, we needed to understand what “value” actually meant for our users."
        />
        <CaseSubline subline="Research" />
        <p>
          I led field visits and interviews across 12 countries — observing how
          crews plan, measure, and order. We combined JTBD analysis, expert
          interviews, and a survey with 53 applicators in Germany.
          <br />
          <i>
            Field shadowing • Expert interviews (12 countries) • JTBD analysis •
            UX surveys (n=53 DE).
          </i>
        </p>
        <CaseImageBlank
          imgURL="/img/portfolio/knauf-material-calculator/cover-flow.png"
          size="L"
        />
        <br />
        <Drawer items={galleryItemsDiscover} label="Research Details" />
        <br />
        <br />
        <CaseSubline subline="Key Insights" />
        <ul>
          <li>“Trustable numbers” mattered more than UI polish.</li>
          <li>
            Applicators didn’t want more tools, they wanted one place that just
            works.
          </li>
          <li>Offline-first and minimal input were must-haves.</li>
        </ul>
        <CaseSubline subline="PMF Hypothesis" />
        <CaseSubline subline="“If applicators can quote, plan, and order in one workspace, they’ll make fewer mistakes and be more profitable; returning within one month to create another quote.”" />
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
          img="/img/portfolio/knauf-material-calculator/KMC.png"
          url="https://vimeo.com/1138645247"
          size="L"
        />

        <p>
          <b>Scope decisions</b> Desktop-first; all-in-one app; design system
          prioritized to accelerate delivery across 4 apps.
          <ul>
            <li>
              <b>Tender Capture</b> Read, capture, & translate tenders of any
              format into structured inputs
            </li>
            <li>
              <b>In-Plan Measurement</b> Determine masses & quantities on plans
              & to tender positions.
            </li>
            <li>
              <b>Material Order & Tracking</b> Order by floor, wall type, phase,
              or element; track ordering status.
            </li>
            <li>
              <b>Project KPIs & Documentation</b> Proof of acceptance,
              certificates, and project health.
            </li>
          </ul>
        </p>
        <CaseImage
          imgURL="/img/portfolio/knauf-material-calculator/cover-mobile-screens.png"
          size="L"
        />

        <Drawer items={galleryItemsDesign} label="Design Details" />
        <br />
        <br />
        <CaseSubline subline="Key Feature 1: Tender Capture" />
        <CaseImage
          imgURL="/img/portfolio/knauf-material-calculator/cover-homepage.png"
          size="L"
        />

        <CaseCopy
          copy="Every tender arrived in a different format — Excel, PDF, or even hand-written.
I built a guided import flow that parses items and matches them to Knauf’s product systems."
        />
        <br />
        <br />
        <CaseSublineTwo subline="Highlights" />
        <p>
          Tenders arrive in every format imaginable. I built a structured
          quoting interface that can parse tender items and maps them to Knauf
          systems, so downstream steps inherit clean, linked data.
        </p>
        <CaseHighlight
          headline="Quote Tracking"
          copy="An overview of the quotes sent, but even more important, an overview of quote drafts with highlighted due-dates. Helping you find the most urgent actions on the screen."
          imgURL="/img/portfolio/knauf-material-calculator/closeup-quote-overview.png"
          direction="LTR"
        />
        <CaseHighlight
          headline="Tender to Quote"
          copy="New business starts with a tender, and providing a quote asap. Instead of manually transfering each position, customers can import the tender directly in seconds."
          imgURL="/img/portfolio/knauf-material-calculator/closeup-import-tender.png"
          direction="RTL"
        />
        <CaseHighlight
          headline="Quote to Project"
          copy="After a Tender has been won and approved, it can be converted into a construction project in one click. Users can import all existing information and offering to add new resources like floor-plans."
          imgURL="/img/portfolio/knauf-material-calculator/closeup-quote-to-project.png"
          direction="LTR"
        />
        <CaseSublineTwo subline="Impact" />
        <p>
          Early trust increased: users saw reliable, structured data from the
          start
        </p>
        <ImpactBoxGrid
          items={[
            { impact: "60%", subline: "faster quote creation" },
            {
              impact: "3x",
              subline: "higher quoting rate",
            },
            {
              impact: "85%",
              subline: "reduction in errors",
              quote:
                "This is the tool I was looking for. Finally everything in one place.",
              size: "L",
            },
          ]}
        />
        <br />
        <br />
        <br />
        <CaseSubline subline="Key Feature 2: In-Plan Measurement" />
        <CaseImage
          imgURL="/img/portfolio/knauf-material-calculator/cover-plan-measurement.png"
          size="L"
        />
        <CaseCopy copy="Applicators could now measure directly on their digital plans, and link results to tender positions. From site measurements → plan → exact quantities → approved order in minutes." />
        <br />
        <br />
        <CaseSublineTwo subline="Highlights" />
        <p>
          Take-offs & ordering happens across PDFs, spreadsheets, & calls;
          fragmented, error-prone, and slow. I bring them together: users can
          measure in plans, link elements to a tender position & turn those
          results into orders.
        </p>
        <CaseHighlight
          headline="Plan Measurement tools"
          copy="Users can plan mm-exact measurements and directly assign positions from the quote. Intuitive usage with immediate results."
          imgURL="/img/portfolio/knauf-material-calculator/closeup-plan-measurement.png"
          direction="LTR"
        />
        <CaseHighlight
          headline="Real-time quantity calculation"
          copy="By making mm-exact measurements on the plan, the quantities of the matching positions get calculated in real-time; per wall, floor, or phase"
          imgURL="/img/portfolio/knauf-material-calculator/closeup-plan-calculations.png"
          direction="RTL"
        />
        <CaseSublineTwo subline="Impact" />
        <p>Major confidence boost among early users</p>
        <ImpactBoxGrid
          items={[
            { impact: "3x", subline: "quantity calculation speed" },
            {
              impact: "0",
              subline: "re-entries between planning and ordering",
            },
            {
              impact: "40%",
              subline: "reduction in communication",
              quote:
                "With this system, there is no guessworking anymore, no blackspots between the team. We all know, what has been planned, what material do we need mm-exact.",
              size: "L",
            },
          ]}
        />
        <br />
        <br />
        <br />
        <CaseSubline subline="Key Feature 3: Material Order & Tracking" />
        <CaseImage
          imgURL="/img/portfolio/knauf-material-calculator/cover-order-list.png"
          size="L"
        />
        <CaseCopy
          copy="Ordering materials used to happen over phone calls and guesswork.
We introduced structured, flexible ordering, by floor, phase, or wall type; plus real-time delivery tracking."
        />
        <br />
        <br />
        <CaseSublineTwo subline="Highlights" />
        <CaseHighlight
          headline="Split orders by date or project phase"
          copy="Order material according to need. By floor, wall type, construction phase, element. Whatever the user needs."
          imgURL="/img/portfolio/knauf-material-calculator/closeup-orders.png"
          direction="LTR"
        />
        <CaseHighlight
          headline="Built-in delivery scheduling"
          copy="Tracking orders & deliveries on a construction is complex, messy, and time-sensitive. Our order tracking provides real-time status that can be filtered down to any phase, section, floor, wall-type, etc. to give users the ETA they need."
          imgURL="/img/portfolio/knauf-material-calculator/closeup-order-scheduling.png"
          direction="RTL"
        />
        <CaseSublineTwo subline="Impact" />
        <p>Trust built between Knauf, dealers, and applicators</p>
        <ImpactBoxGrid
          items={[
            { impact: "60%", subline: "cut in order mistakes" },
            {
              impact: "30%",
              subline: "reduction of delivery status update calls",
            },
            {
              impact: "20%",
              subline: "improved logistics efficiency",
              quote:
                "Now I finally have a clear picture of my orders and deliveries.",
              size: "L",
            },
          ]}
        />
      </ArticleSectionContent>
    </ArticleSection>
    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Driving Growth"
          headline="Discovering the Growth Bottlenecks"
          subline="Once core value was validated, I led the transition from PMF to Growth."
        />
        <CaseSubline subline="Growth Tactics" />
        <p>
          We introduced Activation Clinics, biweekly cross-functional sessions
          (Design, PM, Eng, Data) to review friction metrics and identify quick
          wins. We tracked:
        </p>
        <ul>
          <li>Aha Moment ≤15m</li>
          <li>Quote-to-Plan Conversion</li>
          <li>7-Day Retention</li>
        </ul>
        <CaseSubline subline="Loops & Experiments" />
        <p>
          We built onboarding loops and “repeat job templates” to encourage
          reactivation and faster setup.
        </p>
        <br />
        <br />
        <br />
        <CaseSublineTwo subline="Experiment 1: Easy Import" />
        <CaseImage
          imgURL="/img/portfolio/knauf-material-calculator/cover-import-formats.png"
          size="L"
        />
        <p>
          <b>Problem</b> Low Set Up rates. The Set up moment for this use case
          is providing the positions your first quote. Manually a daunting task
          and the import sources can vary vastly.
        </p>
        <p>
          <b>Solution</b> Create a quote feature for any type of import.
        </p>
        <p>
          <b>Impact</b> Onboarding Drop-off: –28% before project creation
        </p>
        <br />
        <br />
        <br />
        <CaseSublineTwo subline="Experiment 2: Auto Fill Quote" />
        <CaseImage
          imgURL="/img/portfolio/knauf-material-calculator/cover-auto-fill.png"
          size="L"
        />
        <p>
          <b>Problem</b> Low Aha moment Rates. The Aha moment for this use case
          is easily sending out and winning a offer. This depends on the ease of
          creating an offer.
        </p>
        <p>
          <b>Solution</b> Make a one-click done-for-you offer calculation
          feature.
        </p>
        <p>
          <b>Impact</b> Activation Rate: +18% (users completing first project),
          Time-to-Aha: –35% (from 43 min to 10 min median)
        </p>
        <br />
        <br />
        <br />
        <CaseSublineTwo subline="Experiment 3: Team Collaboration" />
        <CaseImage
          imgURL="/img/portfolio/knauf-material-calculator/cover-collaboration.png"
          size="L"
        />
        <p>
          <b>Problem</b> Low Activation Rates. Creating detailed measurements
          can often change hands of team mates or require them to review.
          Measurement in isolation is blocking activation.
        </p>
        <p>
          <b>Solution</b> Make a team workspace for collaboration.
        </p>
        <p>
          <b>Impact</b> Activation Rate: +18% (teams finishing first plan),
          Viral Invites: +20%
        </p>
        <br />
        <br />
        <CaseSubline subline="Growth Impact" />
        <p>
          Knauf Material Calculator became a blueprint for all future Knauf
          Digital tools.
        </p>
        <ImpactBoxGrid
          items={[
            {
              impact: "25%",
              subline: "more users sent their first quote under 15 minutes",
            },
            {
              impact: "30%",
              subline: "increase in 7-day retention",
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
          subline="Knauf Material Calculator became the core product in Knauf’s digital ecosystem, adopted across 12 European markets."
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
              <td>Activation (Aha ≤15m)</td>
              <td>+25%</td>
            </tr>
            <tr>
              <td>7-Day Retention</td>
              <td>+30%</td>
            </tr>
            <tr>
              <td>Plan→Order Conversion</td>
              <td>+18pp</td>
            </tr>
            <tr>
              <td>NPS</td>
              <td>15</td>
            </tr>
          </tbody>
        </table>
      </ArticleSectionContent>
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
    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Reflections"
          headline="Great Product Design is Growth Design"
        />
        <CaseSublineTwo subline="Knauf Material Calculator taught me that activation isn’t a funnel stage, it’s a design problem. When users trust the system, growth becomes a side effect." />
        <br />
        <CaseSubline subline="Next step I’d take today:" />
        <CaseCopy copy="Automate system recommendations with AI to predict optimal materials based on project type." />
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
