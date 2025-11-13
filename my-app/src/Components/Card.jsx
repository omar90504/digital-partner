import React from "react";

export default function YouTubeBackground() {
  return (
    <div className="yt-bg-wrapper">
      {/* Background Video */}
      <iframe
        title="youtube-background"
        src="https://www.youtube.com/embed/xJ_fFLgGHiU?autoplay=1&mute=1&loop=1&playlist=xJ_fFLgGHiU&controls=0&modestbranding=1&rel=0&showinfo=0"
        allow="autoplay; encrypted-media; picture-in-picture"
        frameBorder="0"
        className="yt-bg-iframe"
      />

      {/* Dark overlay */}
      <div className="yt-bg-overlay"></div>

      {/* Overlay Content */}
      <div className="yt-bg-content">
        <h1>Welcome to Our Site</h1>
        <p>We fix appliances fast — call us today.</p>
        <button>Book Now</button>
      </div>

      {/* Inline CSS inside component */}
      <style>{`
        .yt-bg-wrapper {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .yt-bg-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
          z-index: 0;
        }

        .yt-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
          z-index: 1;
        }

        .yt-bg-content {
          position: relative;
          z-index: 2;
          color: #fff;
          text-align: center;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .yt-bg-content h1 {
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .yt-bg-content p {
          font-size: 18px;
          margin-bottom: 20px;
        }

        .yt-bg-content button {
          padding: 12px 24px;
          border: none;
          background: #fff;
          color: #000;
          font-size: 16px;
          font-weight: bold;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
