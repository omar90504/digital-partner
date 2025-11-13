import React from "react";
import Bannervideo from "../Assets/Videos/dp-video.mp4";


const BackgroundVideo = ({ src, children }) => {
  return (
    <div className="video-wrapper">
      <video className="video-bg" src={Bannervideo} autoPlay loop muted playsInline />
      <div className="video-overlay">{children}</div>

      <style>{`
        .video-wrapper {
        margin:20px;
        border-radius:25px;
          position: relative;
  
          height: 100vh;
          overflow: hidden;
        }

        .video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }

        .video-overlay {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          color: white;
          text-align: center;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default BackgroundVideo;
