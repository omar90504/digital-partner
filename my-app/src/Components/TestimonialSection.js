import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Assets/css/TestimonialSection.css";

// ✅ Import images
import reviewer1 from "../Assets/images/Photo-1.jpg";
import reviewer2 from "../Assets/images/Photo-2.jpg";
import reviewer3 from "../Assets/images/Photo-3.jpg";
import reviewer4 from "../Assets/images/Photo-4.jpg";

/* ===========================
   Counter Component
=========================== */
const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const value = Math.floor(eased * end);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{count}</span>;
};

/* ===========================
   Main Component
=========================== */
const TestimonialSection = () => {
  // ✅ Testimonials data
  const testimonials = [
    {
      name: "Emma Richard",
      role: "CEO, Nexatech",
      text: "Marko completely transformed our online presence! Their digital marketing strategies helped us double our revenue in just six months.",
      img: reviewer1,
    },
    {
      name: "David Mont",
      role: "Marketing Director",
      text: "We've worked with many agencies before, but Marko stands out. Their data-driven approach and creative solutions gave us an edge over competitors.",
      img: reviewer2,
    },
    {
      name: "Sophia Lewis",
      role: "Founder",
      text: "From SEO to paid ads, Marko nailed every aspect of our campaign. Our website traffic skyrocketed, and lead generation has never been better!",
      img: reviewer3,
    },
    {
      name: "James Peterson",
      role: "COO, BrightWave",
      text: "Highly professional and results-oriented. Marko's expertise in branding and content marketing helped us build a strong online identity.",
      img: reviewer4,
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="hero-container">
        {/* === Top Stats + Title Row === */}
        <div className="testimonial-top">
          {/* === Left Reviewer Stats === */}
          <div className="testimonial-reviewer">
            <div className="card-reviewer">
              <div className="reviewer-info">
                <div className="avatars">
                  {[reviewer1, reviewer2, reviewer3, reviewer4].map(
                    (image, i) => (
                      <img key={i} src={image} alt="Reviewer" className="avatar" />
                    )
                  )}
                </div>
                <div className="review-detail">
                  <h6>2.7k Positive</h6>
                  <h6>Reviews</h6>
                </div>
              </div>

              <div className="reviewer-stats">
                {/* ✅ Counter 1 */}
                <div className="stat">
                  <div className="counter">
                    <Counter target={90} duration={1500} />
                    <span className="percent">+</span>
                  </div>
                  <p>Improved Project</p>
                </div>

                <div className="divider-vertical"></div>

                {/* ✅ Counter 2 */}
                <div className="stat">
                  <div className="counter">
                    <Counter target={49} duration={2500} />
                    <span className="percent">%</span>
                  </div>
                  <p>New Project</p>
                </div>
              </div>

              <div className="review-links">
                <a href="#" className="link-item">
                  <i className="fa-regular fa-circle-check accent-color"></i>
                  Social Media Growth
                </a>
                <a href="#" className="link-item">
                  <i className="fa-regular fa-circle-check accent-color"></i>
                  Performance Marketing
                </a>
              </div>
            </div>
          </div>

          {/* === Right Title Section === */}
          <div className="testimonial-title">
            <div className="card-title">
              <div className="sub-heading">
                <i
                  className="fa-regular fa-circle-dot"
                  style={{ color: "#058bd4" }}
                ></i>
                <span>What Our Clients Say</span>
              </div>
              <h2>Hear from Our Satisfied Clients — Real Success Stories</h2>
              <p>
                Discover how businesses like yours achieved outstanding growth
                with Marko's expert digital marketing solutions.
              </p>
            </div>
          </div>
        </div>

        {/* === Swiper Slider === */}
        <div className="swiper-wrapper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={`slide-${i}`}>
                <div className="card-testimonial">
                  <div className="stars">
                    {[...Array(5)].map((_, idx) => (
                      <i key={idx} className="fa-solid fa-star"></i>
                    ))}
                  </div>

                  <div className="testimonial-profile">
                    <div className="profile-left">
                      <div className="testimonial-image">
                        <img src={item.img} alt={item.name} className="img-fluid" />
                      </div>
                      <div className="profile-text">
                        <span className="profile-name">{item.name}</span>
                        <p className="profile-info">{item.role}</p>
                      </div>
                    </div>
                    <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                  </div>

                  <p className="testimonial-description">{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
