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

export const ArticleStyles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 140px;
    margin-top: 40px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ${Devices.tabletS} {
    & > * {
      width: 520px;
    }
  }

  ${Devices.tabletM} {
    & > * {
      width: 520px;
    }
  }

  ${Devices.laptopS} {
    & > * {
      width: 650px;
    }
  }

  & > [data-case-content="wide"] {
    width: 100%;
  }

  & > [data-case-content="full"] {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  :where(h1, h2, h3, h4, h5, h6):not([class]) {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 550;
    color: ${Colors.primaryText.highEmphasis};
    text-align: left;
    margin-top: 0;
    margin-bottom: 16px;
    width: 100%;
  }

  :where(h2):not([class]) {
    font-size: 28px;
    font-weight: 500;
    line-height: 109%;

    ${Devices.tabletS} {
      font-size: 36px;
    }
  }

  :where(h3):not([class]) {
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 0.01em;
    line-height: 40px;
    margin-bottom: 8px;
    -webkit-background-clip: text;
    background-clip: text;
  }

  :where(h4):not([class]) {
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.01em;
    line-height: 24px;
    margin-bottom: 8px;
  }

  :where(p):not([class]) {
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

  :where(ul, ol):not([class]) {
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

  :where(ul):not([class]) {
    list-style-type: disc;
  }

  :where(li):not([class]) {
    margin-bottom: 8px;
  }

  :where(li:last-child):not([class]) {
    margin-bottom: 0;
  }

  :where(strong):not([class]) {
    font-weight: 700;
  }

  :where(em):not([class]) {
    font-style: italic;
  }

  :where(a):not([class]) {
    color: ${Colors.blue};
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }

  section:last-child {
    margin-bottom: 80px;
  }

  section > *:last-child,
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
