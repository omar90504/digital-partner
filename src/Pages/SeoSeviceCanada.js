import React from "react";
import { Helmet } from "react-helmet"; // 👈 Add this
import BannerSection from "../Components/HeroSection";
import SEOServiceHeroSection from "../Components/SeoServiceHeroSection";
import SeoServiceContent from "../Components/SeoServiceContent";
import SeoServiceOverView from "../Components/SeoServiceOverview";
import SeoServiceSection from "../Components/SeoSeviceSection";
import SeoServiceProcess from "../Components/SeoServiceProcess";
import SeoServiceFAQ from "../Components/SeoServiceFAQ";

const SEOServiceCanada = () => {
  return (
    <>
      {/* SEO Meta Title + Description */}
      <Helmet>
        <title>SEO Services Canada | Improve Rankings & Local Visibility</title>
        <meta
          name="description"
          content="Professional SEO services in Canada to improve Google rankings, traffic and leads. We offer local SEO, On-page SEO, Technical SEO, content creation, backlinks and monthly reporting."
        />
      </Helmet>

      <BannerSection
        title="SEO Sevice Canada"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Services", link: "/our-services" },
          { name: "SEO", link: "/seo" },
          { name: "SEO Service Canada" },
        ]}
      />

      <SEOServiceHeroSection />
      <SeoServiceContent />
      <SeoServiceOverView />
      <SeoServiceSection />
      <SeoServiceProcess />
      <SeoServiceFAQ />
    </>
  );
};

export default SEOServiceCanada;
