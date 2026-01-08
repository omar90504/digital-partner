import React from "react";
import { Helmet } from "react-helmet"; // 👈 Add this
import BannerSection from "../Components/HeroSection";
import LocalSeoHeroSection from "../Components/LocalSeoHeroSection";
import LocalSeoContent from "../Components/LocalSeoContent";
import LocalSeoOverview from "../Components/LocalSeoOverView";
import LocalSeoSection from "../Components/LocalSeoSection";
import LocalSeoProcess from "../Components/LocalSeoProcess";
import LocalSeoFAQ from "../Components/LocalSeoFAQ";

const LocalSeo = () => {
  return (
    <>
      {/* SEO Meta Title + Description */}
      <Helmet>
     <title>Local SEO Services | Rank in Google Maps & Get More Local Customers</title>

<meta
  name="description"
  content="Boost your local business with expert Local SEO. Rank higher in Google Maps, get more calls, and attract local customers. We optimize Google Business Profile, citations, location pages, and reviews to improve visibility and drive real results."
/>

      </Helmet>

      <BannerSection
        title="Local SEO"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Services", link: "/our-services" },
          { name: "SEO", link: "/seo" },
          { name: "Local SEO" },
        ]}
      />

      <LocalSeoHeroSection />
      <LocalSeoContent />
      <LocalSeoOverview />
      <LocalSeoSection />
      <LocalSeoProcess />
      <LocalSeoFAQ />
    </>
  );
};

export default LocalSeo;