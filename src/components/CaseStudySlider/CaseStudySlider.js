import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "@emotion/styled";

import { Colors, Devices } from "../../components/DesignSystem";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SliderRoot = styled.div`
  /* Auto Layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  margin: 20px auto 40px auto;

  position: static;
  left: 0px;
  top: 0px;

  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  width: 90%;
  scroll-margin-top: 120px;
  ${Devices.tabletS} {
    width: 564px;
  }
  ${Devices.tabletM} {
    width: 708px;
  }
  ${Devices.laptopS} {
    width: 740px;
  }
  ${Devices.laptopM} {
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  max-width: 740px;
  min-width: 100%;
  margin: 0 auto;
  ${Devices.tabletS} {
    width: 80%;
  }
  ${Devices.tabletM} {
    width: 80%;
  }
  ${Devices.laptopS} {
    width: 80%;
  }
  ${Devices.laptopM} {
  }
`;

const ImageWrapper = styled.div`
  min-width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  margin-bottom: 10px;
  position: relative;

  ${Devices.tabletS} {
  }
  ${Devices.tabletM} {
  }
  ${Devices.laptopS} {
  }
  ${Devices.laptopM} {
  }
`;

const Bild = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0.38rem;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  ${Devices.tabletS} {
  }
  ${Devices.tabletM} {
  }
  ${Devices.laptopS} {
  }
  ${Devices.laptopM} {
  }
`;

const Spinner = styled.div`
  border: 4px solid #e5e7eb;
  border-top: 4px solid ${Colors.blue};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 0.8s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50 %, -50 %);
`;

const NavigationIndicator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
  gap: 4px;
  order: -1;
  ${Devices.tabletS} {
    justify-content: center;
    align-items: center;
    order: 0;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${Colors.textWhite.lowEmphasis};
  border-radius: 1px;
  position: relative;
  margin-top: 8px;
  display: none;
  ${Devices.tabletS} {
    display: block;
  }
`;

const ProgressFill = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: ${Colors.blue};
  border-radius: 1px;
  transition: width 0.3s ease-in-out;
  width: ${(props) => (props.progress * 100) / props.total}%;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4px;
`;

const Headline = styled.h3`
  margin: 0px;
  font-size: 14px;
  font-weight: 500;
`;

const Caption = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0px;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;
const NavButton = styled.button`
  background-color: ${Colors.textWhite.mediumEmphasis};
  color: ${Colors.text.mediumEmphasis};
  border: none;
  padding: 13px 13px;
  border-radius: 50%;
  height: 52px;
  width: 52px;
  font-size: 14px;
  cursor: pointer;
  touch-action: manipulation;
  &:hover {
    background-color: ${Colors.textWhite.highEmphasis};
    color: ${Colors.text.highEmphasis};
  }
  &:disabled {
    background-color: ${Colors.textWhite.lowEmphasis};
    color: ${Colors.text.lowEmphasis};

    cursor: not-allowed;
  }
`;

const SlideIndicator = styled.span`
  font-size: 14px;
  color: ${Colors.primaryText.mediumEmphasis};
  font-weight: 500;
`;

const CaseStudySlider = ({ slides }) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentImageLoaded, setCurrentImageLoaded] = useState(false);

  const preloadImage = useCallback((url) => {
    const img = new window.Image();
    img.src = url;
    img.onload = () => {
      console.log("Preloaded:", url);
    };
    img.onerror = () => {
      console.warn("Failed to preload:", url);
    };
  }, []);

  const goToNext = useCallback(() => {
    setLoading(true);
    setCurrentImageLoaded(false);
    setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setLoading(true);
    setCurrentImageLoaded(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        goToNext();
        sliderRef.current?.scrollIntoView({ behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        goToPrev();
        sliderRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  useEffect(() => {
    const nextIndex = currentIndex + 1;
    const prevIndex = currentIndex - 1;

    if (nextIndex < slides.length) {
      preloadImage(slides[nextIndex].image);
    }
    if (prevIndex >= 0) {
      preloadImage(slides[prevIndex].image);
    }
  }, [currentIndex, preloadImage, slides]);

  return (
    <SliderRoot ref={sliderRef}>
      <Container>
        <ImageWrapper>
          {loading && <Spinner />}
          <Bild
            src={slides[currentIndex].image}
            alt={slides[currentIndex].caption || `Slide ${currentIndex + 1}`}
            onLoad={() => {
              setCurrentImageLoaded(true);
              setLoading(false);
            }}
            isVisible={currentImageLoaded}
          />
          {currentIndex < slides.length - 1 && (
            <Bild
              src={slides[currentIndex + 1].image}
              alt={
                slides[currentIndex + 1].caption || `Slide ${currentIndex + 2}`
              }
              isVisible={false}
            />
          )}
          {currentIndex > 0 && (
            <Bild
              src={slides[currentIndex - 1].image}
              alt={slides[currentIndex - 1].caption || `Slide ${currentIndex}`}
              isVisible={false}
            />
          )}
        </ImageWrapper>

        <Controls>
          <NavButton onClick={goToPrev} disabled={currentIndex === 0}>
            <ChevronLeft size={26} strokeWidth={1.5} />
          </NavButton>
          <NavigationIndicator>
            <TextGroup>
              {slides[currentIndex].headline && (
                <Headline>{slides[currentIndex].headline}</Headline>
              )}
              {slides[currentIndex].caption && (
                <Caption>{slides[currentIndex].caption}</Caption>
              )}
            </TextGroup>
            <ProgressBar>
              <ProgressFill progress={currentIndex + 1} total={slides.length} />
            </ProgressBar>
            <SlideIndicator>
              Slide {currentIndex + 1} of {slides.length}
            </SlideIndicator>
          </NavigationIndicator>
          <NavButton
            onClick={goToNext}
            disabled={currentIndex === slides.length - 1}
          >
            <ChevronRight size={26} strokeWidth={1.5} />
          </NavButton>
        </Controls>
      </Container>
    </SliderRoot>
  );
};
export default CaseStudySlider;
