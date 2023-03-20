import React from "react";
import ReactPlayer from "react-player/lazy";
import styled from "@emotion/styled";
import { Devices } from "../../DesignSystem";

const CaseVideo = ({ mp4, ogg, img, alt, url, color1, color2 }) => {
  const CaseVideo = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;

    position: relative;

    width: 272px;
    height: 202px;

    direction: ltr;

    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;

    text-align: left;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;

    -webkit-box-direction: normal;
    -webkit-font-smoothing: antialiased;

    ${Devices.tabletS} {
      width: 564px;
      height: 419px;
    }
    ${Devices.tabletM} {
      width: 708px;
      height: 527px;
    }
    ${Devices.laptopS} {
      width: 740px;
      height: 551px;
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

  return (
    <CaseVideo>
      <ReactPlayer
        url={`${url}`}
        loop="true"
        controls="false"
        muted="true"
        playsInline="true"
        playing="true"
        width="100%"
        height="100%"
        style={ReactPlayerStyle}
      />
    </CaseVideo>

    /*<ReactPlayer
        url={`${mp4}`}
        
      />
      <Video
        src={`${mp4}`}
        preload="yes"
        autoPlay="autoplay"
        loop="true"
        muted="true"
        controls="true"
        playsInline="true"
      >
        <source src={`${mp4}`} type="video/mp4" />
        <source src={`${ogg}`} type="video/ogg" />
        <Picture src={`${img}`} alt={`${alt}`} />
      </Video>*/
  );
};

export default CaseVideo;
