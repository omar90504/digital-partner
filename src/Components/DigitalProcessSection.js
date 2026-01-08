import React from "react";
import "../Assets/css/DigitalProcessSection.css";
import icon13 from "../Assets/images/digital-marketing-icons-N952ZWA.png";
import icon11 from "../Assets/images/Icon-11.png";
import icon10 from "../Assets/images/Icon-10.png";
import icon12 from "../Assets/images/Icon-12.png";

const DigitalProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      desc: "We begin by understanding your business, goals, and audience. This helps us identify opportunities and define the right digital direction.",
      icon: icon13,
    },
    {
      number: "02",
      title: "Strategy & Planning",
      desc: "We craft a data-driven marketing plan tailored specifically to your business needs, ensuring every step supports your growth.",
      icon: icon11,
    },
    {
      number: "03",
      title: "Execution & Optimization",
      desc: "Our team implements the strategy using proven methods, then continuously monitors and optimizes for the best performance.",
      icon: icon10,
    },
    {
      number: "04",
      title: "Results & Growth",
      desc: "You receive clear reports and measurable improvements. As your digital partner, we help you scale and grow consistently.",
      icon: icon12,
    },
  ];

  return (
    <div className="digital-process">
      <div className="digital-process-banner">
        <div className="digital-process-content">
          <div className="digital-process-row">

            {/* Left Side Heading */}
            <div className="digital-process-col">
              <div className="digital-process-header">
                <div className="top-heading">
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>How It Works</span>
                </div>
                <h2 className="title-heading">
                  Simple Steps to Digital Success
                </h2>
              </div>
            </div>

            {/* Right Side Paragraph */}
            <div className="digital-process-col">
              <div className="digital-process-text">
                <p>
                  Our streamlined process ensures smooth execution and measurable
                  growth for your business.
                </p>
                <div className="digital-process-link">
                  <a href="./contact">
                    Get Started Now <i className="fa-solid fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Steps Section */}
          <div className="digital-process-steps">
            {steps.map((step) => (
              <div key={step.number} className="digital-process-step">
                <div className="step-header">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="process-icon"
                  />
                  <span>{step.number}</span>
                </div>
                <div className="step-body">
                  <h5>{step.title}</h5>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default DigitalProcess;
