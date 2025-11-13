import React from "react";
import "../Assets/css/PricingPlans.css";

const PricingPlans = () => {
  const column1 = [
    {
      type: "Consultation",
      subtitle: "Let's Find the Right Strategy for You!",
      highlights: ["Book a Free Consultation"],
      isHighlightCard: true,
    },
    {
      type: "Starter",
      subtitle: "Perfect for startups & small businesses",
      price: "$99",
      period: "/Month",
      details: [
        { icon: "fa-circle-check", text: "Basic SEO & Marketing" },
        { icon: "fa-circle-check", text: "Social Media Management (1 Platform)" },
        { icon: "fa-circle-check", text: "Monthly Performance Report" },
      ],
    },
  ];

  const column2 = [
    {
      type: "Enterprise",
      subtitle: "Full scale marketing for maximum impact",
      price: "$399",
      period: "/Month",
      benefits: [
        { icon: "fa-brain", text: "Dedicated Account Manager" },
        { icon: "fa-headset", text: "Priority Support 24/7" },
        { icon: "fa-chart-line", text: "Customized Growth Strength" },
      ],
      details: [
        { icon: "fa-check-circle", text: "Complete Digital Marketing Suite" },
        { icon: "fa-bullhorn", text: "Paid Ads Management" },
        { icon: "fa-user-tie", text: "Dedicated Account Manager" },
        { icon: "fa-envelope-open-text", text: "Email Marketing & Automation" },
        { icon: "fa-user-shield", text: "Dedicated Account Manager" },
        { icon: "fa-chart-bar", text: "Weekly Performance Insights" },
      ],
    },
  ];

  const column3 = [
    {
      type: "Growth Highlights",
      highlights: [
        "Data-Driven Digital Marketing",
        "Proven Strategies for Higher",
        "Scalable Solution for Every Business",
      ],
      isHighlightCard: true,
    },
    {
      type: "Growth",
      subtitle: "Best for growing businesses ready",
      price: "$299",
      period: "/Month",
      details: [
        { icon: "fa-circle-check", text: "Basic SEO & Marketing" },
        { icon: "fa-circle-check", text: "Social Media Management (1 Platform)" },
        { icon: "fa-circle-check", text: "Monthly Performance Report" },
      ],
    },
  ];

  return (
    <div className="pricing-section">
      <div className="pricing-header text-center">
        <div className="sub-heading">
          <i className="fa-regular fa-circle-dot"></i>
          <span>Our Core Services</span>
        </div>
        <h2 className="title-heading">Flexible Pricing Plans for Every Business</h2>
      </div>

      <div className="pricing-columns">
        {/* Column 1 */}
        <div className="pricing-column">
          {column1.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} />
          ))}
        </div>

        {/* Column 2 */}
        <div className="pricing-column">
          {column2.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} />
          ))}
        </div>

        {/* Column 3 */}
        <div className="pricing-column">
          {column3.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PricingCard = ({ plan }) => {
  // Highlight card (like Consultation or Growth Highlights)
  if (plan.isHighlightCard) {
    return (
      <div className="pricing-card highlight-card">
        {plan.type === "Consultation" && <h2>{plan.subtitle}</h2>}
        {plan.type === "Growth Highlights" && <h5>Your Growth, Our Priority!</h5>}
        {plan.highlights &&
          plan.highlights.map((h, i) => (
            <div key={i} className="pricing-highlight">
              <a href="#">{h}</a>
              <i className="fa-solid fa-arrow-circle-right"></i>
            </div>
          ))}
      </div>
    );
  }

  return (
    <div className="pricing-card">
      <div className="pricing-main">
        <h4>{plan.type}</h4>
        <p>{plan.subtitle}</p>
        <div className="price">
          <h3>{plan.price}</h3>
          <p>{plan.period}</p>
        </div>
        <a href="#" className="btn-accent">
          <span>View Details</span>
          <i className="fa-solid fa-arrow-right"></i>
        </a>

        {plan.benefits && (
          <div className="core-benefits">
            {plan.benefits.map((b, i) => (
              <div key={i} className="benefit">
                <i className={`fa-solid ${b.icon}`}></i>
                <a href="#">{b.text}</a>
              </div>
            ))}
          </div>
        )}

        <ul className="check-list">
          {plan.details.map((d, i) => (
            <li key={i}>
              <i className={`fa-solid ${d.icon}`}></i>
              <a href="#">{d.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingPlans;
