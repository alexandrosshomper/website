import React from "react";
import styled from "@emotion/styled";
import { X } from "lucide-react";

import { Devices } from "../DesignSystem";

const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.48);
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  align-items: ${({ $align }) => $align};
  padding: 24px;
  z-index: 10000;
  overflow-y: auto;

  ${Devices.tabletS} {
    align-items: ${({ $alignTablet, $align }) => $alignTablet || $align};
  }
`;

const LightboxContainer = styled.div`
  background: #ffffff;
  border-radius: 26px;
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth || "600px"};
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  max-height: calc(100vh - 48px);
  max-height: calc(100dvh - 48px);

  ${Devices.tabletS} {
    max-height: ${({ $maxHeight }) => $maxHeight || "80vh"};
  }
`;

const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${({ $padding }) => $padding || "24px"};
  padding-bottom: ${({ $paddingBottom, $padding }) =>
    $paddingBottom || $padding || "24px"};
  -webkit-overflow-scrolling: touch;

  ${Devices.tabletS} {
    padding: ${({ $paddingTablet, $padding }) =>
      $paddingTablet || $padding || "24px"};
    padding-bottom: ${({
      $paddingBottomTablet,
      $paddingBottom,
      $paddingTablet,
      $padding,
    }) =>
      $paddingBottomTablet ||
      $paddingBottom ||
      $paddingTablet ||
      $padding ||
      "24px"};
  }
`;

const CloseButtonWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
  z-index: 2;
  margin-bottom: 16px;
`;

const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: none;
  background: #000000;
  color: #ffffff;
  cursor: pointer;
  display: grid;
  place-items: center;
  z-index: 2;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 0;
  pointer-events: auto;
  box-shadow: none;
  flex-shrink: 0;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const Lightbox = ({
  isOpen,
  onClose,
  children,
  ariaLabel,
  closeLabel = "Close dialog",
  maxWidth = "600px",
  maxHeight,
  align = "center",
  alignTablet,
  contentPadding = "24px",
  contentPaddingTablet,
  contentPaddingBottom,
  contentPaddingBottomTablet,
  className,
}) => {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleContainerClick = (event) => {
    event.stopPropagation();
  };

  return (
    <LightboxOverlay
      role="presentation"
      onClick={handleOverlayClick}
      $align={align}
      $alignTablet={alignTablet}
    >
      <LightboxContainer
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        onClick={handleContainerClick}
        $maxWidth={maxWidth}
        $maxHeight={maxHeight}
        className={className}
      >
        <ScrollArea
          $padding={contentPadding}
          $paddingTablet={contentPaddingTablet}
          $paddingBottom={contentPaddingBottom}
          $paddingBottomTablet={contentPaddingBottomTablet}
        >
          <CloseButtonWrapper>
            <CloseButton type="button" onClick={onClose} aria-label={closeLabel}>
              <X aria-hidden="true" strokeWidth={2.5} />
            </CloseButton>
          </CloseButtonWrapper>
          {children}
        </ScrollArea>
      </LightboxContainer>
    </LightboxOverlay>
  );
};

export default Lightbox;
