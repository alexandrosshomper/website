import styled from "@emotion/styled";
import React from "react";
import { Helmet } from "react-helmet";

//Components
import { Colors, Devices } from "../../DesignSystem";

import CaseCopy from "../../Content/Case/CaseCopy";
import CaseCover from "../../Content/Case/CaseCover";
import CaseHeadlineThree from "../../Content/Case/CaseHeadlineThree";
import CaseImage from "../../Content/Case/CaseImage";
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
            "How to analyze featuer adoption to increase user engagement & activation"
          }
        />
        <CaseCover imgURL="./img/Knauf/OrderOverview.png" />
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
          <CaseHeadlineThree headline={"Situation"} />
          <CaseSublineTwo
            subline={
              "Knauf Digital’s mission is to digitalize Knauf’s business and digitize & centralize existing processes - for all Knauf brands and subsidiaries. "
            }
          />
          <CaseCopy
            copy={
              "Among many other, we developed an order overview app. A replacement for several email updates and/or phone conversations per week, for each brand separately. Details of every delivery (like ETA, materials in delivery, etc.) can change quickly. Just as quickly, the last updates could be not up-to-date anymore. Delivery-transparency is one of the main pain-points on a construction site."
            }
          />
          <CaseCopy
            copy={
              "Simultaneously, this means a lot of manual work for manufacturers aswell."
            }
          />

          <CaseCopy
            copy={
              "On the outside it looks rather simple, on the inside it proved to be a very challenging and complex initiative. An initiative with huge potential of improving internal efficiency and profitability, but also make our customers every-day life much easier."
            }
          />
          <CaseCopy
            copy={
              "It took two years, required alignment with several subsidiaries, and involved research within several countries, standardizing data and how it get’s displayed."
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
              "We had a slight increase of Active users every month since the launch of the pilot, however the product struggled to grow as we’d expected. "
            }
          />
          <CaseSublineTwo subline={"Problem"} />
          <CaseCopy
            copy={
              "How might we increase the number of active users significantly?"
            }
          />
        </Paragraph>
        <Paragraph>
          <CaseHeadlineThree headline={"Action"} />
          <CaseCopy
            copy={
              "Analyze the User Behaviour and find areas of improvements with huge impact on user activation."
            }
          />
          <CaseCopy
            copy={
              "I started to analyze the engagement of our features, and the correlation on user retention and engagement. What I found was one feature, the Delivery Notification, that seamed marginal with only 7% of user adoption."
            }
          />
          <CaseCopy
            copy={
              "However, that segment of users proofed to be our power users."
            }
          />
          <CaseSublineTwo subline={"The data"} />
          <CaseCopy
            copy={
              "That 7% of users that used the Delivery Notification, turned out to make 20% of the overall traffic on the product. Three times more actions per session."
            }
          />
          <CaseImage imgURL="./img/Knauf/FeatureAdoption.png" />
          <CaseCopy
            copy={
              "That 7% of users that used the Delivery Notification turned out to have 30%+ Retention Rate over three months."
            }
          />
          <CaseImage imgURL="./img/Knauf/UserRetention.png" />

          <CaseSublineTwo subline={"Hypothesis"} />
          <CaseCopy
            copy={
              "We believe that more users adopting the Delivery Notifications will result in better overall user activation, retention, and engagement."
            }
          />
          <CaseCopy
            copy={
              "The hypothesis is based on a user behaviour principle: Habit Formation. Our users already have an established habit of solving their problem (emails & calls). Our product requires them to change their habit, and adopt a new heabit. Repeating a new habit early on, maximizes the chance of adoption."
            }
          />
          <CaseCopy
            copy={
              "By regularly reminding our users of our new solution, the Delivery Notifications help our users adopt a new habit."
            }
          />
          <CaseImage imgURL="./img/Knauf/HabitLoop.png" />
          <CaseSublineTwo subline={"Experiments"} />
          <CaseCopy
            copy={
              "We created 4 experiments to improve the adoption of the Delivery Notifications, from which we would learn whether this will have the impact on user activation, retention, and engagement that we think."
            }
          />
          <CaseImage imgURL="./img/Knauf/OrderOverviewExperiments.png" />
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
