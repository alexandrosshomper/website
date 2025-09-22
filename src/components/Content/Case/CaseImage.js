import React from "react";
import styled from "@emotion/styled";
import { Colors, Devices } from "../../DesignSystem";

const resolveWidth = (imageSize, sizeMap) => sizeMap[imageSize] || sizeMap.default;

const tabletMWidths = {
  L: "80%",
  M: "708px",
  S: "564px",
  default: "80%",
};

const laptopSWidths = {
  L: "80%",
  M: "740px",
  S: "564px",
  default: "80%",
};

const StyledCaseImage = styled("div", {
  shouldForwardProp: (prop) =>
    !["imageSize", "gradientStart", "gradientEnd"].includes(prop),
})`
  margin-top: 20px;
  margin-bottom: 40px;
  direction: ltr;
  max-width: 740px;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  overflow-x: hidden;
  overflow-y: hidden;
  text-align: left;
  text-decoration-thickness: auto;
  text-size-adjust: 100%;
  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;
  border-radius: 0.38rem;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
  max-width: 90%;
  background-image: linear-gradient(
    to right,
    ${({ gradientStart }) => gradientStart},
    ${({ gradientEnd }) => gradientEnd}
  );

  ${Devices.tabletS} {
    width: 564px;
  }
  ${Devices.tabletM} {
    width: ${({ imageSize }) => resolveWidth(imageSize, tabletMWidths)};
  }
  ${Devices.laptopS} {
    width: ${({ imageSize }) => resolveWidth(imageSize, laptopSWidths)};
  }
  ${Devices.laptopM} {
  }
`;

const Picture = styled.img`
  direction: ltr;
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0px;

  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;

  text-align: left;
  text-decoration-thickness: auto;
  text-size-adjust: 100%;

  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;
`;

const CaseImage = ({ imgURL, alt, color1, color2, size }) => {
  const gradientStart = color1 || Colors.red;
  const gradientEnd = color2 || Colors.redLight;

  return (
    <StyledCaseImage
      imageSize={size}
      gradientStart={gradientStart}
      gradientEnd={gradientEnd}
    >
      <Picture src={imgURL} alt={alt} />
    </StyledCaseImage>
  );
};

export default CaseImage;
