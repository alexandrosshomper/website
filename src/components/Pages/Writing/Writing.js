import React from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";

//Components
import { Colors } from "../../DesignSystem";
import SectionHead from "../../Content/Section/SectionHead";
import Article from "../../Content/Article/Article";
import { ButtonMedium } from "../../Button";
import SectionOverline from "../../Content/Section/SectionOverline";

const Content = () => {
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
    flex-grow: 0;
    margin-bottom: 200px;
  `;

  return (
    <Content>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Writing | Alexandros Shomper</title>
        <description>
          Digital Anthopologist. Experienced Product-, Service & Business
          Designer with demonstrated track record of successfully developing
          meaningful experiences that people love by using emerging technology,
          solid company purpose, and a strong brand to elevate human experiences
          and interactions.
        </description>
      </Helmet>
      <Section>
        <SectionHead
          divider="Community Service"
          headline="Writing on Product, Design, Marketing and Growth"
          subline="Sharing articles, insights, and frameworks with the product community."
        />
        <SectionOverline subline="My articles on Medium.com" />

        <Article
          headline="Is the Customer always right? It depends …"
          subline="The phrase >the customer is always right< has been a staple in customer service for decades and has been influential as it has been…"
          meta="Alexandros Shomper for Bootcamp @ Medium.com"
          link="https://medium.com/design-bootcamp/is-the-customer-always-right-it-depends-e875f37a6786"
          imgURL="https://miro.medium.com/v2/resize:fill:320:214/1*gSIDo1Rac8EDR0fhsraNeA.png"
        />
        <Article
          headline="Change Aversion and what now?"
          subline="Users hate when products are a changing: Overcoming Change Aversion in Digital Product Design and Development."
          meta="Alexandros Shomper for Bootcamp @ Medium.com"
          link="https://bootcamp.uxdesign.cc/change-aversion-and-what-now-55024604096a"
          imgURL="https://miro.medium.com/v2/resize:fill:320:214/1*Xd_nD0ZaWHnDvhViZfxDng.png"
        />
        <Article
          headline="Redundancy is not your enemy"
          subline="How Redundancy Helps You Cater to Different Customers."
          meta="Alexandros Shomper for Bootcamp @ Medium.com"
          link="https://bootcamp.uxdesign.cc/redundancy-is-not-your-enemy-892226f87271"
          imgURL="https://miro.medium.com/v2/resize:fill:320:214/1*03GSdQoQns5lgSpW30J_bw.png"
        />
        <br />
        <ButtonMedium
          href="https://medium.com/@alexandrosshomper"
          text="See all my articles on Medium"
          color1={Colors.greyDark}
          color2={Colors.black}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <SectionOverline subline="My artifacts on Reforge.com" />
        <Article
          headline="UX explainer presentation"
          subline="An explainer presentation meant to introduce actionable concepts around UX and what it means for our organization."
          meta="Alexandros Shomper for Reforge @ Reforge.com"
          link="https://www.reforge.com/artifacts/ux-explainer-presentation-at-knauf"
          imgURL="https://cdn.sanity.io/images/pghoxh0e/production/6787514e3743e00c0e414a4e1775b903887238b4-528x343.png?w=2200&q=80&fit=max&auto=format"
        />
        <Article
          headline="UX maturity assessment workshop"
          subline="A template version of a workshop we conducted to assess our team’s UX maturity, based on Nielsen Nelson’s UX Maturity Assessment."
          meta="Alexandros Shomper for Reforge @ Reforge.com"
          link="https://www.reforge.com/artifacts/ux-maturity-assessment-workshop"
          imgURL="https://cdn.sanity.io/images/pghoxh0e/production/b16f344e0d2c019f51295172b73cbccafe82e55d-528x343.png?w=2200&q=80&fit=max&auto=format"
        />
        <Article
          headline="Use case marketing messaging map"
          subline="A use case marketing messaging map and product marketing map we use to help inform our efforts and align messaging and marketing."
          meta="Alexandros Shomper for Reforge @ Reforge.com"
          link="https://www.reforge.com/artifacts/use-case-marketing-messaging-map"
          imgURL="https://cdn.sanity.io/images/pghoxh0e/production/7d8cb395214411450f7d051f6bfae06e83788459-528x343.png?w=2200&q=80&fit=max&auto=format"
        />
        <br />
        <ButtonMedium
          href="https://www.reforge.com/profiles/alexandros-shomper"
          text="See all my artifacts on Reforge"
          color1={Colors.greyDark}
          color2={Colors.black}
        />
      </Section>
    </Content>
  );
};

export default Content;
