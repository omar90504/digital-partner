import about from '../Assets/images/home-2/marketing-banner.png';
import '../Assets/css/SeoServicesSection.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faArrowUp, faChartPie } from "@fortawesome/free-solid-svg-icons";

const seoPoints = [
  {
    title: "Increase Organic Traffic",
    description:
      "We optimize your website with proven SEO strategies to drive more qualified visitors from Google.",
    icon: faChartLine,
  },
  {
    title: "Better Search Rankings",
    description:
      "Our team focuses on technical SEO, content, and backlinks to improve your rankings and visibility.",
    icon: faArrowUp,
  },
  {
    title: "Monthly Reporting",
    description:
      "Track progress with detailed monthly SEO reports showing growth, traffic, and opportunities for improvement.",
    icon: faChartPie,
  }
];

const SeoCustomSection = () => {
  return (
    <section className="custom-seo-section">
      <div className="custom-seo-container">
        
        {/* Left Image */}
        <div className="custom-seo-left">
          <img src={about} alt="SEO Services" />
        </div>

        {/* Right Content */}
        <div className="custom-seo-right">
          <p className="custom-seo-subtitle">SEO Services</p>
          <h2 className="custom-seo-title">Grow Your Business <br /> with SEO</h2>

          <p className="custom-seo-description">
            Our expert SEO team helps your business get found online. We focus on traffic, rankings, 
            and conversions using proven strategies tailored to your niche and competition.
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

export default SeoCustomSection;
