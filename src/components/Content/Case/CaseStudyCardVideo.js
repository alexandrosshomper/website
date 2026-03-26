import React from "react";
import ReactPlayer from "react-player/lazy";
import styled from "@emotion/styled";

const VideoWrapper = styled.div`
  display: block;

  position: relative;
  width: 100%;
  max-width: 100%;
  aspect-ratio: ${(props) => props.$aspectRatio};

  object-fit: cover;
  flex: 1;
`;

const ReactPlayerStyle = {
  overflowX: "hidden",
  overflowY: "hidden",
  margin: "0 auto",
  borderRadius: "10px",
  boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.1)",
  position: "static",
};

const DEFAULT_ASPECT_RATIO = 4 / 3;

const CaseVideo = ({ url, size = "M" }) => {
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
    [applyAspectRatio],
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
        threshold: 0.75,
      },
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

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleReady = (player) => {
    updateAspectRatio(player);
  };

  return (
    <VideoWrapper
      ref={containerRef}
      $aspectRatio={videoAspectRatio}
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
    </VideoWrapper>
  );
};

export default CaseVideo;
