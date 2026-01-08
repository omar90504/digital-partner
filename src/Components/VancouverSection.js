import about from '../Assets/images/vencouver10.webp'; 
import '../Assets/css/SeoServicesSection.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faBullhorn, faUsers } from "@fortawesome/free-solid-svg-icons";

const marketingPoints = [
  {
    title: "Increase Traffic, Leads & Sales",
    description:
      "Our digital marketing strategies are designed to attract the right audience, increase website traffic, and convert visitors into real leads and paying customers in Vancouver.",
    icon: faChartLine,
  },
  {
    title: "Multi-Channel Digital Growth",
    description:
      "We help your business grow across SEO, Google Ads, social media, and content marketing to maximize visibility and results across Vancouver.",
    icon: faBullhorn,
  },
  {
    title: "Transparent Reporting & ROI Tracking",
    description:
      "Get clear monthly reports showing traffic growth, lead generation, conversions, and campaign performance for your Vancouver campaigns so you always know your ROI.",
    icon: faUsers,
  }
];

const VancouverSection = () => {
  return (
    <section className="custom-seo-section">
      <div className="custom-seo-container">
        
        {/* Left Image */}
        <div className="custom-seo-left">
          <img src={about} alt="Digital Marketing Services in Vancouver" />
        </div>

        {/* Right Content */}
        <div className="custom-seo-right">
          <p className="custom-seo-subtitle">Digital Marketing Services in Vancouver</p>
          <h2 className="custom-seo-title">
            Grow Your Business with <br /> Digital Marketing
          </h2>

          <p className="custom-seo-description">
            Digital Partner provides professional digital marketing services in Vancouver
            to help businesses increase online visibility, generate qualified leads,
            and grow revenue. We work with businesses across multiple industries and
            neighborhoods, delivering customized strategies that produce measurable results.
          </p>

          {/* Marketing Points */}
          <div className="custom-seo-points">
            {marketingPoints.map((point, index) => (
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

export default VancouverSection;
