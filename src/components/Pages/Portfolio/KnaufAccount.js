import styled from "@emotion/styled";
import React from "react";
import { Helmet } from "react-helmet";

//Components
import { Colors, Devices } from "../../DesignSystem";

import CaseCopy from "../../Content/Case/CaseCopy";
import CaseHeadlineThree from "../../Content/Case/CaseHeadlineThree";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseSublineTwo from "../../Content/Case/CaseSublineTwo";
import CaseTitle from "../../Content/Case/CaseTitle";
import CaseTitleEyebrow from "../../Content/Case/CaseTitleEyebrow";

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

  const greenArrowStyle = {
    color: Colors.green,
    fontWeight: "bold",
  };

  return (
    <Content>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Knauf Explorations | Alexandros Shomper</title>
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
          text={"Deep Dive"}
          color1="#00b8d4"
          color2="#62ebff"
        />
        <CaseTitle
          headline={
            "Signups: How to increase signups with user psychology and data analysis"
          }
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CaseSectionHead
          headline="A globally successful company needs to find new ways to compete by fulfilling a digital transformation and applying customer centricity. The best way to benefit from a digital transformation of an industry is to lead it. "
          subline="But what does this mean for Knauf and the Construction Industry? And how could I help?"
        />
        <CaseSublineTwo
          subline={
            "I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of Knauf."
          }
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Paragraph>
          <CaseHeadlineThree headline={"Situation"} />
          <CaseCopy
            subline={
              "We've launched a new account system for our apps, the Knauf Account. This account is designed to unify our diverse company and simplify our customers' experience. Now, users only need a single account, which helps us create a better, more connected customer journey - laying out the foundation for product qualified leads."
            }
          />
          <CaseCopy
            copy={
              "Our Knauf Account is ready to power our existing apps and the upcoming ones, along with our new global corporate website. We're rolling this out step by step to ensure a smooth transition."
            }
          />
          <CaseCopy
            copy={
              "We've had a successful pilot, made several enhancements, and ironed out bugs along the way. It's been a journey focused on building the core features of the Knauf Account."
            }
          />

          <CaseCopy
            copy={
              "But, we admit, amidst all the excitement, user growth didn't quite hit the mark. The account registration didn't take off as we'd hoped. This is a bit surprising since we've tailor-made this account and our apps to solve our customers' problems and even offer personal onboarding."
            }
          />
          <CaseUnorderedList>
            <li>
              <span style={greenArrowStyle}>👎 </span>
              No Data about customers
            </li>
            <li>
              <span style={greenArrowStyle}> 👎 </span>
              No Data interfaces available
            </li>
            <li>
              <span style={greenArrowStyle}> 👎 </span>
              Multi national project
            </li>
          </CaseUnorderedList>
        </Paragraph>
        <Paragraph>
          <CaseHeadlineThree headline={"Task"} />
          <CaseCopy
            copy={
              "The more customers use our account in the apps and website, the better we can connect the dots, generate insights, and offer a more personalized experience & offerings. This is crucial for our product qualified leads and our customer journey."
            }
          />
          <CaseSublineTwo subline={"Problem"} />
          <CaseCopy
            copy={"How might we increase the account registration signup rate?"}
          />
        </Paragraph>
        <Paragraph>
          <CaseHeadlineThree headline={"Action"} />
          <CaseCopy
            copy={
              "To boost our account registration rate, we first needed to understand our current situation. We used two research methods for this. The first was a qualitative Psych Analysis, where we applied user psychology to the registration screens and flows. The second was a quantitative funnel analysis, which tracked step-by-step user losses."
            }
          />
          <CaseSublineTwo subline={"Psych Analysis"} />
          <CaseCopy
            copy={
              "The Psych Analysis is a tool that helps us gauge a user's motivation and energy during their interaction with our product, aiming to minimize friction. Think of it like a fuel tank—certain actions either deplete or fill this tank of user energy. Negative moments, like confusing branding or form-filling, drain energy. Positive moments, such as enticing headlines or freebies, refill it. We aim to keep this energy high throughout the user journey, especially at crucial activation points."
            }
          />
          <CaseCopy
            copy={
              "By thoroughly evaluating each screen and user flow, we quickly identified numerous simple, impactful improvements, often just by reordering steps. We also found more substantial enhancements like deferred account creation and sniper email verification."
            }
          />
          <CaseCopy
            copy={
              "Our Psych Analysis resulted in a concise assessment of user friction and motivation during registration, leading to multiple improvements."
            }
          />
          <CaseSublineTwo subline={"Data Analysis"} />
          <CaseCopy
            copy={
              "Next, we conducted a straightforward Data Analysis. We chose to do this after the Psych Analysis to avoid biasing our initial findings."
            }
          />
          <CaseCopy
            copy={
              "The funnel analysis data strongly echoed our Psych Analysis. The most significant friction points in the Psych Analysis were also the largest drop-off points in the Funnel Analysis."
            }
          />
        </Paragraph>
        <Paragraph>
          <CaseHeadlineThree headline={"Results"} />
          <CaseCopy
            copy={
              "Well, here is where things got interesting and took a turn. When we analyzed the data, we found that the Delivery Notifications were not triggering - at all."
            }
          />
          <CaseCopy
            copy={
              "This bug is of course bad news for the user experience, but it also means that we can't measure the impact of the Delivery Notifications on user activation, retention, and engagement."
            }
          />
          <CaseSublineTwo subline={"New questions"} />
          <CaseCopy
            copy={
              "But what does this mean for our analysis and hypothesis? What does this mean for our product? Where does the correlation between Delivery Notification and Activation, Retention, and Engagement come from?"
            }
          />
          <CaseSublineTwo subline={"The turn-around"} />
          <CaseCopy
            copy={
              "We found that the correlation between Delivery Notifications and user activation, retention, and engagement is not due to the Delivery Notifications themselves, but due to the users who adopt the Delivery Notifications - the power users."
            }
          />
          <CaseCopy
            copy={
              "A user behaviour analysis turned out to be a feature request survey. Our power users seam to like the idea of Delivery Notifications."
            }
          />

          <CaseSublineTwo subline={"Conclusion"} />
          <CaseCopy
            copy={
              "In conclusion, the importance of seeking correlations to overall performance and long-term retention when analyzing products and users can't be overstated. Yet, correlation is not causation."
            }
          />
          <CaseCopy
            copy={
              "It's crucial to identify key features that drive user engagement and retention, even if they initially seem marginal. Investigating these correlations provides valuable insights that can guide product improvement and optimization strategies."
            }
          />
          <CaseCopy
            copy={
              "This ultimately enhances the user experience, promotes habit formation, and drives sustained product use."
            }
          />
          <CaseCopy
            copy={
              "And finally, always double-check whether the notifications really trigger..."
            }
          />
        </Paragraph>
      </Section>
    </Content>
  );
};

export default Content;
