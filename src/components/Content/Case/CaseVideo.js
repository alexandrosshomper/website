import React from "react";
import ReactPlayer from "react-player/lazy";
import styled from "@emotion/styled";
import { Play, Pause } from "lucide-react";
import { Devices, Colors } from "../../DesignSystem";

const VideoWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  max-width: 100%;
  aspect-ratio: ${(props) => props.$aspectRatio};
  direction: ltr;
  text-align: left;
  text-size-adjust: 100%;
  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;

  ${Devices.tabletS} {
    max-width: 100%;
  }
  ${Devices.tabletM} {
    max-width: 708px;
  }
  ${Devices.laptopS} {
    max-width: 740px;
  }

  ${(props) =>
    props.$size === "L" &&
    `
      ${Devices.tabletM} {
        max-width: 70vw;
        width: 70vw;
        left: 50%;
        transform: translateX(-50%);
        margin-left: 0;
        margin-right: 0;
      }
    `}
`;

const PlayPauseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.primaryText.highEmphasis};
  border: none;
  padding: 0;
  cursor: pointer;
  will-change: backdrop-filter;
  transition: opacity 120ms ease, background-color 120ms ease,
    box-shadow 120ms ease;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  pointer-events: ${(props) => (props.$visible ? "auto" : "none")};
  z-index: 2;
  animation: blurPulse 2.4s ease-in-out infinite;

  &:hover {
    background: rgba(255, 255, 255, 0.95);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.9);
    outline-offset: 2px;
  }

  & svg {
    width: 14px;
    height: 14px;
  }

  @keyframes blurPulse {
    0% {
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
      background: rgba(255, 255, 255, 0.8);
    }
    50% {
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(4px);
      background: rgba(255, 255, 255, 0.6);
    }
    100% {
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
      background: rgba(255, 255, 255, 0.8);
    }
  }
`;

const ReactPlayerStyle = {
  overflowX: "hidden",
  overflowY: "hidden",
  margin: "0 auto",
  borderRadius: "10px",
  boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.1)",
  position: "static",
};

const DEFAULT_ASPECT_RATIO = 16 / 9;

const CaseVideo = ({ url, img, size = "M" }) => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isHovered, setIsHovered] = React.useState(false);
  const [videoAspectRatio, setVideoAspectRatio] =
    React.useState(DEFAULT_ASPECT_RATIO);
  const [isInViewport, setIsInViewport] = React.useState(false);
  const playerRef = React.useRef(null);
  const containerRef = React.useRef(null);

  const applyAspectRatio = React.useCallback((width, height) => {
    if (!width || !height) {
      return;
    }
    const ratio = width / height;
    if (Number.isFinite(ratio) && ratio > 0) {
      setVideoAspectRatio(ratio);
    }
  }, []);

  const updateAspectRatio = React.useCallback(
    async (playerInstance) => {
      const player = playerInstance ?? playerRef.current;
      const internalPlayer = player?.getInternalPlayer
        ? player.getInternalPlayer()
        : null;

      if (!internalPlayer) {
        return;
      }

      try {
        if (
          typeof internalPlayer.getVideoWidth === "function" &&
          typeof internalPlayer.getVideoHeight === "function"
        ) {
          const [width, height] = await Promise.all([
            internalPlayer.getVideoWidth(),
            internalPlayer.getVideoHeight(),
          ]);
          applyAspectRatio(width, height);
          return;
        }

        const { videoWidth, videoHeight } = internalPlayer;
        applyAspectRatio(videoWidth, videoHeight);
      } catch (error) {
        // Ignore errors retrieving metadata; fallback ratio remains in place.
      }
    },
    [applyAspectRatio]
  );

  React.useEffect(() => {
    setVideoAspectRatio(DEFAULT_ASPECT_RATIO);
  }, [url]);

  React.useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsInViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === containerRef.current) {
            setIsInViewport(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    const current = containerRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
      observer.disconnect();
    };
  }, []);

  const showButton = !isPlaying || isHovered;

  const handleTogglePlayback = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleReady = (player) => {
    updateAspectRatio(player);
  };

  return (
    <VideoWrapper
      ref={containerRef}
      $aspectRatio={videoAspectRatio}
      $size={size}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ReactPlayer
        ref={playerRef}
        url={url}
        loop
        controls={false}
        muted
        playsinline
        playing={isPlaying && isInViewport}
        width="100%"
        height="100%"
        style={ReactPlayerStyle}
        onReady={handleReady}
        borderRadius="8px"
      />
      <PlayPauseButton
        type="button"
        onClick={handleTogglePlayback}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        tabIndex={showButton ? 0 : -1}
        $visible={showButton}
      >
        {isPlaying ? (
          <Pause fill="#000" strokeWidth={2.5} />
        ) : (
          <Play fill="#000" strokeWidth={2.5} />
        )}
      </PlayPauseButton>
    </VideoWrapper>
  );
};

export default CaseVideo;
