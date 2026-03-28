import React from "react";
import styled from "@emotion/styled";
import { Devices, Colors } from "../DesignSystem";
import Button from "../Button/Button";
import { mdiEmail } from "@mdi/js";

const mdiLinkedin =
  "M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z";
const Contact = (props) => {
  const Contact = styled.div`
    text-align: left;
    margin-top: 40px;
    margin-bottom: 40px;
  `;

  const Name = styled.h1`
    margin: 0px auto;
    margin-bottom: 24px;

    font-style: normal;
    font-weight: 400;
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
    font-weight: 400;
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
      <Name>Alexandros Shomper</Name>
      <ContactInfo>
        <ContactInfoLink href="mailto:alexandros@alexandrosshomper.de">
          alexandros@alexandrosshomper.de
        </ContactInfoLink>
      </ContactInfo>
      <ButtonContainer>
        <ButtonRow>
          <Button
            size="medium"
            variant="primary"
            href="https://www.linkedin.com/in/alexshomper/"
            text="LinkedIn"
            gradient={{ from: Colors.blue, to: Colors.blueLight }}
            icon={mdiLinkedin}
          />
          <Button
            as="a"
            size="medium"
            variant="primary"
            href="mailto:alexandros@alexandrosshomper.de"
            text="Email"
            gradient={{ from: Colors.black, to: Colors.greyDark }}
            icon={mdiEmail}
          />
        </ButtonRow>
      </ButtonContainer>
    </Contact>
  );
};

export default Contact;
