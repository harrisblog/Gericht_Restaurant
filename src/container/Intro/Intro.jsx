import React, { useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    playVideo ? vidRef.current.pause() : vidRef.current.play();
  };
  const [playAndPause, setPlayAndPause] = useState(false);
  const handleMouseEnter = () => {
    setPlayAndPause(true);
  };
  const handleMouseLeave = () => {
    setPlayAndPause(false)
  }

  return (
    <div
      className="app__video"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        src={meal}
        type="video/mp4"
        ref={vidRef}
        loop
        controls={false}
        muted
      />
      {playAndPause &&
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
      }
    </div>
  );
};

export default Intro;
