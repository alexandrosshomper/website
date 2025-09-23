import React from "react";
import ReactGA from "react-ga4";
import styled from "@emotion/styled";

import { Colors, Devices } from "../../DesignSystem";
import { ButtonSmall } from "../../Button";

const AccordeonVisual = () => {
  const AccordeonVisual = styled.div`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    gap: 0px;
    justify-content: space-between;

    align-items: center;
    margin: 0px 20px 0px 20px;

    ${Devices.tabletS} {
      width: 576px;
    }
    ${Devices.tabletM} {
      align-items: flex-start;
      flex-direction: row;
      gap: 40px;
      width: 720px;
    }
    ${Devices.laptopS} {
      width: 864px;
    }
    ${Devices.laptopM} {
      width: 1152px;
    }
  `;
  const Accordeon = styled.div`
    /* Auto Layout */

    min-width: 320px;
    max-width: 460px;
  `;
  const VisualWrapper = styled.div`
    max-width: 352px;

    ${Devices.tabletS} {
      max-width: none;
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
    }
  `;
  const Visual = styled.img`
    /* Auto Layout */
    background-color: white;
    display: block;
    width: 100%;
    min-width: 0;
    max-width: none;
    border-radius: 0.38rem;

    ${Devices.tabletS} {
    }
    ${Devices.tabletM} {
    }
    ${Devices.laptopS} {
    }
    ${Devices.laptopM} {
    }
  `;

  const Option = styled.div`
    /* Auto Layout */
    padding-bottom: 24px;
  `;
  const Content = styled.div`
    /* Auto Layout */
  `;
  const Title = styled.h3`
    /* Auto Layout */
  `;
  const Copy = styled.p`
    /* Auto Layout */
  `;
  const hanldeBookAudit = (e, href, instance = "unknown") => {
    e.preventDefault();
    ReactGA.event({
      category: "User",
      action: "book_audit_click",
      label: `Book Audit - ${instance}`,
      value: 10,
      nonInteraction: false,
    });
    setTimeout(() => {
      window.location.href = href;
    }, 150);
    console.log(`Clicked Book Audit - ${instance}`);
  };
  return (
    <AccordeonVisual>
      <Accordeon>
        <Option>
          <Title>1. Book intro call</Title>
          <Content>
            <Copy>
              Book an intro call. I’ll chat about your current product problems
              and how user onboarding and activation can solve them.
            </Copy>
            <ButtonSmall
              clickAction={(e) =>
                hanldeBookAudit(
                  e,
                  "https://calendar.notion.so/meet/alexandros/onboarding-discovery",
                  "pricing-panel-scale"
                )
              }
              text={"Book intro call"}
              color1={Colors.blue}
              color2={Colors.blueDark}
            />
          </Content>
        </Option>
        <Option>
          <Title>2. Let me do the magic</Title>
          <Content>
            <Copy>
              I’ll develop your user onboarding and activation journey. I'll
              audit and design a user onboarding and activation journey that
              it’s clear and converts.
            </Copy>
          </Content>
        </Option>
        <Option>
          <Title>3. Get traction</Title>
          <Content>
            <Copy>
              You’ll get actionable insights and a prioritized checklist that
              will level up your user onboarding and activation.
            </Copy>
          </Content>
        </Option>
      </Accordeon>
      <VisualWrapper>
        <Visual src="./img/Landingpage/HowItWorks.png" />
      </VisualWrapper>
    </AccordeonVisual>
  );
};

export default AccordeonVisual;
