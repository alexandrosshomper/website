import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useInView } from "react-intersection-observer";
import Trend from "react-trend";

//Components
import BlackQuote from "../../Content/BlackQuote/BlackQuote";
import Intro from "../../Content/Intro/Intro";
import ListBigText from "../../Content/List/ListBigText/ListBigText";
import ListPanel from "../../Content/List/ListPanel/ListPanel";
import ListSmallText from "../../Content/List/ListSmallText/ListSmallText";
import SectionHead from "../../Content/Section/SectionHead";
import { Colors, Devices } from "../../DesignSystem";
import FlipCard from "../../Content/FlipCard/FlipCard";
import CaseUnorderdList from "../../Content/Case/CaseUnorderedList";
import CaseUnorderedList from "../../Content/Case/CaseUnorderedList";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import { mdiReminder } from "@mdi/js";
import SectionCopy from "../../Content/Section/SectionCopy";
import SectionDivider from "../../Content/Section/SectionDivider";

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

function MoveUpWhenVisible({ children }) {
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
      transition={{ duration: 0.6 }}
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
        hidden: {
          opacity: 0,
          scale: 0.8,
          y: "+100%",
          transition: {
            when: "afterChildren",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

function RevealWhenVisible({ children }) {
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
      transition={{ duration: 0.9 }}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
        hidden: {
          opacity: 0,
          x: "5%",
          transition: {
            when: "afterChildren",
          },
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
    flex: none;
    order: 3;
    align-self: stretch;
    align-items: stretch;
    flex-grow: 0;
    margin-bottom: 200px;
    ${Devices.tabletS} {
      align-items: center;
    }
  `;

  const CardPanels = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: auto;
    justify-content: flex-start;
    align-content: center;
    align-items: flex-start;
    --gap: 12px;
    margin-left: calc(1.6 * var(--gap));
    margin-right: calc(1.6 * var(--gap));
    margin-bottom: calc(1 * var(--gap));

    ${Devices.tabletS} {
      width: 576px;
      margin-left: calc(-1 * var(--gap));
      margin-right: 0px;
      margin-bottom: calc(-1 * var(--gap));

      & > * {
        margin-left: var(--gap);
        margin-bottom: var(--gap);
      }
      & > * :last-child {
        margin-bottom: 0px;
      }
    }
    ${Devices.tabletM} {
      width: 720px;
      flex-direction: row;
    }
    ${Devices.laptopS} {
      width: 864px;
    }
    ${Devices.laptopM} {
      width: 1152px;
    }
  `;
  const FlipCardPanels = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: auto;
    justify-content: flex-start;
    align-content: center;
    align-items: flex-start;
    --gap: 12px;
    margin-left: calc(1.6 * var(--gap));
    margin-right: calc(1.6 * var(--gap));
    margin-bottom: calc(1 * var(--gap));

    ${Devices.tabletS} {
      width: 576px;

      margin-bottom: calc(-1 * var(--gap));
      flex-wrap: nowrap;
      gap: 12px;
    }
    ${Devices.tabletM} {
      width: 720px;
    }
    ${Devices.laptopS} {
      width: 864px;
    }
    ${Devices.laptopM} {
      width: 1152px;
    }
  `;
  const Polaroids = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
    column-gap: 16px;
    row-gap: 24px;

    ${Devices.tabletS} {
      width: 576px;
    }
    ${Devices.tabletM} {
      width: 720px;
      flex-direction: row;
    }
    ${Devices.laptopS} {
      width: 864px;
    }
    ${Devices.laptopM} {
      width: 1152px;
    }
  `;

  const Annotation = styled.p`
    max-width: 280px;

    ${Devices.tabletS} {
      max-width: 280px;
    }
    ${Devices.tabletM} {
      max-width: 280px;
    }
    ${Devices.laptopS} {
      max-width: 42%;
    }
    ${Devices.laptopM} {
      max-width: 33%;
    }
  `;
  const AnnotationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: flex-start;
    gap: 16px;
    margin: 0px 24px 24px 24px;

    width: 100%;
    ${Devices.tabletS} {
      width: 576px;
    }
    ${Devices.tabletM} {
      width: 720px;
      flex-direction: row;
    }
    ${Devices.laptopS} {
      width: 864px;
    }
    ${Devices.laptopM} {
      width: 1152px;
    }
  `;

  return (
    <Content>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alexandros Shomper</title>
        <description>
          Experienced in core and growth initiatives from acquisition to
          retention & engagement. Bridging business, design, and tech to create
          awesome solutions people love.
        </description>
      </Helmet>
      <Intro></Intro>

      <Section>
        <SectionHead subline="2 ways I can help you with" />
        <FlipCardPanels>
          <FlipCard
            eyebrow="Product"
            eyebrowColor1={Colors.blueDark}
            eyebrowColor2={Colors.blueLight}
            backgroundColor={Colors.blueBackground}
            copy={[
              "Create meaningful & useful products your customers will love.",
            ]}
            copyBack={[
              "I can help you enhance your product effectively by increasing task success rates, customer satisfaction, and adoption.",
              "Develop and improve a workflow to validate, design, develop, and distribute core product improvements.",
              "Assess and track usability and product performance on your core features and value proposition.",
            ]}
            webp="./img/PanelTestImages/square.webp"
            png="./img/PanelTestImages/square.png"
            jpg="./img/PanelTestImages/square.jpg"
          />

          <FlipCard
            eyebrow="Product Lead Growth"
            eyebrowColor1={Colors.greenDark}
            eyebrowColor2={Colors.greenLight}
            backgroundColor={Colors.greenBackground}
            copy={[
              "Acquire more customers, get them engaged, and keep them longer.",
            ]}
            copyBack={[
              "I can help you scale your product quickly and efficiently with PLG by increasing acquisition, activation, and retention.",
              "Develop and improve a workflow to analyze, define, and execute growth strategies. ",
              "Leverage user data, user behavior and user psychology.",
            ]}
            webp="./img/PanelTestImages/triangle.webp"
            png="./img/PanelTestImages/triangle.png"
            jpg="./img/PanelTestImages/triangle.jpg"
          />
        </FlipCardPanels>
      </Section>
      <Section>
        <SectionHead headline="A little bit about me" />
        <SectionCopy copy="I’m an outcome oriented, remote-first product lead with 15+ years of experience in a variety of B2B and B2C industries - from Startup environment to Corporate." />
        <RevealWhenVisible>
          <SectionDivider text={"Here’s a TL;DR of my career:"} />
        </RevealWhenVisible>
        <RevealWhenVisible>
          <SectionCopy
            copy={
              "Education in Arts & Marketing, and self-taught developer 👨🏻‍💻 (still building own side projects)"
            }
          />
        </RevealWhenVisible>
        <RevealWhenVisible>
          <SectionCopy
            copy={
              "Successful career in advertising and marketing, creating global marketing campaigns and brand experiences"
            }
          />
        </RevealWhenVisible>
        <RevealWhenVisible>
          <SectionCopy
            copy={
              "Extensive experience growing products and teams 🚀 in all stages of enterprises from Product-Market-Fit, to Product Led Growth to Core Product Work"
            }
          />
        </RevealWhenVisible>
        <RevealWhenVisible>
          <SectionCopy
            copy={
              "I have a passion for outcome 🎯 by developing and enhancing data-driven and customer-centric processes and culture"
            }
          />
        </RevealWhenVisible>

        <RevealWhenVisible>
          <AnnotationWrapper
            style={{ color: Colors.primaryText.mediumEmphasis }}
          >
            <Annotation>
              There’s a bunch more detail below, but you can also view a summary
              on{" "}
              <a
                href="https://www.linkedin.com/in/alexshomper/"
                style={{ color: Colors.turkish }}
              >
                LinkedIn
              </a>{" "}
              and take a look at my{" "}
              <a
                href="https://github.com/alexandrosshomper"
                style={{ color: Colors.turkish }}
              >
                Manager README on Github
              </a>
              . If you like side projects, check out my{" "}
              <a href="https://cookcook.it" style={{ color: Colors.turkish }}>
                Cooking Social Network
              </a>
              .
            </Annotation>
          </AnnotationWrapper>
        </RevealWhenVisible>
      </Section>

      <Section>
        <SectionHead
          headline="Principles"
          subline="Give meaning to actions and ideas."
        />
        <CardPanels>
          <FadeInWhenVisible>
            <ListPanel
              eyebrow="Data Driven/Informed"
              copy="Uncovering the human in the machine is becoming the key for delivering useful experiences to the customer."
              //imgURL="./img/PanelTestImages/one.jpg"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <ListPanel
              eyebrow="Aesthetics"
              copy="Beautiful products are more useful. They attract more customers, and have more loyal customers."
              //imgURL="./img/PanelTestImages/two.jpg"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <ListPanel
              eyebrow="Quality"
              copy="Outcome beats Output. No one remembers a late launch. But everyone remembers a bad product."
              //imgURL="./img/PanelTestImages/two.jpg"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <ListPanel
              eyebrow="Holistic"
              copy="The whole is more than the sum of its parts. You want your product to be great? Every part has to be great!"
              //imgURL="./img/PanelTestImages/two.jpg"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <ListPanel
              eyebrow="Innovative & Brave"
              copy="Free your mind. If you only focus on what is already there, you will never build something new to the world."
              //imgURL="./img/PanelTestImages/two.jpg"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <ListPanel
              eyebrow="Long Term"
              copy="Keep an eye on what is happening around you, but also on emerging trends and long term possibilities."
              //imgURL="./img/PanelTestImages/two.jpg"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <ListPanel
              eyebrow="Dream Big"
              copy="Get wild. If you only aim for what is possible, you will never reach what is thought to be impossible."
              //imgURL="./img/PanelTestImages/two.jpg"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <ListPanel
              eyebrow="Realism. Optimism. Pessimism."
              copy="Assess the problem realistically. Plan pessimistically. Pursue the solution optimistically."
              //imgURL="./img/PanelTestImages/two.jpg"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <ListPanel
              eyebrow="Focus"
              copy="Keep your mission & vision in mind. Do only few things. But the right things. And do them exceptionally well."
              //imgURL="./img/PanelTestImages/two.jpg"
            />
          </FadeInWhenVisible>
        </CardPanels>
      </Section>
      <Section>
        <BlackQuote
          //quote="I want to use technological developments, a solid company purpose, and a strong brand to elevate experiences and give meaning to actions and ideas."
          quote="Building tools, communicating complex ideas, 
          and forming flexible cooperations are the essence of human nature in order to solve problems bigger than oneself."
        />
      </Section>
      <Section>
        <SectionHead
          headline="Human Centered Leadership"
          subline="Don't believe in the king. Believe in the kingdom."
        />
        <CardPanels>
          <FadeInWhenVisible>
            <ListPanel
              eyebrow="Compassion"
              eyebrowColor1={Colors.green}
              eyebrowColor2={Colors.greenLight}
              copy="We hear a lot about the importance of emphasizing with our customers. Why not with our colleagues?"
              //imgURL="./img/PanelTestImages/two.jpg"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <ListPanel
              eyebrow="Trust"
              eyebrowColor1={Colors.green}
              eyebrowColor2={Colors.greenLight}
              copy="To achieve a lot in a short time, you have to believe in your team. Sometimes more than in yourself."
              //imgURL="./img/PanelTestImages/two.jpg"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <ListPanel
              eyebrow="Collaboration"
              eyebrowColor1={Colors.green}
              eyebrowColor2={Colors.greenLight}
              copy="Managing Top-Down is so 90'. Leadership has to happen from within the team. With the team."
              //imgURL="./img/PanelTestImages/two.jpg"
            />
          </FadeInWhenVisible>
        </CardPanels>
      </Section>

      <Section>
        <SectionHead
          headline="Skill Set"
          subline="Design, Brand, and Growth."
        />
        <Polaroids>
          <ListSmallText
            eyebrow="Design Thinking"
            copy="Emphasizing with your customers is the first principle of innovative products. Get in their shoes, and derive powerful insights to transform the business."
          />

          <ListSmallText
            eyebrow="Design Sprints"
            copy="Rapidly solve big problems. Find out what works with users in weeks, instead in months. Research, prototype, test, and learn from real user data."
          />
          <ListSmallText
            eyebrow="Design Systems"
            copy="Design has to think bigger: System Thinking. Provide a shared library. A Platform to create, collaborate, build and maintain outcomes of consistent quality."
          />
          <ListSmallText
            eyebrow="Business Design"
            copy="Build innovative, desirable businesses by combining design thinking and lean startup. Create data-based and customer-centric value propositions, revenue models, and sales channels."
          />

          <ListSmallText
            eyebrow="Brand Strategy"
            copy="A well-defined and executed brand affects all aspects of a business. It is directly connected to consumer needs, emotions, and competitive environments." //copy="Indentify problems. Frame solution options. Draft and test possible roads to success. Make informed decisions."
          />
          <ListSmallText
            eyebrow="Growth Hacking"
            copy="Continuously measuring and optimizing your customer relationship. Use creativity, analytics, and tech to heighten acquisition, activation, retention, referral, and revenue. "
          />
        </Polaroids>
      </Section>

      <Section>
        <Trend
          smooth
          autoDraw
          autoDrawDuration={3000}
          autoDrawEasing="ease"
          data={[0, 2, 7, 5, 6, 3, 2, 0, 0, 3, 1, 8, 7, 9, 15]}
          gradient={[Colors.blue, Colors.purple, Colors.red, Colors.yellow]}
          radius={12}
          strokeWidth={16}
          padding={16}
          strokeLinecap={"round"}
        />
      </Section>
      <Section>
        <SectionHead
          headline="Process"
          subline="Iterative. Agile. Customer-centric."
          copy="Innovative products need a flexible but repeatable process of making data-driven & customer-centric product decisions."
          //copy="Aproaching problems creatively with well-though and well-executed solutions. Developing feasibility, desirability and viability ideas that improve people's life in some manner, but at the same time it needs to be work and make business sense."
        />
        <MoveUpWhenVisible>
          <ListBigText
            //headline="Establish empathy together as a team"
            //copy="It’s important to understand your users together as a team. Doing so eventually weaves benefit into the product at every level. By increasing your team’s exposure to users, you will increase the user’s satisfaction of the product."
            headline="Discover"
            copy="It all starts with observing, learning, and understanding. Understand the business, the brand and the users. Frame the problem and validate it. Distill and weight the user insights and hypotheses. What are we aiming for?"
          />
        </MoveUpWhenVisible>
        <MoveUpWhenVisible>
          <ListBigText
            //headline="Collectively define and agree on problems"
            //copy="Take time to understand and clearly define your user’s problems. Feeding the team solutions will only lead to demoralisation; people like being empowered and to have a chance to be creative. Let the team stretch their skills, and give them time to truly understand the problem."
            headline="Define"
            copy="Goals become actions. What are the Use Cases, how do the Personae & the Journey look like. Identify the most important touchpoints. Which strategic models can be used to bring business, brand, and user together."
          />
        </MoveUpWhenVisible>
        <MoveUpWhenVisible>
          <ListBigText
            //headline="Prototype and test with real users"
            //copy="Fake it until you can make it. Spend the minimum amount of time to create the closest to the real thing. You’re looking for feedback on the idea, not whether your design looks finished. Test with real representative users."
            headline="Design"
            copy="Pick the most important touchpoints and hypotheses. Start building and testing. Build desire and loyalty. Users will only stick around, if you can turn your findings to an unforgettable experience."
          />
        </MoveUpWhenVisible>
        <MoveUpWhenVisible>
          <ListBigText
            //headline="Group ideation"
            //copy="Good ideas can come from anyone. Waiting for one member of the team to create the best idea will take time, and will be biassed towards their experience. It doesn’t have to take long, there are exercises designed to generate lots of ideas quickly."
            headline="Develop"
            copy="Now it's time to manifest the user experience. Pick an essential set of features to launch the product with to get the ball rolling. Translate the design into code, and keep an eye on the quality of the outcome. Learn. Iterate."
          />
        </MoveUpWhenVisible>
        <MoveUpWhenVisible>
          <ListBigText
            //headline="Establish empathy together as a team"
            //copy="It’s important to understand your users together as a team. Doing so eventually weaves benefit into the product at every level. By increasing your team’s exposure to users, you will increase the user’s satisfaction of the product."

            headline="Deliver"
            copy="It's about implementing the product in the operating team. Put the pieces in place so that everybody is on board and speaks the same language. Create style guides, user experience guidelines, and documentation. Bring clarity without being too restrictive."
          />
        </MoveUpWhenVisible>
        <MoveUpWhenVisible>
          <ListBigText
            //headline="Iterate, iterate, iterate"
            //copy="It isn’t enough to run through a design process once. Learn from your users, learn from your team, and iterate. Your process will mature and you’ll be able to run through it easier and faster on each pass. Being agile is to be set up to react to new information fast."

            headline="Distribute"
            copy="Measure the performance of the product, and the engagement of the users. Learn. Iterate. Iterate. Iterate. Find out what attracts new users. Continuously work on the Aha-Moment & Stickiness to drive retention and loyalty."
          />
        </MoveUpWhenVisible>
      </Section>
    </Content>
  );
};

export default Content;
