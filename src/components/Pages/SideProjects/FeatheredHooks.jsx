import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useInView } from "react-intersection-observer";

//Components
import { Colors, Devices } from "../../DesignSystem";
import { mdiOpenInNew } from "@mdi/js";

import CaseSectionHead from "../../Content/Case/CaseSectionHead";

import CaseCopy from "../../Content/Case/CaseCopy";
import CaseCover from "../../Content/Case/CaseCover";
import CaseImage from "../../Content/Case/CaseImage";
import CaseSublineTwo from "../../Content/Case/CaseSublineTwo";
import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";

import CaseHeadlineTwo from "../../Content/Case/CaseHeadlineTwo";
import CaseSubline from "../../Content/Case/CaseSubline";
import CaseCard from "../../Content/CaseCard/CaseCard";

import ButtonMedium from "../../Button/ButtonMedium";

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            staggerChildren: 0.3,
          },
        },
        hidden: {
          opacity: 0,
          scale: 0.8,
          y: "+25%",
        },
      }}
    >
      {children}
    </motion.div>
  );
}

const Content = (props) => {
  const Content = styled.div`
    text-align: left;
    margin-top: 72px;
  `;

  const Section = styled.section`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    /* Inside Auto Layout */

    align-self: stretch;
    flex-grow: 0;
  `;

  const Paragraph = styled.section`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    /* Inside Auto Layout */
    align-self: stretch;
    flex-grow: 0;
    margin-bottom: 140px;
  `;

  const CaseUnorderedList = styled.ul`
    position: static;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    color: ${Colors.primaryText.highEmphasis};

    list-style-type: none;
    list-style-image: none;

    list-style-position: outside;
    padding-left: 0px;

    /* Inside Auto Layout */

    font-size: 24px;
    line-height: 160%;

    margin: 0 auto;
    width: 90%;

    ${Devices.tabletS} {
      width: 564px;
    }
    ${Devices.tabletM} {
      width: 708px;
    }
    ${Devices.laptopS} {
      width: 740px;
    }
  `;

  const CaseCardGrid = styled.section`
    margin: 0px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 24px;
    margin-bottom: calc(-1 * var(--gap));

    & > * {
      margin-left: var(--gap);
      margin-bottom: var(--gap);
    }

    ${Devices.tabletS} {
      width: 564px;
    }
    ${Devices.tabletM} {
      width: 708px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    ${Devices.laptopS} {
      width: 852px;
    }
    ${Devices.laptopM} {
      width: 1140px;
    }
  `;

  return (
    <Content>
      <Helmet>
        <meta charSet="utf-8" />
        <title>myKnauf | Alexandros Shomper</title>
        <description>
          Digital Anthropologist. Experienced Product-, Service & Business
          Designer with demonstrated track record of successfully developing
          meaningful experiences that people love by using emerging technology,
          solid company purpose, and a strong brand to elevate human experiences
          and interactions.
        </description>
      </Helmet>
      <Section>
        <CaseTitleEyebrow
          text={"Side Project"}
          color1="#00b8d4"
          color2="#62ebff"
        />
        <CaseTitle
          headline={"Feathered Hooks: The subtle art of Topical Authority"}
        />
        <CaseCover imgURL="./img/FeatheredHooks/CoverFeatheredHooks.png" />
        <br />
        <br />
        <br />
        <br />

        <br />
        <ButtonMedium
          text="Visit Feathered Hooks"
          href="https://featheredhooks.com"
          color1={Colors.green}
          color2={Colors.greenDark}
          icon={mdiOpenInNew}
        />
        <br />
        <br />
        <CaseSectionHead
          headline="Hello, fellow fly fishing enthusiasts or Marketing adventurers! Today, I'm excited to introduce you to a new side project of mine, the 'Feathered Hooks' blog."
          subline="This isn't just a fly fishing blog, mind you - it's an experiment in SEO Topical Authority. What's that, you ask? Well, grab your favorite fishing hat, and let's dive in."
        />
        <CaseSublineTwo subline={"But before we start, a little background…"} />
        <br />
        <CaseSublineTwo
          subline={
            "When I started flyfishing in 2020 I was lucky. It was during Covid Lockdown, me my brother and 5 of our friends decided to start flyfishing."
          }
        />
        <br />
        <CaseSublineTwo
          subline={
            "Why I was lucky? We hade another friend, Scottish, who was already flyfishing since he was a kid. We basically had our own private instructor."
          }
        />
        <br />
        <CaseSublineTwo
          subline={
            "Still, it was hard to find a single source for this information. I had to search on Google & YouTube for everything… so did my brother and my 5 friends… That was when I first thought: “Let’s build what I was looking for!”"
          }
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <Paragraph>
          <CaseHeadlineThree headline={"At a glance"} />
          <CaseUnorderedList>
            <li>Digital Strategy</li>
            <li>Information Architecture</li>
            <li>Roadmap</li>
            <li>Digital Branding</li>
          </CaseUnorderedList>
       </Paragraph>*/}
        <Paragraph>
          <CaseHeadlineTwo headline={"The Hook: SEO Topical Authority"} />
          <CaseSubline
            subline={"Why start with SEO at all for a niche blog? "}
          />
          <CaseCopy
            copy={
              "Well, the answer is simple: SEO is the most sustainable way to grow a blog. It's a long-term strategy that can help you attract a steady stream of organic traffic over time."
            }
          />
          <CaseImage imgURL="./img/FeatheredHooks/SEOvsPPC.png" size="M" />
          <CaseUnorderedList
            style={{ marginBottom: "24px", listStyleType: "circle" }}
          >
            <li>
              <b>Economic Value:</b> SEO is low cost, even if it is high effort.
              You can build something up, and it pays interest. SEO is an
              investment, where as PPC is an expense – stop paying, stop getting
              traffic.
            </li>
            <li>
              <b>User Value:</b> SEO only works with good content, good IA, and
              good UX. Especially when providing information is the key goal,
              SEO is not only a traffic source, but a guide to a good solution
              for your users.
            </li>
          </CaseUnorderedList>
          <br />
          <CaseSubline subline={"What is Topical Authority?"} />
          <CaseCopy
            copy={
              "Let's talk about SEO Topical Authority. It's the credibility and expertise a website has on a specific topic or niche. In my case, that topic is fly fishing - a niche within a niche. Google and other search engines love sites with topical authority. "
            }
          />
          <CaseCopy
            copy={
              "They see them as trustworthy sources of information, which can lead to improved search engine rankings. Gaining topical authority can significantly improve a website's search engine ranking for any queries related to that topic - even if your website is not necessarily optimized for them."
            }
          />
          <CaseCopy
            copy={
              "And who doesn't like being at the top of the search results, right?"
            }
          />
          <br />
          <br />
          <CaseCopy
            copy={
              "From my perspective, the best way to approach Topical Authority is Topic Clusters. A clear framework and structure makes everything easier."
            }
          />
          <CaseImage imgURL="./img/FeatheredHooks/TopicClusters.png" size="M" />
          <br />
          <CaseCopy
            copy={
              "Topic Clusters help achieve Topic Authority in SEO by organizing related content around a central topic, enhancing the site's relevance and expertise in that subject area. They create a structured site architecture that's easy for search engines to crawl, boosting SEO. Additionally, interlinking the clustered content increases internal link value, further improving search rankings."
            }
          />
          <CaseCopy
            copy={
              "Ideally those Topic Clusters make sense to your visitors aswell, so they can sort it in their mind. Therefor I prefer to take Mental Models with clear intent as the first Cluster - the Top Level Topic Clusters. But I’ll come to them later."
            }
          />
          <br />
          <ButtonMedium
            text="Visit Feathered Hooks"
            href="https://featheredhooks.com"
            color1={Colors.green}
            color2={Colors.greenDark}
            icon={mdiOpenInNew}
          />
        </Paragraph>
        <Paragraph>
          <CaseHeadlineTwo headline={"The Bait: Content Strategy"} />
          <CaseSubline subline={"Why Flyfishing?"} />
          <CaseCopy
            copy={
              "To be honest, it is not the biggest topic. It is niche inside a niche. But as I said at the beginning, aside from the fact that it's a fantastic hobby, it is hard to find one place to get all the information you need about this beautiful activity. "
            }
          />
          <CaseCopy
            copy={
              "However, there are some benefitial attributes in fly fishing content:"
            }
          />
          <CaseUnorderedList style={{ marginBottom: "24px" }}>
            <li>
              <b>Evergreen Content:</b> Fly fishing is a timeless topic. An
              evergreen forest. The basics of fly fishing have remained the same
              for centuries, so content doesn't become outdated quickly -
              compare that to the digital marketing or product space, where
              every month the landscape changes.
            </li>
            <li>
              <b>Topics are interconnected.:</b> It’s like asking a consultant a
              question. Everything depends. Which means, everything is connected
              (almost). What fly you need, depends on the season, weather, fish,
              type of water, rod & line. Vice versa.
            </li>
            <li>
              <b>High Engagement:</b> Fly fishing is a passion for many people.
              They love to read about it, watch videos, and engage with other
              enthusiasts.
            </li>
            <li>
              <b>Low Competition:</b> Fly fishing is a niche topic, so there's
              less competition for keywords and search rankings.
            </li>
          </CaseUnorderedList>
          <br />
          <ButtonMedium
            text="Visit Feathered Hooks"
            href="https://featheredhooks.com"
            color1={Colors.green}
            color2={Colors.greenDark}
            icon={mdiOpenInNew}
          />
        </Paragraph>
        <Paragraph>
          <CaseHeadlineTwo headline={"The Line: Tactics"} />
          <CaseSubline subline={"Mental Models"} />
          <CaseCopy
            copy={
              "Mental models are closely related to intents (commercial, informative, transactional). The formulation is from the perspective of the visitor, with a clear intent of what their goal is."
            }
          />
          <CaseCopy
            copy={
              "This does not mean a visitor only has one mental model when they are on the website. However, their search query in google will most likely fall into one of those. "
            }
          />
          <CaseCopy copy={"And that are my Top Level Content Clusters:"} />
          <CaseUnorderedList
            style={{ marginBottom: "24px", listStyleType: "circle" }}
          >
            <li>I want to know → Learn fly fishing</li>
            <li>I want to go → Fly fishing trips</li>
            <li>I want to do → Fly fishing guides</li>
            <li>I want to buy → Fly fishing shop</li>
          </CaseUnorderedList>
          <CaseImage
            imgURL="./img/FeatheredHooks/TopLevelClusters.png"
            size="M"
          />
          <br />
          <br />
          <br />
          <CaseSubline subline={"Content First"} />
          <CaseCopy
            copy={
              "The focus is on the content. Writing and rewriting as much quality content as possible."
            }
          />
          <CaseCopy
            copy={
              "It is not the time to personalize the website. The design should not be a disaster, but it is secondary. UX is important to rank on Google, as is Structure, and Tech setup & performance. Without that, the content can be as good as I want, it won’t hit the mark. "
            }
          />
          <CaseCopy
            copy={
              "But that is a given nowadays, most basic templates and some plugins will do the trick. "
            }
          />
          <CaseCopy
            copy={
              "The goal is to create content templates within the topic clusters. When you improve one instance, improve every instance. "
            }
          />
          <CaseCopy
            copy={
              "Make the content as interconnected as possible when writing it, link within one clusters, and between clusters as much as it makes sense - create a Topic Graph in your website for google."
            }
          />
          <br />
          <CaseSubline subline={"Start Small"} />
          <CaseCopy
            copy={
              "It it less challenging to rank well for numerous easier content clusters than to strive for a high rank with a single, more complex content cluster with lots of competition. Google will recognize the topical area."
            }
          />
          <CaseImage imgURL="./img/FeatheredHooks/StartSmall.png" size="M" />
          <CaseCopy
            copy={
              "I began by selecting small and easy content. The most manageable Top Level Cluster for me was 'I want to know' as it was primarily information-based. Within this cluster, I identified the simplest Sub Content Cluster to focus on. Feel free to sort the topics, that’s the road map right there."
            }
          />
          <CaseCopy
            copy={
              "I now work on these clusters, enhancing them until they achieve good ranks - bit by bit. This process is a learning curve for what each cluster really needs."
            }
          />
          <CaseCopy
            copy={
              "Once the easier content clusters achieve good ranks, I can tackle the more challenging, competitive content clusters."
            }
          />

          <br />

          <CaseSubline subline={"Be useful"} />
          <CaseCopy
            copy={
              "Topical Authority is established by consistently creating high-quality, comprehensive content on specific topics, thereby demonstrating to both users and search engines that the site is a trustworthy source of information in that field."
            }
          />
          <CaseCopy
            copy={
              "The goal is to provide the best possible answer to the user's query. This means creating content that is informative, engaging, and easy to understand."
            }
          />
          <CaseCopy
            copy={
              "Think in-depth content research, keyword research, information architecture, and expert collaborations. "
            }
          />

          <CaseImage imgURL="./img/FeatheredHooks/SERP.png" size="M" />
          <CaseCopy
            copy={
              "Considering condensed information format of the content, that can be displayed in FAQ & tables making it Search Engine Results Page (SERP) snippet-friendly."
            }
          />
          <br />
          <ButtonMedium
            text="Visit Feathered Hooks"
            href="https://featheredhooks.com"
            color1={Colors.green}
            color2={Colors.greenDark}
            icon={mdiOpenInNew}
          />
        </Paragraph>
        <Paragraph>
          <CaseHeadlineTwo headline={"The Reel: Methods & Techstack"} />
          <CaseCopy
            copy={
              "Time to reel in the audience using keyword research, SEO optimization. For this experiment I'll use free tools like Google Ads Keyword Planner for keyword research, Google Search Console for tracking performance, and free plan of SEObility for structural and technical analysis"
            }
          />
          <CaseUnorderedList
            style={{ marginBottom: "24px", listStyleType: "circle" }}
          >
            <li>Content & Keyword Research</li>
            <li>Templates</li>
            <li>Onpage optimization</li>
          </CaseUnorderedList>
          <br />
          <CaseSubline subline={"Content & Keyword Research:"} />
          <CaseCopy
            copy={
              "I picked “I want to know” as my first Top Level Cluster (and I’d suggest everyone to do the same).  I started from my notes, and my thoughts & questions I already had. "
            }
          />
          <CaseCopy
            copy={"For instance, one topic would be: Flyfishing for trout. "}
          />
          <CaseUnorderedList
            style={{ marginBottom: "24px", listStyleType: "circle" }}
          >
            <li>How to fly fish for trout?</li>
            <li>What is the best fly fishing rod for trout?</li>
            <li>What is the best fly fishing line for trout?</li>
            <li>What is the best fly fishing reel for trout?</li>
            <li>What is the best fly fishing flies for trout?</li>
          </CaseUnorderedList>

          <CaseCopy
            copy={
              "This is the starting point to do the research., it is basically 3 steps: "
            }
          />
          <CaseUnorderedList
            style={{ marginBottom: "24px", listStyleType: "circle" }}
          >
            <li>
              <b>Google Ads Keyword Planer:</b> I pick these question and some
              generic search queries for “Flyfishing for trout” and go into
              Google Ads Keyword Planer. This gave me a list of other relevant
              search queries, incl. search volume and difficulty.
            </li>
            <li>
              <b>Google Search:</b>
              With the list from Google Ads keyword Planer I then go to Google,
              enter the search queries and take notes of the Top URLs &
              Snippets..
            </li>
            <li>
              <b>Repeat:</b> Back to Google Ads Keyword Planer with the new
              search queries from Google Search.
            </li>
          </CaseUnorderedList>
          <br />
          <br />
          <CaseSubline subline={"Templates"} />
          <CaseCopy
            copy={
              "Topic clusters have the benefit, that it’s content  often cover similar questions. This makes it easy to create templates. This not only helps enrich the articles with each iteration of a template instance, the repeatable structure also helps your visitors to jump from one article to the other, knowing what to expect. "
            }
          />
          <CaseCopy
            copy={
              "Theses template are the foundation of the content. It helps me to stay focused, to write consistently, and to create content that is easy to read and understand."
            }
          />
          <CaseCopy copy={"This is a generic template I use:"} />
          <CaseUnorderedList
            style={{ marginBottom: "24px", listStyleType: "circle" }}
          >
            <li>
              <b>Headline</b> The main title of the article, which should be the
              article in 1 sentence
            </li>
            <li>
              <b>Introduction</b> A brief introduction to the topic, explaining
              what it is and why it's important.
            </li>
            <li>
              <b>Page directory</b> A list of the main sections of the article,
              with links to each section.
            </li>
            <li>
              <b>TL;DR (Optional)</b> A summary of the key points covered in the
              article.
            </li>
            <li>
              <b>Body</b> The main content of the article. Topic Cluster
              specific W-question chapters (this is what we use the content &
              keyword research for and iterate).
              <ol>
                <li style={{ marginLeft: "24px" }}>
                  Salmon and their food (What do I need to know about salmon?
                  What do they eat?)
                </li>
                <li style={{ marginLeft: "24px" }}>
                  The right equipment for salmon flyfishing (What equipment do i
                  need?)
                </li>
                <li style={{ marginLeft: "24px" }}>
                  Waters for salmon flyfishing (Where can I find salom?)
                </li>
                <li style={{ marginLeft: "24px" }}>
                  Salmon season (When is the best season to flyfish for salmon?)
                </li>
              </ol>
            </li>
            <li>
              <b>Tips for beginners</b> Summary of entry-level tips
            </li>
            <li>
              <b>FAQ</b> Frequently asked questions about the topic, sourced
              from Google suggestions
            </li>
            <li>
              <b>Conclusion</b> A summary of the key points covered in the
              article, along with any final thoughts or recommendations.
            </li>
          </CaseUnorderedList>
          <br />

          <CaseCopy
            copy={
              "With this template, the jump to the series is easy. Flyfishing for Bass, Flyfishing for Pike, Flyfishing for Seatrout, etc."
            }
          />
          <CaseCopy
            copy={
              "With each new article in the series, I do the same keyword and content research. Refining the template for all articles in the series with each iteration."
            }
          />
          <CaseSubline subline={"Onpage Optimization"} />
          <CaseCopy
            copy={
              "This is routine for SEO. Keyword optimizing the content & Meta Information. The main keyword is the articles topic. The secondary keywords are from the notes I made from Google Ads Keyword Planer and Google Search."
            }
          />
          <CaseCopy
            copy={
              "The key is to have a balance between optimizing the content for Google to have it rank well, but also engaging enough so that users click, and then also read the article (otherwise the rank sinks)"
            }
          />
          <CaseSubline subline={"Tech Stack"} />
          <CaseUnorderedList
            style={{ marginBottom: "24px", listStyleType: "circle" }}
          >
            <li>
              <b>WordPress:</b> The CMS of choice. It is easy to use, has a lot
              of plugins, and is SEO friendly.
              <li style={{ marginLeft: "20px" }}>
                SEO Plugins
                <li style={{ marginLeft: "20px" }}>
                  RankMath / Yoast: SEO Onpage Optimization
                </li>
                <li style={{ marginLeft: "20px" }}>IndexNow</li>
                <li style={{ marginLeft: "20px" }}>Broken Link Checker</li>
                <li style={{ marginLeft: "20px" }}>Internal Link Juicer</li>
              </li>
              <li style={{ marginLeft: "20px" }}>
                Performance Plugins
                <li style={{ marginLeft: "20px" }}>JetPack</li>
                <li style={{ marginLeft: "20px" }}>
                  Async Javascript (Loading Performance)
                </li>
                <li style={{ marginLeft: "20px" }}>WebP Upload</li>
              </li>
            </li>
            <li>
              <b>Google Ads Keyword Planer</b> for keyword research
            </li>
            <li>
              <b>Google Search Console</b> for tracking performance
            </li>
            <li>
              <b>Google Search</b> for suggestions and snippet research
            </li>
            <li>
              <b>SEObility</b> for structural and technical analysis
            </li>
          </CaseUnorderedList>
          <br />
          <ButtonMedium
            text="Visit Feathered Hooks"
            href="https://featheredhooks.com"
            color1={Colors.green}
            color2={Colors.greenDark}
            icon={mdiOpenInNew}
          />
        </Paragraph>
        <Paragraph>
          <CaseHeadlineTwo headline={"The Release: Go-to-Market Plan"} />
          <CaseCopy
            copy={
              "For the first 3 months, we'll be focusing on content creation, structure, and technical optimization. "
            }
          />
          <CaseUnorderedList style={{ marginBottom: "24px" }}>
            <li>
              <b>Months 1–3:</b> Basic setup, base content, structure and
              technical optimization.
            </li>
            <li>
              <b>Month 4–6:</b> Iterate and reinforce existing content.
            </li>
            <li>
              <b>Month 7–9:</b> Start second Top Level Cluster.
            </li>
            <li>
              <b>Month 10–12:</b> Focus on community engagement and
              collaboration with other blogs
            </li>
          </CaseUnorderedList>
          <CaseCopy
            copy={
              "And that's the grand plan for the Feathered Hooks experiment. It's not just about the catch; it's about the journey, the learning, and the community."
            }
          />
          <CaseImage imgURL="./img/FeatheredHooks/GTM.png" size="M" />
          <br />
          <br />
          <ButtonMedium
            text="Visit Feathered Hooks"
            href="https://featheredhooks.com"
            color1={Colors.green}
            color2={Colors.greenDark}
            icon={mdiOpenInNew}
          />
        </Paragraph>
        <Paragraph>
          <CaseSectionHead headline={"Other Projects"} />
          <CaseCardGrid>
            <FadeInWhenVisible>
              <CaseCard
                eyebrow="Case Study"
                eyebrowColor2="#231768"
                eyebrowColor1="#10d5f5"
                headline="Knauf Digital Transformation & Business Design"
                copy="Knauf want's to explore the opportunities of digitizing the construction business by rapidly developing validated product & business ideas"
                imgURL="./img/Knauf/CoverKnaufTransformation.png"
                link="/knauf-explorations"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <CaseCard
                eyebrow="Case Study"
                eyebrowColor2="#231768"
                eyebrowColor1="#10d5f5"
                headline="myKnauf: Building a global construction app platform"
                copy="Knauf want's to explore the opportunities of digitizing the construction business by rapidly developing validated product & business ideas"
                imgURL="./img/Knauf/CoverMyKnauf.png"
                link="/myKnauf"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <CaseCard
                eyebrow="Deep Dive"
                eyebrowColor2="#231768"
                eyebrowColor1="#10d5f5"
                headline="Product Analytics: How to analyze and define retention & engagement metrics for an app platform"
                copy="Knauf want's to explore the opportunities of digitizing the construction business by rapidly developing validated product & business ideas"
                imgURL="./img/Knauf/CoverProductAnalytics.png"
                comingSoon="true"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <CaseCard
                eyebrow="Deep Dive"
                eyebrowColor2="#231768"
                eyebrowColor1="#10d5f5"
                headline="User Acquisition: How to develop a marketing messaging framework for an app platform"
                copy="Knauf want's to explore the opportunities of digitizing the construction business by rapidly developing validated product & business ideas"
                imgURL="./img/Knauf/CoverUserAcquisition.png"
                comingSoon="true"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <CaseCard
                eyebrow="Deep Dive"
                eyebrowColor2="#231768"
                eyebrowColor1="#10d5f5"
                headline="Signups: How to increase signups with user psychology and data analysis"
                copy="Increasing signups for Knauf Account. Reducing signup friction by applying user psychology on registration flows."
                imgURL="./img/Knauf/CoverSignup.png"
                link="/knauf-account"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <CaseCard
                eyebrow="Deep Dive"
                eyebrowColor2="#231768"
                eyebrowColor1="#10d5f5"
                headline="User Retention: How to increase user engagement & activation by analyzing featuer adoption"
                copy="Increasing user engagement & activation for Knauf Digital's app. An unexpected finding: a neglected feature used by 7% of users, accounting for 20% of total traffic."
                imgURL="./img/Knauf/CoverUserRetention.png"
                link="/knauf-orderoverview"
              />
            </FadeInWhenVisible>
          </CaseCardGrid>
          <br />
          <ButtonMedium
            text="Visit Feathered Hooks"
            href="https://featheredhooks.com"
            color1={Colors.green}
            color2={Colors.greenDark}
            icon={mdiOpenInNew}
          />
        </Paragraph>
      </Section>
    </Content>
  );
};

export default Content;
