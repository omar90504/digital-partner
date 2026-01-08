import about from '../Assets/images/Professional9.webp';
import '../Assets/css/SeoServicesSection.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faArrowUp, faChartPie } from "@fortawesome/free-solid-svg-icons";

const seoPoints = [
  {
    title: "Drive Targeted Organic Traffic",
    description:
      "We implement professional SEO strategies to attract high-quality visitors actively searching for your services, improving leads and conversions.",
    icon: faChartLine,
  },
  {
    title: "Achieve Higher Search Rankings",
    description:
      "Our experts optimize your website technically and contextually, build authoritative backlinks, and ensure your pages rank for high-value keywords.",
    icon: faArrowUp,
  },
  {
    title: "Transparent Reporting & Insights",
    description:
      "Receive detailed monthly reports showing growth, traffic sources, keyword performance, and actionable recommendations for continuous improvement.",
    icon: faChartPie,
  }
];

const ProfessionalServicesSection = () => {
  return (
    <section className="custom-seo-section">
      <div className="custom-seo-container">
        
        {/* Left Image */}
        <div className="custom-seo-left">
          <img src={about} alt="Professional SEO Services" />
        </div>

        {/* Right Content */}
        <div className="custom-seo-right">
          <p className="custom-seo-subtitle">Professional SEO Services</p>
          <h2 className="custom-seo-title">Maximize Your Online Growth <br /> with Expert SEO</h2>

          <p className="custom-seo-description">
            Our professional SEO team helps Canadian businesses dominate search results, attract qualified traffic, 
            and convert visitors into loyal customers. Strategies are customized for your industry and market.
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

export default ProfessionalServicesSection;
