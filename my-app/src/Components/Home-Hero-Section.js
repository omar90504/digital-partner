import React from "react";
import "../Assets/css/Home-Hero-Section.css"; // Custom CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // FontAwesome icons
import Person1 from "../Assets/images/Photo-1.jpg";
import Person2 from "../Assets/images/Photo-2.jpg";
import Person3 from "../Assets/images/Photo-3.jpg";
import Bannervideo from "../Assets/Videos/dp-video.mp4";
import BackgroundVideo from "./BackgroundVideo";

export default function Banner() {
  return (
    <BackgroundVideo src={Bannervideo}>
      {/* ===== Hero Section Content ===== */}
      <section className="hero-container position-relative">
        <div className="banner-content-wrapper">
          {/* Main Heading */}
          <h1
            className="title-heading-banner animate-box animate__animated animate__fadeInLeft"
          >
            Amplify Your Brand with Cutting-Edge Digital Marketing
          </h1>

          {/* Banner Row */}
          <div className="banner-heading">
            {/* ===== Video Section ===== */}
            <div
              className="banner-video-content animate-box animate__animated animate__fadeInUp"
            >
              <div className="video-flex-box">
                <button className="request-loader" data-video={Bannervideo}>
                  <i className="fa-solid fa-play"></i>
                </button>
                <p>
                  Watch our video reviews and see how businesses achieve success
                  with Marko&apos;s digital marketing solutions.
                </p>
              </div>
            </div>

            {/* ===== Text Section ===== */}
            <div
              className="banner-content animate-box animate__animated animate__fadeInRight"
            >
              <p>
                Marko empowers businesses to grow online with data-driven digital
                marketing, innovative branding, and performance-focused
                strategies trusted by top brands. Lorem ipsum dolor sit amet
                consectetur.
              </p>

              {/* CTA + Reviewer Section */}
              <div className="cta-reviewer-box">
                <a href="/about" className="btn btn-accent">
                  <div className="btn-title">
                    <span>Get Started</span>
                  </div>
                  <div className="icon-circle">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </a>

                <div className="banner-reviewer">
                  <div className="reviewer-avatars">
                    <img src={Person1} alt="Reviewer 1" className="avatar" />
                    <img src={Person2} alt="Reviewer 2" className="avatar" />
                    <img src={Person3} alt="Reviewer 3" className="avatar" />
                  </div>
                  <div className="detail">
                    <span>2.7k Positive</span>
                    <span>Reviews</span>
                  </div>
                </div>
              </div>
            </div>
            {/* ===== End Text Section ===== */}
          </div>
        </div>
      </section>
    </BackgroundVideo>
  );
}
