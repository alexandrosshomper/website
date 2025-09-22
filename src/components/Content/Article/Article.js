import styled from "@emotion/styled";
import React from "react";

import { Colors, Devices } from "../../DesignSystem";
import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
const StyledArticle = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: flex-start;
  gap: 24px;
  padding-top: 12px;
  padding-bottom: 32px;
  margin-bottom: 24px;
  max-width: 680px;
  cursor: pointer;
  text-decoration: none;
  margin-left: 24px;
  margin-right: 24px;

  border-bottom: 1px solid ${Colors.primaryText.lowEmphasis};
  ${Devices.tabletS} {
    width: 576px;
  }
  ${Devices.tabletM} {
    min-width: 720px;
    margin-left: 0px;
    margin-right: 0px;
  }
  ${Devices.laptopS} {
    min-width: 864px;
  }
  ${Devices.laptopM} {
    width: 1152px;
  }
`;
const StyledArticleSubline = styled.span`
    position: static;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-weight: 400;
  color: ${Colors.primaryText.mediumEmphasis};
  flex: none;
    order: 0;
    flex-grow: 0;
    font-size: 16px;
    line-height: 142%;
    margin-top: 0 auto;
  display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `;
const StyledArticleHead = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: flex-start
    gap: 8px;
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


const Article = ({ headline, subline, imgURL, meta, link }) => {
const ArticleHeadline = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: normal;

    color: ${Colors.primaryText.highEmphasis};
    margin-bottom: 8px;
    margin-top: 0px;

    font-size: 20px;
    line-height: 109%;
    text-align: left;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    ${Devices.tabletM} {
      font-size: 24px;
      font-weight: 700;
      line-height: 109%;
    }
  `;
const ArticleMeta = styled.span`
    position: static;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-weight: 400;

    color: ${Colors.primaryText.mediumEmphasis};

    flex: none;
    order: 0;
    flex-grow: 0;
    font-size: 13px;
    line-height: 142%;
    margin-top: 18px;
  `;
const ArticleCover = styled.img`
    direction: ltr;
    display: block;

    margin: 0px;

    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    text-align: left;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;

    -webkit-box-direction: normal;
    -webkit-font-smoothing: antialiased;

    width: 80px;
    height: 53px;
    margin-left: 24px;

    ${Devices.tabletM} {
      width: 160px;
      height: auto;
      margin-left: 56px;
    }
  `;

  return (
    <StyledArticle href={link}>
      <StyledArticleHead>
        <ArticleHeadline>
          {headline} <Icon path={mdiOpenInNew} size={0.8} />
        </ArticleHeadline>
        <StyledArticleSubline>{subline}</StyledArticleSubline>
        <ArticleMeta>{meta}</ArticleMeta>
      </StyledArticleHead>
      <ArticleCover src={imgURL} size="S" />
    </StyledArticle>
  );
};

export default Article;
