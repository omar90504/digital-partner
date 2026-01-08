import about from '../Assets/images/localseo10.webp';
import '../Assets/css/SeoServicesSection.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation, faLocationArrow, faChartLine } from "@fortawesome/free-solid-svg-icons";

const seoPoints = [
  {
    title: "Increase Local Traffic & Calls",
    description:
      "We optimize your business for 'near me' searches, driving more phone calls, website visits, and walk-in customers from your local area.",
    icon: faMapLocation,
  },
  {
    title: "Rank Higher on Google Maps",
    description:
      "Our Local SEO strategy improves your Google Business Profile, citations, and reviews to get your business into the local 3-pack.",
    icon: faLocationArrow,
  },
  {
    title: "Monthly Local SEO Reporting",
    description:
      "Get detailed reports showing ranking improvements, local visibility, call tracking, and search performance for your service areas.",
    icon: faChartLine,
  }
];

const LocalSeoSection = () => {
  return (
    <section className="custom-seo-section">
      <div className="custom-seo-container">
        
        {/* Left Image */}
        <div className="custom-seo-left">
          <img src={about} alt="Local SEO Services" />
        </div>

        {/* Right Content */}
        <div className="custom-seo-right">
          <p className="custom-seo-subtitle">Local SEO Services</p>
          <h2 className="custom-seo-title">Grow Your Business with <br /> Local SEO</h2>

          <p className="custom-seo-description">
            Local customers are searching for services near them every day. We help your business
            show up at the top of Google Maps and local search results. Whether you serve one city or multiple
            service areas, we make sure you get more local visibility, calls, bookings, and foot traffic.
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

export default LocalSeoSection;
