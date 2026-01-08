import React from "react";
import { Helmet } from "react-helmet"; // 👈 For SEO Meta
import BannerSection from "../Components/HeroSection";
import SEOHeroSection from "../Components/SEOHeroSection";
import SeoOverview from "../Components/SeoOverview";
import SeoContent from "../Components/SeoContent";
import SeoProcess from "../Components/SeoProcess";
import FAQSection from "../Components/SeoFaqs";
import SeoServicesSection from "../Components/SeoServicesSection";

const SEO = () => {
  return (
    <>
      {/* SEO TITLE + META DESCRIPTION */}
      <Helmet>
        <title>SEO Services | Improve Rankings, Traffic & Leads</title>
        <meta
          name="description"
          content="Professional SEO services that improve Google rankings, traffic and local visibility. We provide on-page SEO, technical SEO, content, backlinks and monthly reporting."
        />
      </Helmet>

      <BannerSection
        title="SEO"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Services", link: "/our-services" },
          { name: "SEO" },
        ]}
      />

      <SEOHeroSection />
      <SeoContent />
      <SeoOverview />
      <SeoServicesSection />
      <SeoProcess />
      <FAQSection />
    </>
  );
};

export default SEO;
