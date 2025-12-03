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
import CaseImageBlank from "../../Content/Case/CaseImageBlank";

import CaseVideo from "../../Content/Case/CaseVideo";

const metaTitle = "Occhio website & eCommerce | Alexandros Shomper";

const metaDescription =
  "Digital Anthropologist. Experienced Product-, Service & Business Designer with demonstrated track record of successfully developing meaningful experiences that people love by using emerging technology, solid company purpose, and a strong brand to elevate human experiences and interactions.";

const hero = () => <CaseCover imgURL="/img/Occhio/Occhio-Website.png" />;

const galleryItemsDiscover = [
  {
    id: 1,
    imgURL: "/img/portfolio/occhio-website/Sigma.png",
    imgMobileURL: "/img/portfolio/occhio-website/Sigma.png",
    headline: "Market Research",
    copy: "We conducted a market research and used the Sigma Milieus as a framework to define our positioning and how to approach them.",
  },
  {
    id: 2,
    imgURL: "/img/Occhio/Personae.jpg",
    imgMobileURL: "/img/Occhio/Personae-mobile.png",
    headline: "Persona Development",
    copy: "Based on the market research and speaking directly with customers and sales teams I identified key personas based on Sigma Milieus of Social Climbers and the Established, understanding their values, needs, and behaviors.",
  },
  {
    id: 3,
    imgURL: "/img/Occhio/CustomerJourney.png",
    imgMobileURL: "/img/Occhio/CustomerJourney-mobile.png",
    headline: "User Journey Mapping",
    copy: "Visualized and prioritized user needs throughout their journey, addressing pain points such as difficulty in imagining products at home, getting an overview of available product variants, and fear of making wrong decisions.",
  },
];
const galleryItemsDesign = [
  {
    id: 3,
    imgURL: "/img/Occhio/Sitemap.png",
    imgMobileURL: "/img/Occhio/Sitemap-mobile.png",
    headline: "Sitemap and Navigation",
    copy: "Developed a comprehensive sitemap to guide user experience, SEO, social media strategy, and marketing. Designed navigation that catered to different mental models, allowing users to search by room, luminaire type, or specific products.",
  },
  {
    id: 4,
    imgURL: "/img/Occhio/PDP.png",
    imgMobileURL: "/img/Occhio/PDP-mobile.png",
    headline: "Product Detail Page Optimization",
    copy: "Initially used lavish renderings to impress users but pivoted to a more functional design with a mini-configurator for color and size, value proposition, price, and a buy button to enhance performance.",
  },
  {
    id: 5,
    imgURL: "/img/Occhio/AR.png",
    imgMobileURL: "/img/Occhio/AR-mobile.png",
    headline: "Interactive Features and AR",
    copy: "Implemented interactive components and animations to educate users about product features, making the process entertaining and informative. Introduced WebAR to help users visualize products in their own homes, addressing concerns about fit and placement, and reducing fear of making wrong decisions.",
  },
];

const renderContent = () => (
  <>
    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          headline="Bringing a Luxury Lighting Brand Online"
          subline="Transforming Occhio’s digital presence through a new website and integrated online shopping experience."
          overline="Overview"
        />
        <CaseImage
          imgURL="/img/portfolio/knauf-material-calculator/plasterboards.png"
          size="L"
        />
        <CaseSublineTwo subline="About Occhio" />
        <p>
          Occhio is a German luxury lighting design brand renowned for its
          perfectionism, high quality, and pure design aesthetic. Prior to this
          project, Occhio had an inspirational web presence but no direct online
          sales channel, relying on showrooms and partners for sales.
          <br />
        </p>
        <CaseSublineTwo subline="About the Customers" />
        <p>
          Through research, we identified two primary customer personas. One
          group values superior quality and distinctive design, while the other
          is status-driven and eager to showcase success. Despite their
          differences, both personas seek inspiration and confidence before
          purchasing high-end lighting solutions.
        </p>

        <CaseCitations
          role="Product Owner & UX Manager, European Market"
          team="Marketing (CRM, Social Media, Campaign), Sales, IT, Design Agency, Dev Agency"
          product="Website, eCommerce, product configurator, and partner finder"
          stage="0 →1"
          timeline="6 months"
          keyResults={[
            "Increased web traffic & engagement ↑",
            "Higher conversion rates ↑",
            "First-ever online revenue stream",
            "Multiple digital awards",
          ]}
        />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Challenge"
          headline="Occhio’s Digital Transformation Challenge"
          subline="How might we translate Occhio’s premium brand experience into a high-performing online platform?"
        />
        <CaseImage
          imgURL="/img/portfolio/occhio-website/Editorial.png"
          size="L"
        />
        <br />

        <CaseSubline subline="The Problem" />
        <CaseCopy copy="No Online Shopping & Lofty Brand Expectations – Occhio’s existing website did not allow direct purchasing, leading to customer frustration and lost sales. At the same time, the company’s redefined brand demanded an exceptional digital experience, setting a high bar for design, content, and performance." />
        <ul>
          <li>
            <b>No E-Commerce</b> Occhio had no direct online shop. Interested
            customers could not buy online, causing drop-offs and missed revenue
            opportunities.
          </li>
          <li>
            <b>Outdated Web Presence</b> The old website no longer aligned with
            Occhio’s new brand identity and luxury positioning, offering a
            subpar user experience.
          </li>
          <li>
            <b>High Brand Standards</b> The brand’s insistence on perfection and
            stunning visuals had to be balanced with usability and web
            performance; a difficult trade-off between form and function.
          </li>
          <li>
            <b>Complex Product Catalog</b> Occhio offers a wide range of
            modular, configurable lighting products spread across different
            systems. This made product discovery and understanding difficult for
            users on the old site.
          </li>
        </ul>
        <CaseSubline subline="The Goal" />
        <CaseCopy copy="Launch a World-Class Online Experience – Our mission was to build an engaging new Occhio website with e-commerce capabilities that meets business goals and delights users, without compromising the brand’s luxury image." />
        <ul>
          <li>
            <b>Align with New Brand Identity</b> Relaunch the website to reflect
            Occhio’s refreshed brand vision and premium design language.
          </li>
          <li>
            <b>Enable Online Sales</b> Introduce a full e-commerce platform to
            allow customers to explore and purchase Occhio products directly
            online.
          </li>
          <li>
            <b>Improve Discoverability</b> Make it easy for customers to find
            the right product by providing intuitive navigation and inspiring
            content that guides them in their buyer journey.
          </li>
          <li>
            <b>Unified Platform</b> Seamlessly integrate content and product
            data from multiple legacy systems into one smooth experience,
            especially for configuring Occhio’s modular products.
          </li>
          <li>
            <b>Optimize UX & Performance</b> Meet Occhio’s high aesthetic
            standards while ensuring the site is user-friendly and fast,
            providing rich visuals and features without sacrificing performance.
          </li>
        </ul>
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Research"
          headline="Understanding the Users & Market"
          subline="We grounded our design in research, uncovering who Occhio’s customers are and what they need from a digital experience."
        />
        <p>
          In the discovery phase, we conducted extensive market research and
          on-site user studies to inform our direction. I visited Occhio’s
          Munich flagship stores to observe and interview customers and sales
          staff. This hands-on research helped us empathize with our luxury
          lighting buyers and validate our assumptions.
          <br />
          <i>
            We discovered clear patterns in customer motivations and pain
            points, which directly shaped our design strategy.
          </i>
        </p>
        <br />
        <br />
        <br />
        <CaseSubline subline="Key Insights" />
        <ul>
          <li>
            <b>Two Core Personas</b> We identified two key customer types – one
            being a design-conscious connoisseur who values quality and timeless
            design, and the other a status-driven achiever who wants to showcase
            success. Both personas expect a premium experience; they want to
            feel inspired and informed before committing to a purchase.
          </li>
          <li>
            <b>Need for Inspiration</b> Customers often start with vague ideas.
            They crave inspirational content (e.g. beautiful room photos, style
            guidance) to envision how Occhio’s products could fit into their
            lives. This inspiration builds the emotional confidence needed to
            buy luxury items.
          </li>
          <li>
            <b>Visualization Challenges</b> A major pain point was that shoppers
            struggled to imagine the products in their own space. Without seeing
            a fixture in context or at scale, they felt uncertain. This gap
            often kept them from moving forward in the funnel.
          </li>
          <li>
            <b>Information Overload</b> Occhio’s catalog is expansive – many
            product variants, configurations, and technical details. Customers
            found it hard to get an overview of available options and compare
            them. This could lead to decision paralysis.
          </li>
          <li>
            <b>Fear of Wrong Decisions</b> Given the high price point, customers
            feared making a mistake (choosing the wrong product or
            configuration). They desired guidance and reassurance during the
            buying process to feel secure in their choice.
          </li>
        </ul>
        <br />
        <br />
        <Drawer
          items={galleryItemsDiscover}
          label="Research Process Deepdive"
        />{" "}
      </ArticleSectionContent>
    </ArticleSection>
    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Solution"
          headline="Design & Implementation"
          subline="We adopted an agile, collaborative approach to craft a digital experience that marries Occhio’s high-end brand with user-centered functionality."
        />

        <CaseVideo
          img="/img/portfolio/knauf-material-calculator/KMC.png"
          url="https://vimeo.com/517069531?share=copy&fl=sv&fe=ci"
          size="L"
        />
        <CaseSubline subline="Approach" />
        <p>
          From the outset, we partnered with specialized agencies to ensure
          top-quality execution. I coordinated closely with Martin et Karczinski
          (Occhio’s brand design agency) to translate the refreshed brand
          identity into the digital space, and with Inviqa (technology
          consultants) to implement a robust platform. We embraced an agile
          methodology – working in sprints, iterating on feedback, and
          continuously aligning the design with technical feasibility. This
          approach allowed us to remain flexible and responsive to insights
          throughout the project.
        </p>
        <CaseSubline subline="Scope & Key Decisions" />
        <p>
          Given the ambitious 6-month timeline, we focused on high-impact
          deliverables. Early in the design phase, we decided to pivot away from
          an overly ornamental approach – replacing heavy full-screen renderings
          with a more functional yet elegant design that improved performance.
          We prioritized building out critical features: a new navigation
          scheme, a configurable product detail page, and interactive tools like
          AR. These choices ensured we delivered a polished experience that was
          both beautiful and effective. Every feature was evaluated against
          Occhio’s core question: “Does it inspire confidence and delight for
          our luxury customer?” If not, we refined or cut it to keep the
          experience streamlined.
        </p>
        <CaseImage
          imgURL="/img/portfolio/knauf-material-calculator/cover-mobile-screens.png"
          size="L"
        />
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
        <CaseSubline subline="Key Feature 1: Inspirational, User-Centric Navigation" />
        <CaseImageBlank
          imgURL="/img/portfolio/occhio-website/Navigation-Tablet.png"
          size="L"
        />

        <CaseCopy copy="An intuitive navigation system catering to different user approaches (browse by room, by product type, or directly search). This feature helps both the design-savvy user and the goal-oriented shopper find what they need easily, greatly improving product discoverability." />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CaseSubline subline="Key Feature 2: Modular Product Configurator" />
        <CaseImage
          imgURL="/img/portfolio/occhio-website/Configurator.png"
          size="L"
        />
        <CaseCopy copy="On each product page, users can customize their chosen light (e.g. select finishes, sizes, configurations) and see the result in real-time. This interactive configurator simplifies complex product options and makes the selection process engaging – leading to more confident buying decisions and fewer surprises after purchase." />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CaseSubline subline="Key Feature 3: Integrated Online Store" />
        <CaseImage
          imgURL="/img/portfolio/occhio-website/PDP-Performance.png"
          size="L"
        />
        <CaseCopy copy="We implemented Occhio’s first end-to-end e-commerce functionality. Users can seamlessly go from inspiration and product discovery to checkout on the same site. The shopping cart, wishlist, and checkout processes were designed to be straightforward and reassuring for luxury shoppers (including options for consulting with an Occhio specialist). This new online sales channel started capturing revenue that was previously untapped – within the first year, online orders comprised around 5% of Occhio’s total revenue, with significant potential to grow." />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseSectionHead
          overline="Results"
          headline="A Bright Future: Awards and Engagement Soar"
          subline="The relaunch created an immersive digital showcase for Occhio, delighting customers and earning industry acclaim."
        />
        <p>
          The new Occhio website and online shop have been a resounding success.
          The relaunch resulted in a highly engaging, visually stunning website
          that seamlessly merges Occhio’s refined brand aesthetic with a modern
          user experience. Customers responded enthusiastically to the richer
          content and features – they now spend more time exploring products and
          feel more confident in making purchases online. The addition of
          e-commerce not only filled a critical gap in the customer journey, but
          it also unlocked a new revenue stream for the company. Importantly,
          all these improvements were achieved without sacrificing Occhio’s
          brand values; in fact, the digital experience has only strengthened
          the brand’s reputation for innovation and quality.
        </p>
        <ul>
          <li>
            <b>Industry Recognition</b> The project earned top industry awards,
            including a Gold – Annual Multimedia Award 2020 and a Splash Award
            2020 for digital excellence.
          </li>
          <li>
            <b>Higher Conversion Rate</b> More website visitors are converting
            into customers than before, thanks to easier shopping and
            better-informed users (exact figures are confidential, but
            conversion saw a significant uplift).
          </li>
          <li>
            <b>Increased User Engagement</b> Users interact with the site’s
            content and features at a much higher rate. Time-on-site and product
            page views per session have grown, indicating that the experience is
            both captivating and informative.
          </li>
          <li>
            <b>Growth in Visitors</b> The website has attracted significantly
            more traffic post-relaunch, driven by improved SEO from the new site
            structure and an uptick in organic sharing of Occhio’s inspiring
            content.
          </li>
          <li>
            <b>Newsletter Sign-ups Up</b> More visitors are signing up for the
            Occhio newsletter and product updates, boosting the brand’s CRM and
            remarketing efforts (a sign that the site is effective in building
            ongoing interest).
          </li>
          <li>
            <b>New Revenue Channel</b> Online sales now account for roughly 5%
            of Occhio’s total revenue, where previously it was virtually 0%.
            This share is continuing to grow, demonstrating the long-term
            business value of the e-commerce launch.
          </li>
        </ul>
        <p>
          With this relaunch, Occhio successfully transitioned into the digital
          commerce space while elevating its brand. The company now provides the
          same level of excellence online as it does in-store, setting a strong
          foundation for future growth in an omnichannel world. The case study
          stands as an example of how thoughtful research, user-centric design,
          and cross-team collaboration can transform a luxury brand’s digital
          fortunes.
        </p>
      </ArticleSectionContent>
    </ArticleSection>
  </>
);

export default createCasePage({
  metaTitle,
  metaDescription,
  eyebrow: "Occhio Website & eCommerce",
  eyebrowColor1: "#666677",
  eyebrowColor2: "#444455",
  title: "A premium user experience",
  subline:
    "From a static brochure site to a dynamic online storefront, translating Occhio’s luxury lighting experience into a seamless digital journey.",
  hero,
  renderContent,
});
