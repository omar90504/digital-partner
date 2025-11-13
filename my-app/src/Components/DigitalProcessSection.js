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
      title: "Discovery & Consult",
      desc: "Lorem ipsum dol consectetur adipiscing elit ut elit tell luctus nec ullamcorper mattis",
      icon: icon13,
    },
    {
      number: "02",
      title: "Strategy & Planning",
      desc: "Lorem ipsum dol consectetur adipiscing elit ut elit tell luctus nec ullamcorper mattis",
      icon: icon11,
    },
    {
      number: "03",
      title: "Execution & Optimize",
      desc: "Lorem ipsum dol consectetur adipiscing elit ut elit tell luctus nec ullamcorper mattis",
      icon: icon10,
    },
    {
      number: "04",
      title: "Result & Growth",
      desc: "Lorem ipsum dol consectetur adipiscing elit ut elit tell luctus nec ullamcorper mattis",
      icon: icon12,
    },
  ];

  return (
    <div className="digital-process">
      <div className="digital-process-banner">
        <div className="digital-process-content">
          <div className="digital-process-row">
            <div className="digital-process-col">
              <div className="digital-process-header">
                <div className="top-heading">
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>How it Work</span>
                </div>
                <h2 className="title-heading">Simple Steps to Digital Success</h2>
              </div>
            </div>
            <div className="digital-process-col">
              <div className="digital-process-text">
                <p>
                  Our streamlined process ensures your digital growth is seamless
                  and effective. ipsum dolor sit amet, consectetur adipiscing
                  elit. In ex ligula, varius at rutrum et, finibus sed felis.
                </p>
                <div className="digital-process-link">
                  <a href="./contact.html">Get Started Now <i className="fa-solid fa-arrow-circle-right"></i></a>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="digital-process-steps">
            {steps.map((step) => (
              <div key={step.number} className="digital-process-step">
                <div className="step-header">
                  <img src={step.icon} alt="Digital Process Icon" className="process-icon" />
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
