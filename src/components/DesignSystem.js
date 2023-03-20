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
