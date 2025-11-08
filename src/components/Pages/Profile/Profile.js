import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";

import { Colors, Devices } from "../../DesignSystem";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 24px 160px 24px;
  gap: 64px;

  ${Devices.tabletS} {
    padding: 160px 0 200px 0;
  }
`;

const Hero = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  text-align: center;
`;

const Portrait = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 32px;
  object-fit: cover;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.15);
  border: 4px solid ${Colors.back};

  ${Devices.tabletS} {
    width: 220px;
    height: 220px;
  }
`;

const Name = styled.h1`
  margin: 0;
  font-size: 36px;
  line-height: 120%;
  font-weight: 700;
  color: ${Colors.primaryText.highEmphasis};

  ${Devices.tabletS} {
    font-size: 48px;
  }
`;

const Subline = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 150%;
  color: ${Colors.primaryText.mediumEmphasis};

  ${Devices.tabletS} {
    font-size: 20px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 720px;

  ${Devices.laptopS} {
    max-width: 864px;
  }
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  line-height: 120%;
  color: ${Colors.primaryText.highEmphasis};
  text-align: left;

  ${Devices.tabletS} {
    font-size: 32px;
  }
`;

const CompanyList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CompanyItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 20px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 28px rgba(8, 8, 8, 0.08);
  border: 1px solid rgba(8, 8, 8, 0.05);
`;

const CompanyDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  min-width: 0;
`;

const CompanyIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${Colors.textWhite.highEmphasis};
  background: ${(props) => props.$background};
  text-transform: uppercase;
`;

const CompanyName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${Colors.primaryText.highEmphasis};
  letter-spacing: 0.01em;
`;

const VisitButton = styled.button`
  margin-left: auto;
  padding: 10px 20px;
  border-radius: 999px;
  background: ${Colors.blue};
  color: ${Colors.textWhite.highEmphasis};
  border: none;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover,
  &:focus-visible {
    background: ${Colors.blueDark};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${Colors.blueLight};
    outline-offset: 2px;
  }
`;

const sections = [
  {
    title: "Current",
    items: [
      "UnternehmerTUM",
      "Start2 Group",
      "Werk1",
      "PioneersClub",
    ],
  },
  {
    title: "Startups coached",
    items: ["Norizon", "Muvn", "Codressing", "FuturePM", "FamilyMindAI", "evalu8"],
  },
  {
    title: "Past Work",
    items: [
      "Knauf",
      "Occhio",
      "Magirus",
      "Stabilo",
      "Crown",
      "Medi",
      "MTV",
      "Disney",
      "Studio100",
      "SIXT",
    ],
  },
];

const accentPalette = [
  Colors.blue,
  Colors.orange,
  Colors.green,
  Colors.purple,
  Colors.red,
  Colors.turkish,
  Colors.blueDark,
  Colors.orangeDark,
  Colors.greenDark,
  Colors.purpleDark,
  Colors.redLight,
  Colors.turkishLight,
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

const Profile = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Alexandros Shomper — Profile</title>
        <meta
          name="description"
          content="Profile of Alexandros Shomper, highlighting current engagements, coached startups, and past work."
        />
      </Helmet>

      <Hero>
        <Portrait
          src="/img/Identity/PortraitProSE.png"
          alt="Portrait of Alexandros Shomper"
        />
        <Name>Alexandros Shomper</Name>
        <Subline>Product Designer, Product Manager, Startup Advisor PLG</Subline>
      </Hero>

      {sections.map((section) => (
        <Section key={section.title}>
          <SectionTitle>{section.title}</SectionTitle>
          <CompanyList>
            {section.items.map((company, index) => (
              <CompanyItem key={company}>
                <CompanyDetails>
                  <CompanyIcon
                    $background={
                      accentPalette[index % accentPalette.length]
                    }
                    aria-hidden="true"
                  >
                    {getInitials(company)}
                  </CompanyIcon>
                  <CompanyName>{company}</CompanyName>
                </CompanyDetails>
                <VisitButton type="button" aria-label={`Visit ${company}`}>
                  Visit
                </VisitButton>
              </CompanyItem>
            ))}
          </CompanyList>
        </Section>
      ))}
    </PageWrapper>
  );
};

export default Profile;
