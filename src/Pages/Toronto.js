import React from "react";
import { Helmet } from "react-helmet"; // 👈 Add this
import BannerSection from "../Components/HeroSection";
import TorontoHeroSection from "../Components/TorontoHeroSection";
import TorontoOverview from "../Components/TorontoOverview";
import TorontoSection from "../Components/TorontoSection";
import TorontoProcess from "../Components/TorontoProcess";
import TorontoFAQ from "../Components/TorontoFAQ";
import TorontoContent from "../Components/TorontoContent";

const Toronto = () => {
  return (
    <>
      {/* SEO Meta Title + Description */}
      <Helmet>
  <title>Digital Marketing Services in Toronto | Digital Partner</title>

  <meta
    name="description"
    content="Digital Partner provides professional digital marketing services in Toronto including SEO, PPC, social media marketing & web marketing to help local businesses grow online."
  />
      </Helmet>

      <BannerSection
        title="Toronto"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Canada", link: "/canada" },
          { name: "Toronto" },
        ]}
      />

      <TorontoHeroSection />
      <TorontoContent />
      <TorontoOverview />
      <TorontoSection />
      <TorontoProcess />
      <TorontoFAQ />
    </>
  );
};

export default Toronto;