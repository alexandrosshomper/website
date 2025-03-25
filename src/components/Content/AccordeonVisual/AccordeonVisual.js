import React from "react";
import styled from "@emotion/styled";

import { Colors, Devices } from "../../DesignSystem";
import ButtonSmall from "../../Button/ButtonSmall";

const AccordeonVisual = ({ quote, quotee }) => {
  const AccordeonVisual = styled.div`
    /* Auto Layout */
    display: flex;
    flex-direction: row;
    gap; 40px;
    justify-content: space-between;

    width: 100%;
    

    ${Devices.tabletS} {
      width: 576px;
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
  const Accordeon = styled.div`
    /* Auto Layout */

    min-width: 352px;
    max-width: 352px;
  `;

  const Visual = styled.div`
    /* Auto Layout */
    background-color: white;
    display: block;
    width: 66.667%;
    min-height: 300px;

    border-radius: 30px;
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

  return (
    <AccordeonVisual>
      <Accordeon>
        <Option>
          <Title>1. Book a call</Title>
          <Content>
            <Copy>
              Book a user onboarding and activation strategy call. We’ll chat
              about your current product problems and how user onboarding and
              activation can solve them.
            </Copy>
            <ButtonSmall
              href="https://calendar.app.google/qNqHiTZCN54GL2ij7"
              text={"Book my audit"}
              color1={Colors.blue}
              color2={Colors.blueDark}
            />
          </Content>
        </Option>
        <Option>
          <Title>2. Let us do the magic</Title>
          <Content>
            <Copy>
              We’ll develop your user onboarding and activation journey. Well
              audit and design an user onboarding and activation journey that
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
      <Visual></Visual>
    </AccordeonVisual>
  );
};

export default AccordeonVisual;
