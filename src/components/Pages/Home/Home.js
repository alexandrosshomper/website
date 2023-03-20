import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Components
import { Devices, Colors } from "../../DesignSystem";
import Intro from "../../Content/Intro/Intro";
import ListPanel from "../../Content/List/ListPanel/ListPanel";
import SectionHead from "../../Content/Section/SectionHead";
import ListBigText from "../../Content/List/ListBigText/ListBigText";
import ListSmallText from "../../Content/List/ListSmallText/ListSmallText";
import BlackQuote from "../../Content/BlackQuote/BlackQuote";
//import CaseCard from "../../Content/CaseCard/CaseCard";

import Trend from "react-trend";

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

const Content = (props) => {
  const Content = styled.div`
    text-align: left;
    margin-top: 72px;
  `;

  const Section = styled.section`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    /* Inside Auto Layout */
    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
    margin-bottom: 200px;
    ${Devices.tabletS} {
      align-items: center;
    }
  `;

  const Panels = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
    --gap: 12px;
    margin-left: calc(1 * var(--gap));
    margin-right: calc(1 * var(--gap));
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
  const Polaroids = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
    --gap: 12px;
    margin-left: calc(1 * var(--gap));
    margin-right: calc(1 * var(--gap));
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

  /*const CaseCardGallery = styled.ul`
    direction: ltr;
    display: grid;
    grid-template-areas: none;
    grid-template-columns: 492px 492px 492px 492px 492px 492px;
    grid-template-rows: 400px;
    grid-gap: 24px;

    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    margin-block-end: 0px;
    margin-block-start: 0px;
    margin-bottom: 0px;
    margin-inline-end: -150%;
    margin-inline-start: 0px;

    padding-bottom: 20px;
    padding-inline-start: 230px;
    padding-left: 230px;
    padding-right: 230px;
    padding-top: 20px;

    text-align: left;
    text-size-adjust: 100%;
    width: 3072px;
    height: 400px;

    ${mq[0]} {
    }
    ${mq[1]} {
    }
    ${mq[2]} {
    }
    ${mq[3]} {
    }
  `;*/

  return (
    <Content>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alexandros Shomper</title>
        <description>
          Digital Anthopologist. Experienced Product-, Service & Business
          Designer with demonstrated track record of successfully developing
          meaningful experiences that people love by using emerging technology,
          solid company purpose, and a strong brand to elevate human experiences
          and interactions.
        </description>
      </Helmet>
      <Intro></Intro>
      {/*<Section>
        <CaseCardGallery>
          <CaseCard
            eyebrow="Case"
            eyebrowColor1="#FF0000"
            eyebrowColor2="#FFCC00"
            headline="Occhio relaunches it's Website and establishes it's first eCommerce"
            copy="Lorem Ipsum Dolor Sit. Lorem Ipsum Dolor Sit. Lorem Ipsum Dolor Sit. "
            imgURL="./img/BlackQuoteTextBackgroundImage/GradBGTiny.png"
          />
          <CaseCard
            eyebrow="Case"
            eyebrowColor1="#00b8d4"
            eyebrowColor2="#62ebff"
            headline="Knauf want's to explore the opportunities of digitizing the construction business"
            copy="Lorem Ipsum Dolor Sit. Lorem Ipsum Dolor Sit. Lorem Ipsum Dolor Sit. "
            imgURL="./img/BlackQuoteTextBackgroundImage/GradBGTiny.png"
          />
          <CaseCard
            eyebrow="Article"
            eyebrowColor1="#ffc400"
            eyebrowColor2="#fff64f"
            headline="Problem/Solution Fit or Product/Market Fit. What's the difference? What's more important?"
            copy="Lorem Ipsum Dolor Sit. Lorem Ipsum Dolor Sit. Lorem Ipsum Dolor Sit. "
            imgURL="./img/BlackQuoteTextBackgroundImage/GradBGTiny.png"
          />
        </CaseCardGallery>
      </Section>*/}

      <Section>
        <SectionHead
          headline="What I do"
          subline="Building brands, digital products & businesses."
        />
        <Panels>
          <FadeInWhenVisible>
            <ListPanel
              eyebrow="Understand. Customers."
              eyebrowColor1={Colors.orange}
              eyebrowColor2={Colors.red}
              copy="Generate insights and find out what moves your customers."
              webp="./img/PanelTestImages/square.webp"
              png="./img/PanelTestImages/square.png"
              jpg="./img/PanelTestImages/square.jpg"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <ListPanel
              eyebrow="Build. Better. Products."
              eyebrowColor1={Colors.red}
              eyebrowColor2={Colors.purple}
              copy="Create meaningful and useful tools your customers will love."
              webp="./img/PanelTestImages/circle.webp"
              png="./img/PanelTestImages/circle.png"
              jpg="./img/PanelTestImages/circle.jpg"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <ListPanel
              eyebrow="Grow. Business."
              eyebrowColor1={Colors.purple}
              eyebrowColor2={Colors.blue}
              copy="Leverage new-found opportunities to disrupt your market."
              webp="./img/PanelTestImages/triangle.webp"
              png="./img/PanelTestImages/triangle.png"
              jpg="./img/PanelTestImages/triangle.jpg"
            />
          </FadeInWhenVisible>
        </Panels>
      </Section>
      <Section>
        <SectionHead
          headline="Skill Set"
          subline="Design, Brand, and Business."
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
            copy="A well-defined and executed brand affects all aspects of a business. It is directly connected to consumer needs, emotions, and competitive environments."
            //copy="Indentify problems. Frame solution options. Draft and test possible roads to success. Make informed decisions."
          />
          <ListSmallText
            eyebrow="Growth Hacking"
            copy="Continuously measuring and optimizing your customer relationship. Use creativity, analytics, and tech to heighten acquisition, activation, retention, referral, and revenue. "
          />
        </Polaroids>
      </Section>
      <Section>
        <BlackQuote
          //quote="I want to use technological developments, a solid company purpose, and a strong brand to elevate experiences and give meaning to actions and ideas."
          quote="Building tools, communicating complex ideas, 
          and forming flexible cooperations are the essence of human nature in order to solve problems bigger than oneself."
          quotee="Yuval Noah Harari"
        />
      </Section>
      <Section>
        <SectionHead
          headline="Human Centered Leadership"
          subline="Don't believe in the king. Believe in the kingdom."
        />
        <Panels>
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
        </Panels>
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
          copy="Innovative products need a process creating a consistent brand experience across many touchpoints."
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
      <Section>
        <SectionHead
          headline="Principles"
          subline="Give meaning to actions and ideas."
        />
        <Panels>
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
              copy="Assess the problem realistically. Plan the project pessimistically. Pursue the solution optimistically."
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
        </Panels>
      </Section>
    </Content>
  );
};

export default Content;
