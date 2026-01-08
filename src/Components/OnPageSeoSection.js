import about from '../Assets/images/onpage seo10.webp';
import '../Assets/css/SeoServicesSection.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation, faLocationArrow, faChartLine } from "@fortawesome/free-solid-svg-icons";

const seoPoints = [
  {
    title: "Improve Website Rankings",
    description:
      "We optimize your website content, meta tags, headings, and structure to improve keyword rankings and organic visibility on Google.",
    icon: faMapLocation,
  },
  {
    title: "Fix Technical SEO & Structure",
    description:
      "Our on-page SEO process includes fixing broken links, optimizing internal linking, improving site speed, schema, and mobile usability.",
    icon: faLocationArrow,
  },
  {
    title: "Track & Report Performance",
    description:
      "You receive SEO reports showing keyword ranking changes, traffic growth, page improvements, and content performance every month.",
    icon: faChartLine,
  }
];

const OnPageSEOServices = () => {
  return (
    <section className="custom-seo-section">

      <div className="custom-seo-container">

        {/* Left Image */}
        <div className="custom-seo-left">
          <img 
            src={about} 
            alt="On-Page SEO Services and Website Optimization in Canada" 
          />
        </div>

        {/* Right Content */}
        <div className="custom-seo-right">

          <p className="custom-seo-subtitle">On-Page SEO Services</p>

          <h2 className="custom-seo-title">
            Improve Rankings with On-Page SEO & Website Optimization
          </h2>

          <p className="custom-seo-description">
            On-page SEO is the foundation of successful search visibility. 
            We optimize your website content, structure, meta tags, internal links, 
            speed, UX, and technical elements to boost search engine rankings. 
            Whether you are a local business or a growing brand, our strategies 
            help your pages rank higher and convert more visitors into customers.
          </p>

          {/* SEO Points */}
          <div className="custom-seo-points">
            {seoPoints.map((point, index) => (
              <div key={index} className="custom-seo-point">

                <div className="custom-seo-icon">
                  <FontAwesomeIcon icon={point.icon} />
                </div>

                <div className="custom-seo-info">
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>

              </div>
            ))}
          </div>

          {/* Internal Link CTA */}
          <p className="custom-seo-cta">
            Explore our On-Page SEO services to improve your rankings and website performance.
          </p>

        </div>

      </div>
    </section>
  );
};

export default OnPageSEOServices;
