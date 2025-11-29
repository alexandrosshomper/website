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

const metaTitle = "Knauf Account | Alexandros Shomper";

const metaDescription =
  "Digital Anthropologist. Experienced Product-, Service & Business Designer with demonstrated track record of successfully developing meaningful experiences that people love by using emerging technology, solid company purpose, and a strong brand to elevate human experiences and interactions.";

const hero = () => (
  <CaseCover imgURL="/img/portfolio/knauf-account/cover.png" />
);

const galleryItemsDiscover = [
  {
    id: 1,
    imgURL: "/img/portfolio/knauf-account/detail-deepdive-desktop.png",
    imgMobileURL: "/img/portfolio/knauf-account/detail-deepdive-mobile.png",
    headline: "Field Research & Surveys",
    copy: "When designing an account for a fragmented corporate, the first thing we needed to do is get a picture of the landscape. The global system requirements, customer requirements, and business requirements.",
  },
  {
    id: 2,
    imgURL: "/img/portfolio/knauf-account/detail-project-journey-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-account/detail-project-journey-mobile.png",
    headline: "Construction Project Journey",
    copy: "I then mapped everything onto something I called the “project Journey” which shows how a construction projects flows through all our customer types. ",
  },
];
const galleryItemsDesign = [
  {
    id: 1,
    imgURL: "/img/portfolio/knauf-account/detail-golden-circle-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-account/detail-golden-circle-mobile.png",
    headline: "Golden Circle",
    copy: "Before I could start building the digital ecosystem, I needed define a common understanding of our driving principle. I therefore created the infamous Golden Circle for our initiative.",
  },

  {
    id: 2,
    imgURL: "/img/portfolio/knauf-account/detail-flow-desktop.png",
    imgMobileURL: "/img/portfolio/knauf-account/detail-flow-mobile.png",
    headline: "User Flows",
    copy: "The next step was defining a general flow that works for all identified cases for the Knauf Account.",
  },
  {
    id: 3,
    imgURL: "/img/portfolio/knauf-account/detail-wireflow-desktop.png",
    imgMobileURL: "/img/portfolio/knauf-account/detail-wireflow-mobile.png",
    headline: "Login & Registration Wireflows",
    copy: "The Knauf Account is (literally) the key for the Knauf digital ecosystem, I mapped the user onboarding flow of the Knauf Account to be efficient and versatile for any identified case.",
  },
  {
    id: 4,
    imgURL: "/img/portfolio/knauf-account/detail-wireframes-desktop.png",
    imgMobileURL: "/img/portfolio/knauf-account/detail-wireframes-mobile.png",
    headline: "Account Wireframes",
    copy: "Based on the key insights and concepts I designed the Knauf Account wireframes for cross-app compatibility to drive the ecosystem idea, and for scalability to provide not only new apps an Account but also most legacy apps.",
  },
  {
    id: 5,
    imgURL: "/img/portfolio/knauf-account/detail-design-system-desktop.png",
    imgMobileURL:
      "/img/portfolio/knauf-account/detail-design-system-mobile.png",
    headline: "Design System",
    copy: "I analyzed the wireframes from this and all other products to destill the most common design artifacts. From that I built an atomic design system that keeps consistency and provides scalability.",
  },
  {
    id: 6,
    imgURL: "/img/portfolio/knauf-account/detail-template-desktop.png",
    imgMobileURL: "/img/portfolio/knauf-account/detail-template-mobile.png",
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
          headline="Unified Identity & Access Platform for 30+ Knauf Apps and Services."
          subline="Knauf Account is the single sign-on and customer identity platform powering the entire Knauf digital ecosystem."
        />{" "}
        <CaseImage imgURL="/img/portfolio/knauf-account/table.png" size="L" />
        <CaseSublineTwo subline="About Knauf" />
        <p>
          <b>Knauf</b> is a €15B global building materials manufacturer
          operating in more than 90 countries with various brands and companies.
          <br />
          <b>Knauf Digital</b> is the technology and innovation unit driving the
          digital transformation at scale; building digital ecosystems that
          connect contractors, dealers, and Knauf brands across markets. This is
          were I worked.
        </p>
        <CaseSublineTwo subline="Customer Types" />
        <p>
          <b>Dealer:</b> B2B partners who sell Knauf materials to construction
          companies and manage order logistics.
          <br />
          <b>Applicator:</b> Contractors, on-site professionals who plan,
          measure, and execute installations.
          <br />
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
          headline="A fragmented identity landscape blocking activation and scalability."
          subline="For decades, Knauf operated as a federation of brands in and across countries. Fragmented solutions, fragmented data, fragmented accounts."
        />
        <CaseImage
          imgURL="/img/portfolio/knauf-account/cover-problem.png"
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
        <CaseImageBlank
          imgURL="/img/portfolio/knauf-account/master-key.png"
          size="S"
        />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Research"
          headline="Understanding identity through ecosystems, not screens"
          subline="Identity isn’t a UI problem, it's an ecosystem problem."
        />
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
          headline="Designing the identity platform powering the Knauf ecosystem"
          subline="We approached the Knauf Account as a platform, not a feature, with foundations that support decades of future products."
        />
        <CaseVideo
          img="/img/portfolio/knauf-material-calculator/KOO.png"
          url="https://vimeo.com/1139365225?share=copy&fl=sv&fe=ci"
          size="L"
        />
        <p>
          <b>Scope decisions</b> Desktop-first; compatibility with new Knauf
          Apps vs legacy apps has priority; Localization is key
          <ul>
            <li>
              <b>SSO</b> One account for all products.
            </li>
            <li>
              <b>Team management</b> Give customers a team workspace with role &
              permission settings for each app.
            </li>
            <li>
              <b>Personalization</b> Provide customers personalized experiences
              and data.
            </li>
          </ul>
        </p>
        <CaseImage
          imgURL="/img/portfolio/knauf-account/cover-mobile-screens.png"
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
        <CaseSubline subline="Key Feature 1: One Account for All Knauf" />
        <CaseImage
          imgURL="/img/portfolio/knauf-account/feature-apps.png"
          size="L"
        />
        <CaseCopy copy="The core of the platform: One login. One profile. One company. One identity." />
        <br />
        <br />
        <CaseSublineTwo subline="Highlights" />
        <CaseHighlight
          headline="Single sign-on (SSO) across all Knauf apps"
          copy="Consolidation of dozens of legacy accounts. Migration path for old country-based systems. Stronger authentication + enterprise-grade security"
          imgURL="/img/portfolio/knauf-account/highlight-SSO.png"
          direction="LTR"
        />
        <CaseHighlight
          headline="Unified customer and company profiles"
          copy="Centralize all data, access, and service offerings on company and user level."
          imgURL="/img/portfolio/knauf-account/highlight-profiles.png"
          direction="RTL"
        />
        <br />
        <CaseSublineTwo subline="Impact" />
        <p>
          Customers now had one Knauf Account (instead dozens) for everything
          Knauf.
        </p>
        <ImpactBoxGrid
          items={[
            {
              impact: "50%",
              subline: "improved account activation across all connected apps",
            },
            {
              impact: "30%",
              subline: "reduced support requests",
            },
            {
              quote:
                "We used to manage ten different Knauf accounts across countries. Now it’s one login, and suddenly everything works the way it should.",
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
        <CaseSubline subline="Key Feature 2: Team Management & Permissions" />
        <CaseImage
          imgURL="/img/portfolio/knauf-account/feature-team.png"
          size="L"
        />
        <CaseCopy copy="A foundational capability for enterprise clients. A shared single source of truth, and the foundation for team collabiration on our platform." />
        <br />
        <br />
        <CaseSublineTwo subline="Highlights" />
        <CaseHighlight
          headline="Create and manage teams"
          copy="Create teams based on function, project, and location."
          imgURL="/img/portfolio/knauf-account/highlight-add-team.png"
          direction="LTR"
        />
        <CaseHighlight
          headline="Invite users or approve join requests"
          copy="Customers can invite team mates during onboarding or when creating projects, and manage join requests from their team mates."
          imgURL="/img/portfolio/knauf-account/highlight-requests.png"
          direction="RTL"
        />
        <CaseHighlight
          headline="Define roles & permissions per app"
          copy="Projects can have very sensistive data. Our customers can define clear roles and persmissions on what the team mates can do, and what they can see. On project level, location level, and app level."
          imgURL="/img/portfolio/knauf-account/highlight-permissions.png"
          direction="LTR"
        />

        <CaseSublineTwo subline="Impact" />
        <p>
          This turned Knauf Account into an enterprise-grade IAM (Identity and
          Access Management) layer.
        </p>
        <ImpactBoxGrid
          items={[
            { impact: "45%", subline: "reduced team onboarding time" },
            {
              impact: "2X",
              subline: "higher cross-app activation",
            },
            {
              quote:
                "Onboarding new colleagues went from days of emails to five minutes. It feels like we finally have a modern enterprise system.",
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
        <CaseSubline subline="Key Feature 3: Personalized Experiences & Pricing" />
        <CaseImage
          imgURL="/img/portfolio/knauf-account/feature-prices.png"
          size="L"
        />
        <CaseCopy copy="With a unified identity, personalization becomes possible. Prices and data are not just different from country to country. But also from customer to customer. Before, we were not able to provide prices because of this, now we can show everyone their exact, personalized prices." />
        <br />
        <br />
        <CaseSublineTwo subline="Highlights" />
        <CaseHighlight
          headline="Customer type → tailored experience"
          copy="The experience for every user is tailored to their customer type (specifier, applicator, dealer), so we can provide each user value asap."
          imgURL="/img/portfolio/knauf-account/highlight-personalization.png"
          direction="LTR"
        />
        <CaseHighlight
          headline="Country → localized content"
          copy="Not just marketing content. Products, construction requirements, regulations are very different in each country. This depends on the customers location, but also on the projects location."
          imgURL="/img/portfolio/knauf-account/highlight-content.png"
          direction="RTL"
        />
        <CaseHighlight
          headline="Company → personalized pricing"
          copy="Every customer negotiates different prices for different products or product categories; sometimes for each project. This can change every year. The Knauf account now enables us to show every customer the exact price for their project."
          imgURL="/img/portfolio/knauf-account/highlight-localization.png"
          direction="LTR"
        />

        <CaseSublineTwo subline="Impact" />
        <p>
          This powered activation loops across the ecosystem — users see “their
          Knauf,” not a generic interface.”
        </p>
        <ImpactBoxGrid
          items={[
            {
              impact: "3X",
              subline: "Better CRM data → better personalization",
              size: "M",
            },
            {
              impact: "20%",
              subline: "less service calls",
              size: "M",
            },
            {
              quote:
                "For the first time, prices, content, and data are consistent across countries and apps. This makes everything so much easier and faster!",
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
        <CaseSectionHead headline="Related Articles" />
        <Article
          headline="Generic User Onboarding kills your activation"
          subline="Treating every new user the same is costing you growth."
          meta="Alexandros Shomper for Bootcamp @ Medium.com"
          link="https://medium.com/design-bootcamp/generic-user-onboarding-kills-your-activation-a05e5ed751af"
          imgURL="https://miro.medium.com/v2/resize:fill:320:214/1*A2VnZ1dVEoqY_zKPbCtYjA.png"
        />
        <Article
          headline="Is the Customer always right? It depends …"
          subline="The phrase >the customer is always right< has been a staple in customer service for decades and has been influential as it has been…"
          meta="Alexandros Shomper for Bootcamp @ Medium.com"
          link="https://medium.com/design-bootcamp/is-the-customer-always-right-it-depends-e875f37a6786"
          imgURL="https://miro.medium.com/v2/resize:fill:320:214/1*gSIDo1Rac8EDR0fhsraNeA.png"
        />
        <Article
          headline="UX evangelism at Knauf"
          subline="An explainer presentation meant to introduce actionable concepts around UX and what it means for our organization."
          meta="Alexandros Shomper for Reforge @ Reforge.com"
          link="https://www.reforge.com/artifacts/ux-explainer-presentation-at-knauf"
          imgURL="https://cdn.sanity.io/images/pghoxh0e/production/17b7e5317001c34b57ad7f37166caae848166744-1062x597.png?w=2200&q=80&fit=max&auto=format"
        />
      </ArticleSectionContent>
    </ArticleSection>
  </>
);

export default createCasePage({
  metaTitle,
  metaDescription,
  eyebrow: "Knauf Account",
  eyebrowColor1: "#666677",
  eyebrowColor2: "#444455",
  title: "The Google Account for the construction industry",
  subline:
    "From fragmented identities to a unified access platform powering activation across the Knauf ecosystem.",
  hero,
  renderContent,
});
