import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const scroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

const Outer = styled.div`
  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
`;

const Track = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: max-content;
  animation: ${scroll} 120s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const LogoSet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 160px;
  padding: 16px 80px;
`;

const LogoImg = styled.img`
  height: 24px;
  width: auto;
  opacity: 0.5;
  filter: grayscale(1);
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

const logos = [
  { src: "/img/Logos/knauf.svg", alt: "Knauf" },
  { src: "/img/Logos/linxfour.svg", alt: "Linxfour" },
  { src: "/img/Logos/muvn.svg", alt: "MUVN" },
  { src: "/img/Logos/thryve.svg", alt: "Thryve" },
  { src: "/img/Logos/occhio.svg", alt: "Occhio" },
  { src: "/img/Logos/magirus.svg", alt: "Magirus" },
  { src: "/img/Logos/stabilo.svg", alt: "Stabilo" },
];

// Tile logos enough times so one half of the track always exceeds the widest screen.
// 7 logos × ~150px avg ≈ 1060px per pass; 4 passes = ~4240px — covers any viewport.
const tiledLogos = Array.from({ length: 4 }, (_, i) =>
  logos.map((logo) => ({ ...logo, key: `${logo.alt}-${i}` }))
).flat();

const LogoWall = () => (
  <Outer>
    <Track>
      {/* First half */}
      <LogoSet>
        {tiledLogos.map((logo) => (
          <LogoImg key={logo.key} src={logo.src} alt={logo.alt} />
        ))}
      </LogoSet>
      {/* Identical second half — seamless when first half scrolls out */}
      <LogoSet aria-hidden="true">
        {tiledLogos.map((logo) => (
          <LogoImg key={logo.key + "-b"} src={logo.src} alt="" />
        ))}
      </LogoSet>
    </Track>
  </Outer>
);

export default LogoWall;
