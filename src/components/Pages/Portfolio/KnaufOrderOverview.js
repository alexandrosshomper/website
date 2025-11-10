import React from "react";

import createCasePage from "../CaseStudies/createCasePage";
import {
  ArticleSection,
  ArticleSectionContent,
  Colors,
} from "../../DesignSystem";
import CaseCopy from "../../Content/Case/CaseCopy";
import CaseCover from "../../Content/Case/CaseCover";
import CaseHeadlineThree from "../../Content/Case/CaseHeadlineThree";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import CaseSublineTwo from "../../Content/Case/CaseSublineTwo";
import Drawer from "../../Content/Drawer/Drawer";

const metaTitle = "Knauf Explorations | Alexandros Shomper";

const metaDescription =
  "Digital Anthropologist. Experienced Product-, Service & Business Designer with demonstrated track record of successfully developing meaningful experiences that people love by using emerging technology, solid company purpose, and a strong brand to elevate human experiences and interactions.";

const hero = () => <CaseCover imgURL="./img/Knauf/OrderOverview.png" />;

const galleryItems = [
  {
    id: 1,
    imgURL: "./img/Knauf/FeatureAdoption.png",
    imgMobileURL: "./img/Knauf/FeatureAdoption-mobile.png",
    headline: "The data",
    copy: "That 7% of users that used the Delivery Notification, turned out to make 20% of the overall traffic on the product. Three times more actions per session.",
  },
  {
    id: 2,
    imgURL: "./img/Knauf/UserRetention.png",
    imgMobileURL: "./img/Knauf/UserRetention-mobile.png",
    headline: "User Retention Correlation",
    copy: "That 7% of users that used the Delivery Notification turned out to have 30%+ Retention Rate over three months.",
  },
  {
    id: 3,
    imgURL: "./img/Knauf/HabitLoop.png",
    imgMobileURL: "./img/Knauf/HabitLoop-mobile.png",
    headline: "Hypothesis",
    copy: "We believe that more users adopting the Delivery Notifications will result in better overall user activation, retention, and engagement. The hypothesis is based on a user behaviour principle: Habit Formation. Our users already have an established habit of solving their problem (emails & calls). Our product requires them to change their habit, and adopt a new habit. Repeating a new habit early on, maximizes the chance of adoption. By regularly reminding our users of our new solution, the Delivery Notifications help our users adopt a new habit.",
  },
  {
    id: 4,
    imgURL: "./img/Knauf/Experiments.png",
    imgMobileURL: "./img/Knauf/Experiments-mobile.png",
    headline: "Experiments",
    copy: "We created 4 experiments to improve the adoption of the Delivery Notifications, from which we would learn whether this will have the impact on user activation, retention, and engagement that we think.",
  },
];

const greenArrowStyle = {
  color: Colors.green,
  fontWeight: "bold",
};

const renderContent = () => (
  <>
    <ArticleSection>
      <ArticleSectionContent>
        <CaseSublineTwo
          subline="I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of Knauf."
        />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseHeadlineThree headline="Situation" />
        <CaseSectionHead
          headline="Knauf's Order Overview: Simple Outside, Complex Inside"
          subline="Mission to centralize processes and enhance delivery transparency; a complex low hanging fruit with huge potential."
        />
        <CaseSublineTwo
          subline="Knauf Digital’s mission is to digitalize Knauf’s business and digitize & centralize existing processes - for all Knauf brands and subsidiaries. "
        />
        <CaseCopy
          copy="Among many other, we developed an order overview app. A replacement for several email updates and/or phone conversations per week, for each brand separately. Details of every delivery (like ETA, materials in delivery, etc.) can change quickly. Just as quickly, the last updates could be not up-to-date anymore. Delivery-transparency is one of the main pain-points on a construction site."
        />
        <CaseCopy copy="Simultaneously, this means a lot of manual work for manufacturers aswell." />
        <CaseCopy
          copy="On the outside it looks rather simple, on the inside it proved to be a very challenging and complex initiative. An initiative with huge potential of improving internal efficiency and profitability, but also make our customers every-day life much easier."
        />
        <CaseCopy
          copy="It took two years, required alignment with several subsidiaries, and involved research within several countries, standardizing data and how it get’s displayed."
        />
        <ul>
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
        </ul>
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseHeadlineThree headline="Task" />
        <CaseSectionHead
          headline="Boosting Active Users: The Unmet Challenge"
          subline="Despite a slight increase, the app struggled to achieve significant user growth"
        />
        <CaseCopy
          copy="We had a slight increase of Active users every month since the launch of the pilot, however the product struggled to grow as we’d expected. "
        />
        <CaseSublineTwo subline="Problem" />
        <CaseCopy copy="How might we increase the number of active users significantly?" />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseHeadlineThree headline="Action" />
        <CaseSectionHead
          headline="Feature Focus: From Marginal to Essential"
          subline="Analyzed feature engagement, discovering that the 7% using Delivery Notifications were our power users"
        />
        <CaseSublineTwo subline="Analyze the User Behaviour and find areas of improvements with huge impact on user activation." />
        <CaseCopy
          copy="I started to analyze the engagement of our features, and the correlation on user retention and engagement. What I found was one feature, the Delivery Notification, that seamed marginal with only 7% of user adoption."
        />
        <CaseCopy copy="However, that segment of users proofed to be our power users." />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection $width="wide">
      <ArticleSectionContent>
        <Drawer items={galleryItems} />
      </ArticleSectionContent>
    </ArticleSection>

    <ArticleSection>
      <ArticleSectionContent>
        <CaseHeadlineThree headline="Results" />
        <CaseSectionHead
          headline="Bug Bust and Insights: Power Users Hold the Key"
          subline="Found a bug in notifications; realized true engagement drivers were our power users' habits, not the feature itself"
        />
        <CaseCopy
          copy="Well, here is where things got interesting and took a turn. When we analyzed the data, we found that the Delivery Notifications were not triggering - at all."
        />
        <CaseCopy
          copy="This bug is of course bad news for the user experience, but it also means that we can't measure the impact of the Delivery Notifications on user activation, retention, and engagement."
        />
        <CaseSublineTwo subline="New questions" />
        <CaseCopy
          copy="But what does this mean for our analysis and hypothesis? What does this mean for our product? Where does the correlation between Delivery Notification and Activation, Retention, and Engagement come from?"
        />
        <CaseSublineTwo subline="The turn-around" />
        <CaseCopy
          copy="We found that the correlation between Delivery Notifications and user activation, retention, and engagement is not due to the Delivery Notifications themselves, but due to the users who adopt the Delivery Notifications - the power users."
        />
        <CaseCopy
          copy="A user behaviour analysis turned out to be a feature request survey. Our power users seam to like the idea of Delivery Notifications."
        />
        <CaseSublineTwo subline="Conclusion" />
        <CaseCopy
          copy="In conclusion, the importance of seeking correlations to overall performance and long-term retention when analyzing products and users can't be overstated. Yet, correlation is not causation."
        />
        <CaseCopy
          copy="It's crucial to identify key features that drive user engagement and retention, even if they initially seem marginal. Investigating these correlations provides valuable insights that can guide product improvement and optimization strategies."
        />
        <CaseCopy copy="This ultimately enhances the user experience, promotes habit formation, and drives sustained product use." />
        <CaseCopy copy="And finally, always double-check whether the notifications really trigger..." />
      </ArticleSectionContent>
    </ArticleSection>
  </>
);

export default createCasePage({
  metaTitle,
  metaDescription,
  eyebrow: "Deep Dive",
  eyebrowColor1: "#00b8d4",
  eyebrowColor2: "#62ebff",
  title: "How to analyze feature adoption to increase user engagement & activation",
  hero,
  renderContent,
});

