import React from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import { mdiLinkedin, mdiXing, mdiAccountBox, mdiFilePdfBox } from "@mdi/js";

import { Devices, Colors } from "../../DesignSystem";
import ButtonMedium from "../../Button/ButtonMedium";

const Contact = (props) => {
  const Contact = styled.div`
    text-align: left;
    margin-top: 72px;
    margin-bottom: 200px;
  `;

  const Name = styled.h1`
    margin: 0px auto;
    margin-bottom: 24px;

    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 130%;

    text-align: left;
    margin-left: 24px;
    margin-right: 24px;
    color: transparent;
    background-image: linear-gradient(
      to right,
      ${Colors.yellow},
      ${Colors.orange},
      ${Colors.red},
      ${Colors.purple},
      ${Colors.blue},
      ${Colors.turkish},
      ${Colors.green}
    );
    -webkit-background-clip: text;
    background-clip: text;

    ${Devices.tabletS} {
      margin: 0 auto;
      width: 563px;
      font-size: 44px;
      line-height: 107%;
      text-align: center;
    }
    ${Devices.tabletM} {
      width: 707px;
      font-size: 52px;
      line-height: 100%;
      letter-spacing: -0.02em;
    }
    ${Devices.laptopS} {
      width: 852px;
      font-size: 60px;
      line-height: 122%;
    }
    ${Devices.laptopM} {
      width: 1141px;
      font-size: 80px;
      line-height: 105%;
    }
  `;
  const ContactInfo = styled.p`
    margin: 0px auto;
    margin-bottom: 0px;

    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 130%;

    text-align: left;
    margin-left: 24px;
    margin-right: 24px;

    color: #000a12;
    ${Devices.tabletS} {
      margin: 0 auto;
      width: 563px;
      font-size: 32px;
      line-height: 107%;
      text-align: center;
    }
    ${Devices.tabletM} {
      width: 707px;
      font-size: 40px;
      line-height: 100%;
      letter-spacing: -0.02em;
    }
    ${Devices.laptopS} {
      width: 852px;
      font-size: 48px;
      line-height: 122%;
    }
    ${Devices.laptopM} {
      width: 1141px;
      font-size: 60px;
      line-height: 105%;
    }
  `;

  const ContactInfoLink = styled.a`
    text-decoration: none;
    color: #000a12;
    :visited {
      text-decoration: none;
      color: #000a12;
    }
  `;

  const ButtonRow = styled.div`
    color: rgb(29, 29, 31);
    direction: ltr;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    align-items: flex-start;
    gap: 12px;
    height: 60px;
    letter-spacing: -0.374px;
    line-height: 25px;

    padding-top: 12px;
    quotes: "“" "”";
    text-align: center;
    text-size-adjust: 100%;

    width: 100%;
    height: 200px;

    /* Inside Auto Layout */
    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
    -webkit-font-smoothing: antialiased;
    --gap: 12px;
    margin-left: calc(-1 * var(--gap));
    margin-right: calc(-1 * var(--gap));
    margin-bottom: calc(-1 * var(--gap));

    & > * {
      margin-left: var(--gap);
      margin-bottom: calc(2 * var(--gap));
    }
    ${Devices.tabletS} {
      justify-content: center;
      align-content: center;
      align-items: center;
      gap: 24px;
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
  `;

  const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    position: static;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px auto;
    margin-top: 40px;
    margin-left: 24px;
    margin-right: 24px;

    /* Inside Auto Layout */
    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
    -webkit-font-smoothing: antialiased;
    ${Devices.tabletS} {
      width: 564px;
      margin: 0px auto;
    }
    ${Devices.tabletM} {
      width: 708px;
    }
    ${Devices.laptopS} {
      width: 852px;
    }
  `;

  return (
    <Contact>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | Alexandros Shomper</title>
        <description>
          Digital Anthopologist. Experienced Product-, Service & Business
          Designer with demonstrated track record of successfully developing
          meaningful experiences that people love by using emerging technology,
          solid company purpose, and a strong brand to elevate human experiences
          and interactions.
        </description>
      </Helmet>
      <Name>Alexandros Shomper</Name>
      <ContactInfo>
        <ContactInfoLink href="tel:+491608382263">
          +49 160 838 22 63
        </ContactInfoLink>
      </ContactInfo>
      <ContactInfo>
        <ContactInfoLink href="mailto:alexandros@alexandrosshomper.de">
          alexandros@alexandrosshomper.de
        </ContactInfoLink>
      </ContactInfo>
      <ButtonContainer>
        <ButtonRow>
          <ButtonMedium
            href="https://www.linkedin.com/in/alexshomper/"
            text="LinkedIn"
            color1={Colors.blue}
            color2={Colors.blueLight}
            icon={mdiLinkedin}
          />
          <ButtonMedium
            href="https://www.xing.com/profile/Alexandros_Shomper"
            text="Xing"
            color1={Colors.green}
            color2={Colors.greenLight}
            icon={mdiXing}
          />
          <ButtonMedium
            href="../vCard/AlexandrosShomper.vcf"
            text="vCard"
            color1={Colors.orange}
            color2={Colors.orangeLight}
            icon={mdiAccountBox}
          />
          <ButtonMedium
            href="../cv/AlexandrosShomper–CirriculumVitae.pdf"
            text="Curriculum Vitae"
            color1={Colors.black}
            color2={Colors.greyDark}
            icon={mdiFilePdfBox}
          />
        </ButtonRow>
      </ButtonContainer>
    </Contact>
  );
};

export default Contact;
