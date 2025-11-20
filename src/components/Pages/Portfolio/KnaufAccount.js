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

const metaTitle = "Knauf Account | Alexandros Shomper";

const metaDescription =
  "Digital Anthropologist. Experienced Product-, Service & Business Designer with demonstrated track record of successfully developing meaningful experiences that people love by using emerging technology, solid company purpose, and a strong brand to elevate human experiences and interactions.";

const hero = () => (
  <CaseCover imgURL="/img/portfolio/knauf-account/cover.png" />
);

const galleryItems = [
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
];

const renderContent = () => (
  <>
    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Overview"
          headline="Unified Identity & Access Platform for 30+ Knauf Apps and Services."
          subline="Knauf Account is the single sign-on and customer identity platform powering the entire Knauf digital ecosystem."
        />
        <p>
          It connects users, teams, and companies with everything Knauf offers:
          apps, websites, services, data, permissions, pricing, and
          notifications.
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
          Construction professionals, enterprises, and teams accessing any Knauf
          digital product — from planning tools to e-commerce portals.
        </p>
        <p>
          <b>Dealer:</b> B2B partners who sell Knauf materials to construction
          companies and manage order logistics.
        </p>
        <p>
          <b>Applicator:</b> Contractors, on-site professionals who plan,
          measure, and execute installations.
        </p>
        <p>
          <b>Specifier:</b> Architects, planners, and general contractors who
          define material requirements.
        </p>

        <CaseCitations
          role="Product Design Manager, 12 markets"
          team="20 (PM, Eng, Data, CRM, Design)"
          product="Unified Identity Platform (B2B/B2C + Enterprise teams)"
          stage="0→1→n"
          timeline="8 months"
          keyResults={[
            "Activation ↑ across all connected apps",
            "Support tickets ↓ significantly",
            "CRM data quality ↑",
            "Team onboarding time ↓ drastically",
          ]}
        />
        <CaseSublineTwo subline="As Product Design Manager (Chapter Lead), I led it from concept to growth, reducing activation time-to-value by 40% and increasing repeat use by 30%." />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Challenge"
          headline="A fragmented identity landscape blocking activation and scalability."
          subline="For decades, Knauf operated as a federation of brands across countries."
        />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-problem.png"
          size="L"
        />
        <CaseSubline subline="The Problem" />
        <CaseCopy copy="The ecosystem couldn’t scale because identity wasn’t unified." />
        <p>
          Users had to remember multiple passwords, re-enter the same data for
          every country or app, and had no central place to manage teams, roles,
          or account information. Business suffered:
        </p>
        <ul>
          <li>Fragmented CRM made global sales operations nearly impossible</li>
          <li>No single view of customers or companies</li>
          <li>No way to provide personalized pricing or content</li>
          <li>No cross-app retention loops</li>
        </ul>
        <CaseSubline subline="The Goal" />
        <CaseCopy copy="Build a unified access platform that becomes the gateway to the entire Knauf ecosystem — and the foundation for cross-product growth." />

        <p>The Knauf Account had to:</p>
        <ul>
          <li>Replace all legacy accounts</li>
          <li>Provide frictionless onboarding</li>
          <li>Give teams the ability to manage users and permissions</li>
          <li>Connect to CRM as a single source of truth</li>
          <li>Enable personalized pricing, content, and experience</li>
          <li>Enable personalized pricing, content, and experience</li>
        </ul>
        <p>
          A platform designed not for one product but for every product Knauf
          will ever build.
        </p>
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Discovery 0→1"
          headline="Understanding identity through ecosystems, not screens"
          subline="Identity isn’t a UI problem, it's an ecosystem problem."
        />
        <CaseSubline subline="Research" />
        <p>
          We conducted deep research across markets, brands, and teams to
          understand how access flows affected onboarding, retention, and sales.
          <br />
          <i>
            Cross-country stakeholder interviews (Brands, Sales, CRM) •
            Technical audits of all legacy access systems • UX research with
            applicators, contractors, architects • CRM data analysis
          </i>
        </p>
        <br />
        <br />

        <CaseSubline subline="Key Insights" />
        <ul>
          <li>
            <b>One customer had up to 5–12 accounts.</b> Different countries,
            different apps, different portals.
          </li>
          <li>
            <b>Onboarding dropped at the “create account” step across apps.</b>{" "}
            Access friction blocked activation everywhere.
          </li>
          <li>
            <b>
              No team-level management meant zero visibility for enterprise
              clients.
            </b>{" "}
            Admins couldn’t control access or roles.
          </li>
          <li>
            <b>Pricing, content, and permissions were misaligned.</b> Users got
            the wrong prices, wrong content, or wrong access.
          </li>
          <li>
            <b>CRM data was fragmented and incomplete.</b> Sales teams couldn’t
            trust customer information.
          </li>
        </ul>

        <br />
        <CaseSubline subline="PMF Hypothesis" />
        <CaseSubline
          subline="If Knauf customers can access all tools with one account,
and if that account becomes the single source of truth,
then activation will increase across all apps,
CRM data will improve,
and support workload will drop significantly."
        />
      </ArticleSectionContent>
      <ArticleSectionContent>
        <Drawer items={galleryItems} />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Solution"
          headline="Designing the identity platform powering the Knauf ecosystem"
          subline="We approached the Knauf Account as a platform, not a feature — with foundations that support decades of future products."
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
        <ArticleSectionContent>
          <Drawer items={galleryItemsDesign} />
          <br />
          <br />
        </ArticleSectionContent>
        <CaseSubline subline="Key Feature 1: One Account for All Knauf" />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-home.png"
          size="L"
        />
        <CaseCopy copy="The core of the platform: One login. One profile. One company. One identity." />
        <br />
        <br />
        <CaseSublineTwo subline="Highlights" />
        <CaseHighlight
          headline="Single sign-on (SSO) across all Knauf apps"
          copy="Consolidation of dozens of legacy accounts. Migration path for old country-based systems. Stronger authentication + enterprise-grade security"
          imgURL="/img/portfolio/knauf-order-overview/closeup-knauf-brands.png"
          direction="LTR"
        />
        <CaseHighlight
          headline="Unified customer and company profiles"
          copy="Every customer has very different needs in monitoring their orders &
          deliveries. A one-size-fits-all solution was not going to be useful to
          any customer. So I gave our customers the ability to choose what they
          want to see, and in which order."
          imgURL="/img/portfolio/knauf-order-overview/closeup-table-personalization.png"
          direction="RTL"
        />
        <br />
        <CaseSublineTwo subline="Impact" />
        <p>
          Dealers could see everything instantly, cutting down cross-team calls.
        </p>
        <ImpactBoxGrid
          items={[
            { impact: "2h", subline: "Activation ↑ across all connected apps" },
            {
              impact: "20%",
              subline: "Support requests ↓ significantly",
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
        <CaseSubline subline="Key Feature 2: Team Management & Permissions" />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-home-calendar.png"
          size="L"
        />
        <CaseCopy copy="A foundational capability for enterprise clients." />
        <br />
        <br />
        <CaseSublineTwo subline="Highlights" />
        <CaseHighlight
          headline="Create and manage teams"
          copy="Although tables are a great structured, and searchable view on orders, essentially orders and deliveries are about time. This calendar view now a birds-eye view on the day or whole week."
          imgURL="/img/portfolio/knauf-order-overview/closeup-calendar-view.png"
          direction="LTR"
        />
        <CaseHighlight
          headline="Invite users or approve join requests"
          copy="Displaying deliveries like calendar events, helps customers manage their own fleet, their warehouses, and their logistics more precisely. Without having to click through several orders, or even worse - calling the customer services."
          imgURL="/img/portfolio/knauf-order-overview/closeup-calendar-planning.png"
          direction="RTL"
        />
        <CaseHighlight
          headline="Define roles & permissions per app"
          copy="Although tables are a great structured, and searchable view on orders, essentially orders and deliveries are about time. This calendar view now a birds-eye view on the day or whole week."
          imgURL="/img/portfolio/knauf-order-overview/closeup-calendar-view.png"
          direction="LTR"
        />

        <CaseSublineTwo subline="Impact" />
        <p>
          This turned Knauf Account into an enterprise-grade IAM (Identity and
          Access Management) layer.
        </p>
        <ImpactBoxGrid
          items={[
            { impact: "25%", subline: "Team onboarding time ↓ drastically" },
            {
              impact: "2X",
              subline: "Higher cross-app activation",
            },
          ]}
        />
        <br />
        <br />
        <br />
        <br />
        <CaseSubline subline="Key Feature 3: Personalized Experiences & Pricing" />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-notifications.png"
          size="L"
        />
        <CaseCopy copy="With a unified identity, personalization becomes possible." />
        <br />
        <br />
        <CaseSublineTwo subline="Highlights" />
        <CaseHighlight
          headline="Customer type → tailored experience"
          copy="In numerous customer interviews we've learned that each and every customer has very different preferences on what they want to receive notifications on. I've therefore designed a notification center that gives the user maximum customization."
          imgURL="/img/portfolio/knauf-order-overview/closeup-notifications-options.png"
          direction="LTR"
        />
        <CaseHighlight
          headline="Country → localized content"
          copy="Not only the events, but also the channel differed. Not only from customer to customer. But a single customer might need one important event notification to be sent immediately via text, while the rest can be delivered by email."
          imgURL="/img/portfolio/knauf-order-overview/closeup-notifications-channels.png"
          direction="RTL"
        />
        <CaseHighlight
          headline="Company → personalized pricing"
          copy="In numerous customer interviews we've learned that each and every customer has very different preferences on what they want to receive notifications on. I've therefore designed a notification center that gives the user maximum customization."
          imgURL="/img/portfolio/knauf-order-overview/closeup-notifications-options.png"
          direction="LTR"
        />
        <CaseHighlight
          headline="Role → relevant tools and onboarding"
          copy="Not only the events, but also the channel differed. Not only from customer to customer. But a single customer might need one important event notification to be sent immediately via text, while the rest can be delivered by email."
          imgURL="/img/portfolio/knauf-order-overview/closeup-notifications-channels.png"
          direction="RTL"
        />
        <CaseSublineTwo subline="Impact" />
        <p>
          This powered activation loops across the ecosystem — users see “their
          Knauf,” not a generic interface.”
        </p>
        <ImpactBoxGrid
          items={[
            {
              impact: "2X",
              subline: "Better CRM data → better personalization",
              size: "M",
            },
            {
              impact: "2X",
              subline: "Higher trust and transparency",
              size: "M",
            },
          ]}
        />
        <br />
        <br />
        <br />
        <br />
      </ArticleSectionContent>
    </ArticleSection>
    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Driving Growth 1→n"
          headline="Once the platform went live, we focused on ecosystem-wide activation and scalability."
          subline="After PMF validation, we focused on activation and habit formation"
        />
        <p>Growth Tactics:</p>
        <ul>
          <li>Audited onboarding flows across apps and removed friction</li>
          <li>Improved first-run experiences using Knauf Account data</li>
          <li>IIntroduced team-based activation loops</li>
          <li>Ran “Account Health Clinics” with CRM, Product, and Design</li>
        </ul>
        <CaseSublineTwo subline="Experiment 1: Activation increased in all apps using Knauf Account" />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-auto-notifictions.png"
          size="L"
        />
        <p>Prompt new users to enable all updates on first login.</p>

        <CaseSublineTwo subline="Experiment 2: Update Toast Nudges" />
        <CaseImage
          imgURL="/img/portfolio/knauf-order-overview/cover-notifications-reminder.png"
          size="L"
        />
        <p>Show missed updates since last visit.</p>
        <CaseSubline subline="Growth Impact" />
        <p>A small nudge turned notifications from a setting into a habit.</p>
        <ImpactBoxGrid
          items={[
            { impact: "18%", subline: "better activation rate" },
            {
              impact: "30%",
              subline: "more user engagement",
            },
            {
              impact: "25%",
              subline: "better user retention",
            },
          ]}
        />
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
    </ArticleSection>
    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Results"
          headline="A unified platform enabling ecosystem growth"
          subline="Knauf Account became the identity backbone for all digital products at Knauf."
        />
        <p>
          A foundation that unlocked personalization, efficiency, and
          scalability across markets and brands.
        </p>
        <table>
          <tbody>
            <tr>
              <th>Metric</th>
              <th>Δ</th>
            </tr>
            <tr>
              <td>Activation across apps</td>
              <td>↓20%</td>
            </tr>
            <tr>
              <td>Support tickets ↓ drastically</td>
              <td>-2h/week</td>
            </tr>
            <tr>
              <td>Team onboarding time ↓ drastically</td>
              <td>+30%</td>
            </tr>
            <tr>
              <td>CRM data accuracy ↑</td>
              <td>+25%</td>
            </tr>
            <tr>
              <td>Cross-app usage ↑</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Reflections"
          headline="Identity as the first growth lever"
        />
        <CaseSublineTwo subline="Activation is not only a product problem. It begins with identity." />
        <br />
        <CaseCopy
          copy="Unifying access unlocked every downstream improvement:
personalization, analytics, CRM, trust, onboarding, and cross-app retention."
        />
        <CaseSubline subline="Next steps I'd today:" />
        <p>
          Introduce adaptive onboarding powered by identity data — dynamically
          guiding users into the app most relevant to their role, country, and
          company.
        </p>
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
  title: "Knauf Account",
  subline:
    "From fragmented identities to a unified access platform powering activation across the Knauf ecosystem.",
  hero,
  renderContent,
});
