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
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.15);

  ${Devices.tabletS} {
    width: 440px;
    height: 260px;
  }
`;

const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const Name = styled.h1`
  margin: 0;
  font-size: 36px;
  line-height: 120%;
  font-weight: 500;
  color: ${Colors.primaryText.highEmphasis};

  ${Devices.tabletS} {
    font-size: 36px;
  }
`;

const Subline = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 150%;
  color: ${Colors.primaryText.mediumEmphasis};

  width: 100%;
  max-width: 720px;

  ${Devices.tabletS} {
    font-size: 20px;
    margin: 0 auto;
    width: 600px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 720px;

  margin-right: 24px;
  margin-left: 24px;
  ${Devices.tabletS} {
    margin: 0 auto;
    width: 564px;
  }
  ${Devices.tabletM} {
    width: 708px;
  }
  ${Devices.laptopS} {
    width: 852px;
  }
  ${Devices.laptopM} {
    width: 1140px;
  }
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  line-height: 120%;
  color: ${Colors.primaryText.mediumEmphasis};
  text-align: left;

  ${Devices.tabletS} {
    font-size: 16px;
  }
`;

const CompanyList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 28px rgba(8, 8, 8, 0.08);
  overflow: hidden;
`;

const CompanyItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 20px;
  background: #ffffff;

  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(8, 8, 8, 0.08);
  }
  ${Devices.tabletS} {
    align-items: center;
  }
`;

const CompanyDetails = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex: 1;
  min-width: 0;
  ${Devices.tabletS} {
    align-items: center;
  }
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
  background-image: ${(props) =>
    props.$background ? `url(${props.$background})` : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-transform: uppercase;
  flex-shrink: 0;
`;

const CompanyName = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
  line-height: 140%;
  color: ${Colors.primaryText.highEmphasis};
  letter-spacing: 0.01em;
`;

const CompanyText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  min-width: 0;
  text-align: left;
`;

const CompanySubline = styled.span`
  font-size: 15px;
  line-height: 150%;
  color: ${Colors.primaryText.mediumEmphasis};
  letter-spacing: 0.01em;
`;

const VisitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding: 10px 20px;
  border-radius: 999px;
  background: ${Colors.greyLight};
  color: ${Colors.text.highEmphasis};
  border: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    background: ${Colors.greyDark};
    color: ${Colors.textWhite.highEmphasis};
  }

  &:visited {
    color: ${Colors.text.highEmphasis};
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
      {
        name: "Kimarina",
        subline: "Founder, Growth & Product Design Consultancy",
        label: "Visit",
        url: "https://kimarina.com",
        logo: "/img/company-logos/kimarina.jpeg",
      },
      {
        name: "UnternehmerTUM",
        subline: "Startup Advisor PMF, Growth & Product Design",
        label: "Visit",
        url: "https://www.unternehmertum.de",
        logo: "/img/company-logos/unternehmertum.jpeg",
      },
      {
        name: "Start2 Group",
        subline: "Startup Advisor Growth & Product Design",
        label: "Visit",
        url: "https://www.start2.group",
        logo: "/img/company-logos/start2.jpeg",
      },
      {
        name: "PioneersClub",
        subline: "Startup Advisor PMF, Growth & Product Design",
        label: "Visit",
        url: "https://pioneersclub.io",
        logo: "/img/company-logos/pioneersclub.jpeg",
      },
    ],
  },
  {
    title: "Startups coached",
    items: [
      {
        name: "Muvn",
        subline: "Pre-Seed",
        label: "Visit",
        url: "https://www.muvn.de",
        logo: "/img/company-logos/muvn.jpeg",
      },
      {
        name: "Norizon",
        subline: "Pre-Seed",
        label: "Visit",
        url: "https://norizon.de",
        logo: "/img/company-logos/norizon.jpeg",
      },
      {
        name: "Codressing",
        subline: "Pre-Seed",
        label: "Visit",
        url: "https://www.co-dressing.com",
        logo: "/img/company-logos/codressing.jpeg",
      },
      {
        name: "FamilyMindAI",
        subline: "Pre-Seed",
        label: "Visit",
        url: "https://familymind.ai",
        logo: "/img/company-logos/familymindai.jpeg",
      },
    ],
  },
  {
    title: "Past Work",
    items: [
      {
        name: "Knauf",
        subline: "Product Owner, Product Design Manager",
        label: "Cases",
        url: "/portfolio",
        logo: "/img/company-logos/knauf.jpeg",
      },
      {
        name: "Occhio",
        subline: "Product Owner & UX Manager",
        label: "Cases",
        url: "/portfolio",
        logo: "/img/company-logos/occhio.jpeg",
      },
      {
        name: "Magirus",
        subline: "Art Director, Product Owner & UX Designer (Agency)",
        logo: "/img/company-logos/magirus.jpeg",
      },
      {
        name: "Stabilo",
        subline: "Art Director (Agency)",
        logo: "/img/company-logos/stabilo.jpeg",
      },
      {
        name: "Crown",
        subline: "Art Director (Agency)",
        logo: "/img/company-logos/crown.jpeg",
      },
      {
        name: "Medi",
        subline: "Art Director (Agency)",
        logo: "/img/company-logos/medi.jpeg",
      },
      {
        name: "Disney",
        subline: "Art Director (Agency)",
        logo: "/img/company-logos/disney.jpeg",
      },
      {
        name: "Studio 100",
        subline: "Art Director (Agency)",
        logo: "/img/company-logos/studio100.jpeg",
      },
      {
        name: "Sixt",
        subline: "Art Director (Agency)",
        logo: "/img/company-logos/sixt.jpeg",
      },
    ],
  },
];

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
        <NameBlock>
          <Name>Alexandros Shomper</Name>
          <Subline>
            <b>Product Design Leader & Startup Advisor</b>
          </Subline>
        </NameBlock>

        <Subline>
          Now seeking a Product Design Manager role in a high-growth environment
          where strategic leadership and hands-on execution accelerate product
          maturity and user value.
        </Subline>
        <br />
      </Hero>

      {sections.map((section) => (
        <Section key={section.title}>
          <SectionTitle>{section.title}</SectionTitle>
          <CompanyList>
            {section.items.map((company, index) => (
              <CompanyItem key={company.name}>
                <CompanyDetails>
                  <CompanyIcon
                    $background={company.logo}
                    aria-hidden="true"
                  ></CompanyIcon>
                  <CompanyText>
                    <CompanyName>{company.name}</CompanyName>
                    <CompanySubline>{company.subline}</CompanySubline>
                  </CompanyText>
                </CompanyDetails>
                {company.url && (
                  <VisitButton
                    as="a"
                    href={company.url}
                    {...(company.url.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={`Visit ${company.name}`}
                  >
                    {company.label}
                  </VisitButton>
                )}
              </CompanyItem>
            ))}
          </CompanyList>
        </Section>
      ))}
    </PageWrapper>
  );
};

export default Profile;
