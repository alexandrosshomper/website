import React from "react";

import createCasePage from "../CaseStudies/createCasePage";
import { ArticleSection, ArticleSectionContent } from "../../DesignSystem";
import CaseCopy from "../../Content/Case/CaseCopy";
import CaseCover from "../../Content/Case/CaseCover";
import CaseHeadlineThree from "../../Content/Case/CaseHeadlineThree";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseCitations from "../../Content/Case/CaseCitations";
import Drawer from "../../Content/Drawer/Drawer";
import CaseSubline from "../../Content/Case/CaseSubline";
import CaseSublineTwo from "../../Content/Case/CaseSublineTwo";
import CaseImage from "../../Content/Case/CaseImage";

const metaTitle = "Knauf Material Calculator | Alexandros Shomper";

const metaDescription =
  "Digital Anthropologist. Experienced Product-, Service & Business Designer with demonstrated track record of successfully developing meaningful experiences that people love by using emerging technology, solid company purpose, and a strong brand to elevate human experiences and interactions.";

const hero = () => (
  <CaseCover imgURL="/img/portfolio/knauf-material-calculator/cover.png" />
);

const galleryItems = [
  {
    id: 1,
    imgURL:
      "/img/portfolio/knauf-material-calculator/foundational-research.png",
    imgMobileURL:
      "/img/portfolio/knauf-material-calculator/foundational-research.png",
    headline: "Foundational Research",
    copy: "I spend the whole year of 2020 to do nothing else but research. This is an excerpt from one of our Interviews I made. There was no clear understanding of our customers in the company. Their daily tasks, their problems, their needs.",
  },
  {
    id: 2,
    imgURL:
      "/img/portfolio/knauf-material-calculator/construction-project-journey.jpeg",
    imgMobileURL:
      "/img/portfolio/knauf-material-calculator/construction-project-journey.jpeg",
    headline: "Construction Project Journey",
    copy: "I then mapped everything onto something I called the “project Journey” which shows how a construction projects flows through all our customer types. ",
  },
  {
    id: 3,
    imgURL:
      "/img/portfolio/knauf-material-calculator/scalability-assessment.png",
    imgMobileURL:
      "/img/portfolio/knauf-material-calculator/scalability-assessment.png",
    headline: "Scalability Assessment",
    copy: "That 7% of users that used the Delivery Notification turned out to have 30%+ Retention Rate over three months.",
  },
];

const renderContent = () => (
  <>
    <ArticleSection>
      <ArticleSectionContent>
        <CaseHeadlineThree headline="Overview" />
        <CaseSectionHead
          headline="B2B SaaS platform for construction applicators"
          subline="Knauf Material Calculator is a B2B SaaS platform helping construction applicators quote, plan, and order materials in minutes instead of hours."
        />
        <p>
          Applicators used 5+ disconnected tools to quote, plan, and order. We
          built one workspace that unified all, reducing errors, increasing
          trust, and driving repeat usage.
        </p>
        <p>
          From fragmented workflows to a unified product, helping construction
          applicators quote, plan, and order 3× faster.
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
        <CaseSublineTwo subline="Customer Types" />
        <p>
          <b>Specifier:</b> Professionals who design or specify Knauf systems
          for projects. They define which products and materials are included in
          tenders.
        </p>
        <p>
          <b>Dealer:</b> B2B partners who sell Knauf materials to construction
          companies and manage order logistics.
        </p>
        <p>
          <b>Applicator:</b> Contractors, on-site professionals who plan,
          measure, and execute installations.
        </p>
        <CaseCitations
          role="Product Design Manager, 12 markets"
          team="PO, Eng, Data, Design"
          product="B2B SaaS platform for construction professionals"
          stage="0 → 1 → n (Pre-PMF → PMF → Growth)"
          timeline="18 months"
          keyResults={[
            "Activation ↑ 25%",
            "Retention ↑ 30%",
            "Time-to-Value ↓ 40%",
            "NPS ↑ 15",
          ]}
        />
        <CaseSublineTwo subline="As Product Design Manager (Chapter Lead), I led it from concept to growth, reducing activation time-to-value by 40% and increasing repeat use by 30%." />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseHeadlineThree headline="Challenge" />
        <CaseSectionHead
          headline="Delays led to quote errors costing millions in lost bids. "
          subline="The construction industry runs on experience, not software.
Project leads and applicators were spending hours moving between Excel sheets, PDFs, and phone calls, trying to calculate quantities, submit tenders, and order materials."
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
        <CaseHeadlineThree headline="Finding Product-Market Fit (0→1)" />
        <CaseSectionHead
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
        <CaseSublineTwo subline="Key Feature 1: Tender Import & Smart Mapping" />
        <CaseImage
          imgURL="/img/portfolio/knauf-material-calculator/cover-homepage.png"
          size="L"
        />

        <CaseCopy
          copy="Every tender arrived in a different format — Excel, PDF, or even hand-written.
We built a guided import flow that parses items and matches them to Knauf’s product systems."
        />
        <CaseSubline subline="Highlights" />

        <ul>
          <li>Reduced quote creation time by 60%</li>
          <li>Increased quote accuracy and confidence</li>
        </ul>
        <CaseSubline subline="Impact" />
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
        <CaseSublineTwo subline="Key Feature 2: In-Plan Measurement" />
        <CaseImage
          imgURL="/img/portfolio/knauf-material-calculator/cover-plan-measurement.png"
          size="L"
        />
        <CaseCopy copy="Applicators could now measure directly on their digital plans, and link results to tender positions." />
        <CaseSubline subline="Highlights" />
        <ul>
          <li>Live measurement tools with snapping & layer toggles</li>
          <li>Real-time quantity calculation per wall, floor, or phase</li>
          <li>Immediate audit trail for every measurement</li>
        </ul>
        <CaseSubline subline="Impact" />
        <ul>
          <li>3× faster take-offs</li>
          <li>Zero re-entries between planning and ordering</li>
          <li>Major confidence boost among early users</li>
        </ul>
        <br />
        <br />
        <CaseSublineTwo subline="Key Feature 3: Easy Ordering & Tracking" />
        <CaseImage
          imgURL="/img/portfolio/knauf-material-calculator/cover-order-list.png"
          size="L"
        />
        <CaseCopy
          copy="Ordering materials used to happen over phone calls and guesswork.
We introduced structured, flexible ordering, by floor, phase, or wall type; plus real-time delivery tracking."
        />
        <CaseSubline subline="Highlights" />
        <ul>
          <li>Split orders by date or project phase</li>
          <li>Smart templates for recurring items</li>
          <li>Built-in delivery scheduling</li>
        </ul>
        <CaseSubline subline="Impact" />
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
        <CaseSublineTwo subline="Easy Import" />
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
        <CaseSublineTwo subline="Auto Fill Quote" />
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
        <CaseSublineTwo subline="Team Collaboration" />
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
        <ul>
          <li>25% more users sent their first quote under 15 minutes.</li>
          <li>30% increase in 7-day retention.</li>
          <li>
            Product became a blueprint for all future Knauf Digital tools.
          </li>
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
        <CaseHeadlineThree headline="Results" />
        <CaseSectionHead
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
        <CaseHeadlineThree headline="Reflections" />
        <CaseSectionHead headline="Great Product Design is Growth Design" />
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
  </>
);

export default createCasePage({
  metaTitle,
  metaDescription,
  eyebrow: "Case Study",
  eyebrowColor1: "#00b8d4",
  eyebrowColor2: "#62ebff",
  title: "Knauf Material Calculator",
  hero,
  renderContent,
});
