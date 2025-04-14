import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";

import { Colors, Devices } from "../../components/DesignSystem";

import { mdiPlus, mdiClose } from "@mdi/js";

import ButtonMedium from "../../components/Button/ButtonMedium";

const CaseStudySlider = ({ slides }) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

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
  }, [currentIndex]);

  const goToNext = () => {
    setLoading(true);

    setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const goToPrev = () => {
    setLoading(true);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const CaseStudySlider = styled.div`
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

  const Container = styled.div`
    text-align: center;
    max-width: 740px;
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
    min-height: 500px;
    margin-bottom: 10px;
  `;

  const Image = styled.img`
    width: 100%;
    max-height: 500px;
    object-fit: contain;
    border-radius: 8px;
    display: ${loading ? "none" : "block"};
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
    transform: translate(-50%, -50%);

    @keyframes spin {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `;
  const Caption = styled.p`
    font-style: italic;
    margin-bottom: 10px;
  `;

  const Controls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const NavButton = styled.button`
    background-color: #1f2937;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;

    &:disabled {
      background-color: #9ca3af;
      cursor: not-allowed;
    }
  `;

  const SlideIndicator = styled.span`
    font-size: 16px;
    color: ${Colors.primaryText.mediumEmphasis};
    font-weight: 500;
  `;

  return (
    <CaseStudySlider ref={sliderRef}>
      <Container>
        <ImageWrapper>
          {loading && <Spinner />}
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].caption || `Slide ${currentIndex + 1}`}
            onLoad={() => setLoading(false)}
          />
        </ImageWrapper>
        {slides[currentIndex].caption && (
          <Caption>{slides[currentIndex].caption}</Caption>
        )}
        <Controls>
          <NavButton onClick={goToPrev} disabled={currentIndex === 0}>
            Back
          </NavButton>
          <SlideIndicator>
            Slide {currentIndex + 1} of {slides.length}
          </SlideIndicator>
          <NavButton
            onClick={goToNext}
            disabled={currentIndex === slides.length - 1}
          >
            Next
          </NavButton>
        </Controls>
      </Container>
    </CaseStudySlider>
  );
};

export default CaseStudySlider;
