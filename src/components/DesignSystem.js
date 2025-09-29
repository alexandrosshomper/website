import styled from "@emotion/styled";
import { css } from "@emotion/react";

//const breakpoints = [576, 768, 1024, 1220];
//const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

/*const sizes = [
  4,
  8,
  16,
  24,
  32,
];*/

const ScreenSizes = {
  mobileS: `320px`,
  mobileM: `375px`,
  mobileL: `425px`,
  tabletS: `576px`,
  tabletM: `768px`,
  tabletL: `1024px`,
  laptopS: `1024px`,
  laptopM: `1220px`,
  laptopL: `1440px`,
  desktopS: `2048px`,
  desktopM: `2560px`,
  desktopL: `2880px`,
};

export const Devices = {
  mobileS: `@media (min-width: ${ScreenSizes.mobileS})`,
  mobileM: `@media (min-width: ${ScreenSizes.mobileM})`,
  mobileL: `@media (min-width: ${ScreenSizes.mobileL})`,
  mobile: `@media (min-width: ${ScreenSizes.mobileM})`,
  tabletS: `@media (min-width: ${ScreenSizes.tabletS})`,
  tabletM: `@media (min-width: ${ScreenSizes.tabletM})`,
  tabletL: `@media (min-width: ${ScreenSizes.tabletL})`,
  tablet: `@media (min-width: ${ScreenSizes.tabletM})`,
  laptopS: `@media (min-width: ${ScreenSizes.laptopS})`,
  laptopM: `@media (min-width: ${ScreenSizes.laptopM})`,
  laptopL: `@media (min-width: ${ScreenSizes.laptopL})`,
  laptop: `@media (min-width: ${ScreenSizes.laptopM})`,
  desktopS: `@media (min-width: ${ScreenSizes.desktopS})`,
  desktopM: `@media (min-width: ${ScreenSizes.desktopM})`,
  desktopL: `@media (min-width: ${ScreenSizes.desktopL})`,
  desktop: `@media (min-width: ${ScreenSizes.desktopM})`,
};

export const Spacing = {
  vertical: ``,
  horizintal: ``,
};

/*const TextFormats = {
  headline1: `fontsize, lineheight, letterspacing, color, etc.`,
  ${ mq[0] } { }
          ${mq[1]} {
      
          }
          ${mq[2]} {
      
          }
          ${mq[3]} {
      
          }
};*/

export const Colors = {
  text: `#080808`,
  primaryText: {
    highEmphasis: `rgba(0, 0, 0, 0.86)`,
    mediumEmphasis: `rgba(0, 0, 0, 0.54)`,
    lowEmphasis: "rgba(0, 0, 0, 0.38)",
  },
  textWhite: {
    highEmphasis: `rgba(255, 255, 255, 0.86)`,
    mediumEmphasis: `rgba(255, 255, 255, 0.54)`,
    lowEmphasis: "rgba(255, 255, 255, 0.38)",
  },
  background: `#f8f8f8`,
  black: `black`,
  front: `black`,
  back: `white`,
  greyDark: `#080808`,
  greyLight: `rgba(0, 0, 0, 0.05)`,
  red: `#ff1744`,
  redLight: `#ff616f`,
  redDark: `#c4001d`,
  blue: `#304ffe`,
  blueLight: `#7a7cff`,
  blueVeryLight: `#BFCFFF`,
  blueDark: `#0026ca`,
  blueBackground: `rgb(213 244 255)`,
  green: `#00c853`,
  greenLight: `#5efc82`,
  greenDark: `#009624`,
  greenBackground: `rgb(192 246 166)`,
  yellow: `#ffc400`,
  yellowLight: `#fff64f`,
  yellowDark: `#c79400`,
  purple: `#6200ea`,
  purpleLight: `#9d46f`,
  purpleDark: `#0a00b6`,
  turkish: `#00b8d4`,
  turkishLight: `#62ebff`,
  turkishDark: `#0088e3`,
  orange: `#ff6d00`,
  orangeLight: `#ff9e40`,
  orangeDark: `#c43c00`,
  orangeBackground: `rgb(255 235 202)`,
};

export const Gradients = {
  raindient: ``,
  red: `#ff1744`,
  redLight: `#ff616f`,
  redDark: `#c4001d`,
  blue: `#304ffe`,
  blueLight: `#7a7cff`,
  blueDark: `#0026ca`,
  green: `#00c853`,
  greenLight: `#5efc82`,
  greenDark: `#009624`,
  yellow: `#ffc400`,
  yellowLight: `#fff64f`,
  yellowDark: `#c79400`,
  purple: `#6200ea`,
  purpleLight: `#9d46f`,
  purpleDark: `#0a00b6`,
  turkish: `#00b8d4`,
  turkishLight: `#62ebff`,
  turkishDark: `#0088e3`,
  orange: `#ff6d00`,
  orangeLight: `#ff9e40`,
  orangeDark: `#c43c00`,
};

export const Sounds = {};

const getArticleSectionVariant = (props) => {
  const variant =
    props.$width ||
    props.$variant ||
    props["data-article-width"] ||
    props["data-case-content"] ||
    props["data-report-content"];

  if (variant === "wide" || variant === "full") {
    return variant;
  }

  return "default";
};

export const ArticleContent = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > [data-article-section]:last-child {
    margin-bottom: 80px;
  }
`;

const articleTypographyStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 550;
    color: ${Colors.primaryText.highEmphasis};
    text-align: left;
    margin-top: 0;
    margin-bottom: 16px;
    width: 100%;
  }

  h2 {
    font-size: 28px;
    font-weight: 500;
    line-height: 109%;

    ${Devices.tabletS} {
      font-size: 36px;
    }
  }

  h3 {
    font-size: 30px;
    font-weight: 500;
    line-height: 115%;
    letter-spacing: 0.01em;
    line-height: 40px;
    margin-bottom: 8px;
    -webkit-background-clip: text;
    background-clip: text;
  }

  h4 {
    font-size: 22px;
    font-weight: 500;
    line-height: 115%;
    letter-spacing: 0.01em;
    line-height: 24px;
    margin-bottom: 8px;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 1.7499375rem;
    color: ${Colors.primaryText.highEmphasis};
    margin-top: 0;
    margin-bottom: 24px;
    width: 100%;
  }

  ul,
  ol {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 1.7499375rem;
    color: ${Colors.primaryText.highEmphasis};
    padding-left: 24px;
    margin-top: 8px;
    margin-bottom: 40px;
    list-style-position: outside;
    margin-block-start: 21.25px;
    tab-size: 4;
    margin-left: 12px;
    padding-left: 32px;
    padding-inline-start: 32px;
  }

  ul {
    list-style-type: disc;
  }

  li {
    margin-bottom: 8px;
  }

  li:last-child {
    margin-bottom: 0;
  }

  strong {
    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  a {
    color: ${Colors.blue};
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }

  & > *:last-child,
  div > *:last-child {
    margin-bottom: 0px;
  }

  [data-report-form] {
    width: 100%;
    margin: 48px auto 40px;
    display: flex;
    justify-content: center;
  }

  [data-report-form] > * {
    width: 100%;
  }
`;

export const ArticleSectionContent = styled.div`
  width: 100%;
  ${articleTypographyStyles}
`;

export const ArticleSection = styled.section`
  width: ${(props) =>
    getArticleSectionVariant(props) === "default" ? "70%" : "100%"};
  margin-left: ${(props) =>
    getArticleSectionVariant(props) === "full" ? "0" : "auto"};
  margin-right: ${(props) =>
    getArticleSectionVariant(props) === "full" ? "0" : "auto"};
  margin-top: 40px;
  margin-bottom: 140px;

  ${Devices.tabletS} {
    width: ${(props) =>
      getArticleSectionVariant(props) === "default" ? "520px" : "100%"};
  }

  ${Devices.tabletM} {
    width: ${(props) =>
      getArticleSectionVariant(props) === "default" ? "520px" : "100%"};
  }

  ${Devices.laptopS} {
    width: ${(props) =>
      getArticleSectionVariant(props) === "default" ? "650px" : "100%"};
  }
`;

ArticleSection.defaultProps = {
  "data-article-section": true,
};

export const ArticleHeadline = styled.h1`
  direction: ltr;
  display: block;
  margin: 0 0 4px;

  text-align: left;
  -webkit-font-smoothing: antialiased;
  font-weight: 500;
  font-size: 36px;
  line-height: 120%;
  width: 90%;
  color: ${Colors.primaryText.highEmphasis};

  ${Devices.tabletS} {
    width: 520px;
    font-size: 50px;
    line-height: 120%;
  }

  ${Devices.tabletM} {
    width: 520px;
  }

  ${Devices.laptopS} {
    width: 650px;
  }
`;

export const ArticleSubline = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 550;
  letter-spacing: 0.04rem;
  margin: 0 0 8px;

  color: ${Colors.primaryText.mediumEmphasis};
  font-size: 28px;
  line-height: 112%;
  text-align: left;
  width: 90%;

  ${Devices.tabletS} {
    width: 520px;
    font-size: 36px;
    line-height: 112%;
  }

  ${Devices.tabletM} {
    width: 520px;
  }

  ${Devices.laptopS} {
    width: 650px;
  }
`;

const OverviewPageHeadline = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;

  color: ${Colors.primaryText.highEmphasis};
  margin-bottom: 8px;
  margin-top: 0px;

  font-size: 44px;
  line-height: 109%;
  text-align: left;

  ${Devices.tabletS} {
    text-align: left;
    width: 564px;
  }

  ${Devices.tabletM} {
    width: 708px;
    font-size: 44px;
    line-height: 114%;
  }

  ${Devices.laptopS} {
    width: 852px;
    font-size: 64px;
    line-height: 131%;
  }

  ${Devices.laptopM} {
    width: 996px;
    font-size: 80px;
    line-height: 114%;
  }
`;

const OverviewPageSubline = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;

  color: ${Colors.primaryText.mediumEmphasis};
  margin-bottom: 8px;
  margin-top: 0px;

  font-size: 32px;
  line-height: 112%;
  text-align: left;
  width: 100%;

  ${Devices.tabletS} {
    text-align: left;
    width: 576px;
  }

  ${Devices.tabletM} {
    width: 708px;
    font-size: 36px;
    line-height: 111%;
  }

  ${Devices.laptopS} {
    width: 852px;
    font-size: 48px;
    line-height: 100%;
  }

  ${Devices.laptopM} {
    width: 1141px;
    font-size: 60px;
    line-height: 113%;
  }
`;

const OverviewPageCopy = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: ${Colors.primaryText.highEmphasis};
  margin: 0px 24px 24px 24px;

  font-size: 20px;
  line-height: 120%;
  text-align: left;

  ${Devices.tabletS} {
    text-align: left;
    width: 576px;
  }

  ${Devices.tabletM} {
    width: 720px;
    font-size: 36px;
    line-height: 111%;
    margin-bottom: 32px;
    margin-left: 0px;
    margin-right: 0px;
  }

  ${Devices.laptopS} {
    width: 864px;
    font-size: 36px;
    line-height: 100%;
    margin-bottom: 38px;
  }

  ${Devices.laptopM} {
    width: 1152px;
    font-size: 42px;
    line-height: 113%;
    margin-bottom: 46px;
  }
`;

const OverviewPageSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  text-align: left;

  margin: 0px 24px 60px 24px;

  &:last-child {
    margin-bottom: 0px;
  }

  ${Devices.tabletS} {
    width: 100%;
    margin: 0px 0px 60px 0px;
  }

  ${Devices.tabletM} {
    width: 90%;
  }

  ${Devices.laptop} {
    width: 80%;
  }
`;

export const OverviewPages = {
  Headline: OverviewPageHeadline,
  Subline: OverviewPageSubline,
  Copy: OverviewPageCopy,
  Summary: OverviewPageSummary,
};
