import React from "react";
import styled from "@emotion/styled";

import { Colors, Devices } from "../../DesignSystem";

import { mdiPlus, mdiClose } from "@mdi/js";

import Button from "../../Button/Button";
import { useState } from "react";

const Drawer = ({ items }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    setOpen(!open);
    console.log("CLick!!!");
  };

  const Drawer = styled.div`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    margin-top: 20px;

    position: static;
    left: 0px;
    top: 0px;

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;

    width: 100%;
  `;
  const DrawerToggle = styled.div`
    /* Auto Layout */
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
  const DrawerContentWrapper = styled.div`
    display: block;
    overflow: hidden;
    background-color: ${Colors.black};
    border-top-color: ${Colors.greyDark};
    border-top-width: 1px;
    border-top-style: solid;
    border-bottom-color: ${Colors.greyDark};
    border-bottom-width: 1px;
    border-bottom-style: solid;
    width: 100%;
    margin: 0 auto;
    height: ${open ? "auto" : "0"};
    visibility: ${open ? "visible" : "hidden"};
    transition: height 0.3s ease, visibility 0.3s ease;
  `;
  const DrawerContent = styled.div`
    /* Auto Layout */
    display: block;

    padding: 0px;
    position: static;

    padding: 30px 0 90px;

    margin: 0 auto;
    width: 100%;
  `;

  const DrawerGallery = styled.div`
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
  const ItemContainer = styled.ul`
    margin: 0;
    position: relative;
    display: grid;
    grid-gap: 20px;
    grid-auto-flow: column;
    width: -moz-fit-content;
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
    
    min-height 386px
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
  const CardItem = styled.div`
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
  const Picture = styled.img`
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

  const CardCopy = styled.div`
    position: relative;
    width: 100%;
    background-color: ${Colors.black};
    color: ${Colors.textWhite.mediumEmphasis};
    margin-top: 30px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 600;
    color: ${Colors.textWhite};
    font-size: 17px;
    line-height: 160%;
  `;

  return (
    <Drawer>
      <DrawerToggle>
        <Button
          gradient={{
            from: !open ? Colors.orange : Colors.greyDark,
            to: !open ? Colors.orangeLight : Colors.black,
          }}
          icon={!open ? mdiPlus : mdiClose}
          onClick={handleToggle}
        >
          {!open ? "Learn More" : "Close Gallery"}
        </Button>
      </DrawerToggle>
      <DrawerContentWrapper>
        <DrawerContent>
          <DrawerGallery>
            <ScrollingContainer id="ScrollingContainer">
              <ItemContainer>
                {items.map((item) => (
                  <GalleryItem key={item.id}>
                    <CardItem>
                      <CardHero>
                        <Picture src={`${item.imgURL}`} />
                        <PictureMobile src={`${item.imgMobileURL}`} />
                      </CardHero>
                      <CardCopy>
                        <b style={{ color: "white" }}>{item.headline}</b>{" "}
                        {item.copy}
                      </CardCopy>
                    </CardItem>
                  </GalleryItem>
                ))}
              </ItemContainer>
            </ScrollingContainer>
          </DrawerGallery>
        </DrawerContent>
      </DrawerContentWrapper>
    </Drawer>
  );
};

export default Drawer;
