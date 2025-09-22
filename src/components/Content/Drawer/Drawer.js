import React, { useState } from "react";
import styled from "@emotion/styled";

import { Colors, Devices } from "../../DesignSystem";
import { mdiPlus, mdiClose } from "@mdi/js";
import ButtonMedium from "../../Button/ButtonMedium";

const StyledDrawer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin-top: 20px;
  position: static;
  width: 100%;
`;

const DrawerToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0px 0px 0px;
  margin-bottom: 20px;

  ${Devices.tabletS} {
    width: 564px;
  }
  ${Devices.tabletM} {
    width: 708px;
  }
  ${Devices.laptopS} {
    width: 740px;
  }
`;

const StyledDrawerContentWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  display: block;
  overflow: hidden;
  background-color: ${Colors.black};
  border-top: 1px solid ${Colors.greyDark};
  border-bottom: 1px solid ${Colors.greyDark};
  width: 100%;
  margin: 0 auto;
  height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: height 0.3s ease, visibility 0.3s ease;
`;

const DrawerContent = styled.div`
  display: block;
  padding: 30px 0 90px;
  position: static;
  margin: 0 auto;
  width: 100%;
`;

const StyledDrawerGallery = styled.div`
  display: block;
`;

const ScrollingContainer = styled.div`
  position: relative;
  overflow-x: scroll;
  scrollbar-width: none;
  margin-bottom: 10px;
  scroll-padding: 40px;
  scroll-snap-type: x mandatory;
`;

const StyledItemContainer = styled.ul`
  margin: 0;
  position: relative;
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: column;
  width: fit-content;
  list-style-type: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 58.5px;
  padding-left: 58.5px;
  padding-right: 58.5px;
`;

const GalleryItem = styled.li`
  position: relative;
  min-height: 386px;
  width: 690px;
  scroll-snap-align: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: list-item;
  text-align: -webkit-match-parent;

  ${Devices.tabletM} {
    min-height: 583px;
  }
`;

const StyledCardItem = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${Colors.black};
`;

const CardHero = styled.div`
  background-color: ${Colors.greyDark};
  position: relative;
  width: 280px;
  height: 386px;
  border-radius: 20px;
  overflow: hidden;

  ${Devices.tabletM} {
    width: 740px;
    height: 477px;
  }
`;

const StyledPicture = styled.img`
  direction: ltr;
  display: none;
  margin: 0px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  text-align: left;
  text-decoration-thickness: auto;
  text-size-adjust: 100%;
  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;
  visibility: hidden;

  ${Devices.tabletM} {
    display: block;
    visibility: visible;
  }
`;

const PictureMobile = styled.img`
  direction: ltr;
  display: block;
  margin: 0px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  text-align: left;
  text-decoration-thickness: auto;
  text-size-adjust: 100%;
  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;
  visibility: visible;

  ${Devices.tabletM} {
    display: none;
    visibility: hidden;
  }
`;

const StyledCardCopy = styled.div`
  position: relative;
  width: 100%;
  background-color: ${Colors.black};
  color: ${Colors.textWhite};
  margin-top: 30px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 160%;
`;

const Drawer = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
    console.log("CLick!!!");
  };

  return (
    <StyledDrawer>
      <DrawerToggle>
        <ButtonMedium
          text={!isOpen ? "Learn More" : "Close Gallery"}
          color1={!isOpen ? Colors.orange : Colors.greyDark}
          color2={!isOpen ? Colors.orangeLight : Colors.black}
          icon={!isOpen ? mdiPlus : mdiClose}
          clickAction={handleToggle}
        />
      </DrawerToggle>
      <StyledDrawerContentWrapper isOpen={isOpen}>
        <DrawerContent>
          <StyledDrawerGallery>
            <ScrollingContainer id="ScrollingContainer">
              <StyledItemContainer>
                {items.map((item) => (
                  <GalleryItem key={item.id}>
                    <StyledCardItem>
                      <CardHero>
                        <StyledPicture src={item.imgURL} />
                        <PictureMobile src={item.imgMobileURL} />
                      </CardHero>
                      <StyledCardCopy>
                        <b style={{ color: "white" }}>{item.headline}</b>{" "}
                        {item.copy}
                      </StyledCardCopy>
                    </StyledCardItem>
                  </GalleryItem>
                ))}
              </StyledItemContainer>
            </ScrollingContainer>
          </StyledDrawerGallery>
        </DrawerContent>
      </StyledDrawerContentWrapper>
    </StyledDrawer>
  );
};

export default Drawer;
