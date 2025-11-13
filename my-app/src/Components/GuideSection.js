import React, { useState } from "react";
import "animate.css";
import "../Assets/css/GuideSection.css";

const GuideSection = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  const openVideo = (url) => {
    setVideoUrl(url);
  };

  const closeVideo = () => {
    setVideoUrl(null);
  };

  return (
    <section className="section-guide">
      <div className="guide-banner">
        <div className="hero-container">
          <div
            className="guide-content animate__animated animate__fadeInUp"
            data-animate="animate__fadeInUp"
          >
            {/* Video Play Section */}
            <div className="guide-video-container">
              <button
                className="request-loader"
                onClick={() =>
                  openVideo("https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1")
                }
              >
                <i className="fa-solid fa-play"></i>
              </button>
              <p>See How We Help Brands Grow</p>
            </div>

            {/* Text Content */}
            <div className="guide-text">
              <h3 className="title-heading">Transform Your Business with Marko!</h3>
              <p>
                Take your digital marketing to the next level with data-driven
                strategies and innovative solutions. Let's create something amazing
                together!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoUrl && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={videoUrl}
              title="Guide Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button className="close-btn" onClick={closeVideo}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GuideSection;
