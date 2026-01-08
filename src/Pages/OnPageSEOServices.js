import React from "react";
import { Helmet } from "react-helmet"; // 👈 Add this
import BannerSection from "../Components/HeroSection";
import OnPageHeroSection from "../Components/OnPageHeroSection";
import OnPageSeoContent from "../Components/OnPageSeoContent";
import OnPageSeoOverview from "../Components/OnPageSeoOverView";
import OnPageSeoSection from "../Components/OnPageSeoSection";
import OnPageSeoProcess from "../Components/OnPageSeoProcess";
import OnPageSeoFAQ from "../Components/OnPageSeoFAQ";

const OnPageSEOServices = () => {
  return (
    <>
      {/* SEO Meta Title + Description */}
      <Helmet>
     <title>On-Page SEO Services | Improve Rankings, Traffic & Website Quality</title>

<meta
  name="description"
  content="Boost your rankings with expert On-Page SEO. We optimize meta tags, headings, content, internal links, page structure, keywords, and user experience to increase visibility, traffic, and conversions."
/>

      </Helmet>

      <BannerSection
        title="On-Page SEO Services"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Services", link: "/our-services" },
          { name: "SEO", link: "/seo" },
          { name: "On-Page SEO Services" },
        ]}
      />

      <OnPageHeroSection />
      <OnPageSeoContent />
      <OnPageSeoOverview />
      <OnPageSeoSection />
      <OnPageSeoProcess />
      <OnPageSeoFAQ />
    </>
  );
};

export default OnPageSEOServices;