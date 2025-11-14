import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { Devices, Colors } from "../DesignSystem";
import IdentitySmall from "../Identity/IdentitySmall";

const Footer = (props) => {
  const Footer = styled.footer`
    margin: 0px 24px 0px 24px;
    height: 132px;
    padding-top: 12px;
    border-top: 1px solid;
    border-color: ${Colors.primaryText.highEmphasis};
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

  const Sitemap = styled.ul`
    text-align: left;
    width: 132px;
    list-style-type: none;
    padding: 0px;
    float: left;
    margin: 0px;
    margin-bottom: 12px;
  `;

  const SitemapItem = styled.li`
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: normal;
    line-height: 137%;

    font-weight: 300;
    color: ${Colors.primaryText.mediumEmphasis};
    &:hover {
      color: ${Colors.primaryText.highEmphasis};
      cursor: pointer;
    }
  `;

  const Legals = styled.div`
    margin: 0px;
    text-align: left;
    width: 276px;
    list-style-type: none;
    padding: 0px;

    margin-left: 0px;
    margin-top: 2px;

    float: left;
    ${Devices.tabletS} {
      float: right;
    }
  `;

  /*const LegalsItem = styled.a`
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: normal;
    line-height: 137%;
    font-weight: 300;
    margin-right: 12px;
    color: rgba(0, 0, 0, 0.86);
    &:hover {
      color: rgba(0, 0, 0, 1);
      cursor: pointer;
    }
  `;*/

  const Copyright = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: normal;
    line-height: 137%;
    font-weight: 300;
    color: ${Colors.primaryText.highEmphasis};

    width: 269px;
    height: 15px;

    margin: 0px;
    margin-top: 22px;
  `;

  const FooterHead = styled.div`
    width: 100%;
    height: 60px;
    margin-bottom: 12px;
  `;

  const FooterBody = styled.div`
    width: 100%;
    height: 60px;
    margin-bottom: 36px;
  `;

  const SocialBunch = styled.div`
    width: 100%;
    height: 24px;
    margin-bottom: 4px;
  `;
  const SocialLink = styled.a`
    width: 24px;
    height: 24px;
    margin-right: 12px;
  `;

  const SocialIcon = styled.img`
    width: 24px;
    height: 24px;
    opacity: 0.86;
    &:hover {
      opacity: 1;
    }
  `;

  return (
    <Footer>
      <FooterHead>
        <IdentitySmall />
      </FooterHead>
      <FooterBody>
        <Sitemap>
          <SitemapItem>
            <Link
              to={`/profile`}
              style={{
                color: Colors.primaryText.highEmphasis,
                textDecoration: "none",
              }}
            >
              Profile
            </Link>
          </SitemapItem>
          <SitemapItem>
            <Link
              to={`/portfolio`}
              style={{
                color: Colors.primaryText.highEmphasis,
                textDecoration: "none",
              }}
            >
              Portfolio
            </Link>
          </SitemapItem>
          <SitemapItem>
            <Link
              to={`/writing`}
              style={{
                color: Colors.primaryText.highEmphasis,
                textDecoration: "none",
              }}
            >
              Writing
            </Link>
          </SitemapItem>
        </Sitemap>

        <Legals>
          <SocialBunch>
            <SocialLink href="https://www.linkedin.com/in/alexshomper/">
              <SocialIcon
                src="/img/social/LinkedIn@2x.png"
                alt="LinkedIn Profile of Alexandros Shomper"
              />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/alexshomper">
              <SocialIcon
                src="/img/social/Instagram@2x.png"
                alt="Instagram Profile of Alexandros Shomper"
              />
            </SocialLink>
            <SocialLink href="https://open.spotify.com/user/1121938589">
              <SocialIcon
                src="/img/social/Spotify@2x.png"
                alt="Spotify Profile of Alexandros Shomper"
              />
            </SocialLink>
          </SocialBunch>
          {/*<LegalsItem href="/contact">Terms</LegalsItem>
          <LegalsItem href="/contact">Privacy</LegalsItem>
          <LegalsItem href="/contact">Cookies</LegalsItem>*/}
          <Copyright>© 2025 Alexandros Shomper. All rights reserved.</Copyright>
        </Legals>
      </FooterBody>
    </Footer>
  );
};

export default Footer;
