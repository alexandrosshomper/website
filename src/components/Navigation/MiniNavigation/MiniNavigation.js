import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { Devices, Colors } from "../../DesignSystem";
import Wortmarke from "../../Identity/Wortmarke";
const StyledMiniNavigation = styled.header`
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
const StyledSitemapItem = styled.li`
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
const StyledLogo = styled.div`
    width: 60px;
    height: 60px;
    background-image: url("/img/Identity/Logo/alexandros shomper logo@2x.png");
    background-size: contain;
    box-shadow: 0px 1px 0.1em black, 0 2px 0.2em black;
    border-radius: 60px;
  `;


const MiniNavigation = (props) => {
const Sitemap = styled.ul`
    text-align: left;
    width: 217px;
    list-style-type: none;
    padding: 0px;
    float: left;
    margin: 0px;
    margin-bottom: 12px;
  `;
const IdentitySmall = styled.div`
    width: 132px;
    height: 60px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: right;
  `;
return (
    <StyledMiniNavigation>
      <Sitemap>
        <StyledSitemapItem>
          <Link
            to={`/`}
            style={{
              color: Colors.primaryText.highEmphasis,
              textDecoration: "none",
            }}
          >
            Profile
          </Link>
        </StyledSitemapItem>
        <StyledSitemapItem
          style={{
            color: Colors.primaryText.mediumEmphasis,
            textDecoration: "line-through",
          }}
        >
          Portfolio
        </StyledSitemapItem>

        <StyledSitemapItem
          style={{
            color: Colors.primaryText.mediumEmphasis,
            textDecoration: "line-through",
          }}
        >
          Journal
        </StyledSitemapItem>
        <StyledSitemapItem>
          <Link
            to={`/contact`}
            style={{
              color: Colors.primaryText.highEmphasis,
              textDecoration: "none",
            }}
          >
            Contact
          </Link>
        </StyledSitemapItem>
      </Sitemap>

      <IdentitySmall>
        <StyledLogo />
        <div style={{ marginTop: "3px" }}>
          <Wortmarke />
        </div>
      </IdentitySmall>
    </StyledMiniNavigation>
  );
};

export default MiniNavigation;
