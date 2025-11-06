import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { Devices, Colors } from "../../DesignSystem";
import Wortmarke from "../../Identity/Wortmarke";

const MiniNavigation = (props) => {
  const MiniNavigation = styled.header`
    margin: 0px 24px 0px 24px;
    height: 60px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid;
    border-color: ${Colors.primaryText.highEmphasis};
    margin-right: 24px;
    margin-left: 24px;
    flex-direction: row;
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
    width: 217px;
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

  const IdentitySmall = styled.div`
    width: 132px;
    height: 60px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: right;
  `;

  const Logo = styled.div`
    width: 60px;
    height: 60px;
    background-image: url("/img/Identity/Logo/alexandros shomper logo@2x.png");
    background-size: contain;
    box-shadow: 0px 1px 0.1em black, 0 2px 0.2em black;
    border-radius: 60px;
  `;

  return (
    <MiniNavigation>
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
        <SitemapItem
          style={{
            color: Colors.primaryText.mediumEmphasis,
            textDecoration: "line-through",
          }}
        >
          Portfolio
        </SitemapItem>

        <SitemapItem
          style={{
            color: Colors.primaryText.mediumEmphasis,
            textDecoration: "line-through",
          }}
        >
          Journal
        </SitemapItem>
        <SitemapItem>
          <Link
            to={`/contact`}
            style={{
              color: Colors.primaryText.highEmphasis,
              textDecoration: "none",
            }}
          >
            Contact
          </Link>
        </SitemapItem>
      </Sitemap>

      <IdentitySmall>
        <Logo />
        <div style={{ marginTop: "3px" }}>
          <Wortmarke />
        </div>
      </IdentitySmall>
    </MiniNavigation>
  );
};

export default MiniNavigation;
