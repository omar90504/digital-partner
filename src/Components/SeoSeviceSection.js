import about from '../Assets/images/SEOService9.webp';
import '../Assets/css/SeoServicesSection.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faArrowUp, faChartPie } from "@fortawesome/free-solid-svg-icons";

const seoPoints = [
  {
    title: "Increase Canadian Organic Traffic",
    description:
      "We optimize your website to attract more qualified visitors from Google Canada and improve local engagement.",
    icon: faChartLine,
  },
  {
    title: "Better Search Rankings in Canada",
    description:
      "Our team focuses on technical SEO, content optimization, and backlinks to help your business rank higher across Canadian search results.",
    icon: faArrowUp,
  },
  {
    title: "Monthly Reporting & Insights",
    description:
      "Track your progress with detailed monthly SEO reports showing growth, traffic, and opportunities specifically for the Canadian market.",
    icon: faChartPie,
  }
];

const SeoServiceSection = () => {
  return (
    <section className="custom-seo-section">
      <div className="custom-seo-container">
        
        {/* Left Image */}
        <div className="custom-seo-left">
          <img src={about} alt="SEO Services Canada" />
        </div>

        {/* Right Content */}
        <div className="custom-seo-right">
          <p className="custom-seo-subtitle">SEO Services Canada</p>
          <h2 className="custom-seo-title">Grow Your Canadian Business <br /> with SEO</h2>

          <p className="custom-seo-description">
            Our expert Canadian SEO team helps your business get found online. We focus on 
            driving traffic, improving rankings, and increasing conversions using proven strategies 
            tailored for the Canadian market and your industry.
          </p>

          {/* SEO Points */}
          <div className="custom-seo-points">
            {seoPoints.map((point, index) => (
              <div key={index} className="custom-seo-point">
                
                <div className="custom-seo-icon">
                  <FontAwesomeIcon icon={point.icon} />
                </div>

                <div className="custom-seo-info">
                  <h5>{point.title}</h5>
                  <p>{point.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SeoServiceSection;
