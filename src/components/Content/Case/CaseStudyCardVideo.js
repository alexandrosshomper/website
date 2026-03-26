import React from "react";
import ReactPlayer from "react-player/lazy";
import styled from "@emotion/styled";

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
`;

const DEFAULT_ASPECT_RATIO = 4 / 3;

const CaseVideo = ({ url, size = "M" }) => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isHovered, setIsHovered] = React.useState(false);
  const [videoAspectRatio, setVideoAspectRatio] =
    React.useState(DEFAULT_ASPECT_RATIO);
  const [isInViewport, setIsInViewport] = React.useState(false);
  const [containerDims, setContainerDims] = React.useState({
    width: 0,
    height: 0,
  });
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
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setContainerDims({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

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

  const { width: cW, height: cH } = containerDims;
  const containerAR = cH > 0 ? cW / cH : 0;
  let playerWidth = "100%";
  let playerHeight = "100%";
  let playerStyle = {
    position: "absolute",
    borderRadius: "0px",
  };

  if (containerAR > 0 && videoAspectRatio > 0) {
    if (containerAR > videoAspectRatio) {
      const h = cW / videoAspectRatio;
      const top = (cH - h) / 2;
      playerHeight = `${h}px`;
      playerStyle = { ...playerStyle, top, left: 0 };
    } else {
      const w = cH * videoAspectRatio;
      const left = (cW - w) / 2;
      playerWidth = `${w}px`;
      playerStyle = { ...playerStyle, top: 0, left };
    }
  }

  return (
    <VideoWrapper
      ref={containerRef}
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
        width={playerWidth}
        height={playerHeight}
        style={playerStyle}
        onReady={handleReady}
      />
    </VideoWrapper>
  );
};

export default CaseVideo;
