import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Components
import { Devices } from "../../DesignSystem";
import SectionHead from "../../Content/Section/SectionHead";
import CaseSectionHead from "../../Content/Case/CaseSectionHead";
import NFTGallery from "../../Content/NFTGallery/NFTGallery";
import OpenSeaGallery from "../../Content/NFTGallery/OpenSeaGallery";
import NFTCollectionAnalytics from "../../Content/NFTCollectionAnalytics/NFTCollectionAnalytics";
const StyledContent = styled.div`
  text-align: left;
  margin-top: 72px;
`;
const StyledNFTGalleryGrid = styled.section`
    margin: 0px 24px 0px 24px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    --gap: 24px;
    margin-left: calc(-1 * var(--gap));
    margin-bottom: calc(-1 * var(--gap));
  & > * {
      margin-left: var(--gap);
      margin-bottom: var(--gap);
    }
  ${Devices.tabletS} {
      width: 564px;
    }
    ${Devices.tabletM} {
      width: 708px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    ${Devices.laptopS} {
      width: 852px;
    }
    ${Devices.laptopM} {
      width: 1140px;
    }
  `;

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
        hidden: {
          opacity: 0,
        },
      }}
    >
      {children}
    </motion.div>
  );
}

const Content = (props) => {
const Section = styled.section`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    /* Inside Auto Layout */
    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
    margin-bottom: 200px;
  `;
return (
    <StyledContent>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Heraklit NFT | Alexandros Shomper</title>
        <description>
          Digital Anthopologist. Experienced Product-, Service & Business
          Designer with demonstrated track record of successfully developing
          meaningful experiences that people love by using emerging technology,
          solid company purpose, and a strong brand to elevate human experiences
          and interactions.
        </description>
      </Helmet>
      <Section>
        <SectionHead subline="Heraklit NFT" />
        <CaseSectionHead
          headline="The way up and the way down are one and the same."
          subline="An Idea of a Consistency in Difference, of a conflicting Harmony and Composition. This Series attempts to visualize this very Idea with the Interpretation of one of Heraklit's most applicable Wisdoms."
        />
      </Section>
      <Section>
        <NFTCollectionAnalytics collectionName="cryptopunks" />
        <StyledNFTGalleryGrid>
          <OpenSeaGallery offset="0" limit="40" slug="cryptopunks" />
          <OpenSeaGallery offset="40" limit="40" slug="cryptopunks" />
          <OpenSeaGallery offset="0" limit="40" slug="the-fungible-by-pak" />
          <OpenSeaGallery offset="0" limit="2" slug="heraklit" />

          <FadeInWhenVisible>
            <NFTGallery
              eyebrow="Heraklit"
              eyebrowColor1="#FF0000"
              eyebrowColor2="#FFCC00"
              headline="Heraklit [P 00 FFF 01 00 00 00]"
              copy="The way up and the way down are one and the same."
              imgURL="./img/Heraklit/Heraklit [P 00 FFF 01 00 00 00].png"
              price="0.1"
              link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/111589776352736674838778066049010664931120148642497133493220937301359675310081"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <NFTGallery
              eyebrow="Heraklit"
              eyebrowColor1="#FF0000"
              eyebrowColor2="#FFCC00"
              headline="Heraklit [P 00 FFF 01 00 00 00]"
              copy="The way up and the way down are one and the same."
              imgURL="./img/Heraklit/Heraklit [P 00 FFF 01 00 00 00].png"
              price="0.5"
              link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/111589776352736674838778066049010664931120148642497133493220937301359675310081"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <NFTGallery
              eyebrow="Heraklit"
              eyebrowColor1="#FF0000"
              eyebrowColor2="#FFCC00"
              headline="Heraklit [P 00 FFF 01 00 00 00]"
              copy="The way up and the way down are one and the same."
              imgURL="./img/Heraklit/Heraklit [P 00 FFF 01 00 00 00].png"
              price="0.2"
              link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/111589776352736674838778066049010664931120148642497133493220937301359675310081"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <NFTGallery
              eyebrow="Heraklit"
              eyebrowColor1="#FF0000"
              eyebrowColor2="#FFCC00"
              headline="Heraklit [P 00 FFF 01 00 00 00]"
              copy="The way up and the way down are one and the same."
              imgURL="./img/Heraklit/Heraklit [P 00 FFF 01 00 00 00].png"
              price="0.9"
              link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/111589776352736674838778066049010664931120148642497133493220937301359675310081"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <NFTGallery
              eyebrow="Heraklit"
              eyebrowColor1="#FF0000"
              eyebrowColor2="#FFCC00"
              headline="Heraklit [P 00 FFF 01 00 00 00]"
              copy="The way up and the way down are one and the same."
              imgURL="./img/Heraklit/Heraklit [P 00 FFF 01 00 00 00].png"
              price="0.5"
              link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/111589776352736674838778066049010664931120148642497133493220937301359675310081"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <NFTGallery
              eyebrow="Heraklit"
              eyebrowColor1="#FF0000"
              eyebrowColor2="#FFCC00"
              headline="Heraklit [P 00 FFF 01 00 00 00]"
              copy="The way up and the way down are one and the same."
              imgURL="./img/Heraklit/Heraklit [P 00 FFF 01 00 00 00].png"
              price="0.2"
              link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/111589776352736674838778066049010664931120148642497133493220937301359675310081"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <NFTGallery
              eyebrow="Heraklit"
              eyebrowColor1="#FF0000"
              eyebrowColor2="#FFCC00"
              headline="Heraklit [P 00 FFF 01 00 00 00]"
              copy="The way up and the way down are one and the same."
              imgURL="./img/Heraklit/Heraklit [P 00 FFF 01 00 00 00].png"
              price="0.4"
              link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/111589776352736674838778066049010664931120148642497133493220937301359675310081"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <NFTGallery
              eyebrow="Heraklit"
              eyebrowColor1="#FF0000"
              eyebrowColor2="#FFCC00"
              headline="Heraklit [P 00 FFF 01 00 00 00]"
              copy="The way up and the way down are one and the same."
              imgURL="./img/Heraklit/Heraklit [P 00 FFF 01 00 00 00].png"
              price="0.1"
              link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/111589776352736674838778066049010664931120148642497133493220937301359675310081"
            />
          </FadeInWhenVisible>
        </StyledNFTGalleryGrid>
      </Section>
    </StyledContent>
  );
};

export default Content;
