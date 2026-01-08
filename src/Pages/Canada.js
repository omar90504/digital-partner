import React from "react";
import { Helmet } from "react-helmet"; // 👈 Add this
import BannerSection from "../Components/HeroSection";
import CanadaHeroSection from "../Components/CanadaHeroSection";
import CanadaContent from "../Components/CanadaContent";
import CanadaOverview from "../Components/CanadaOverview";
import CanadaSection from "../Components/CanadaSection";
import CanadaProcess from "../Components/CanadaProcess";
import CanadaFAQ from "../Components/CanadaFAQ";

const Canada = () => {
  return (
    <>
      {/* SEO Meta Title + Description */}
      <Helmet>
     <title>Digital Marketing Services in Canada | Digital Partner</title>

<meta
  name="description"
  content="Digital Partner offers professional digital marketing services in Canada including SEO, PPC, social media & web marketing to grow your business."
/>

      </Helmet>

      <BannerSection
        title="Canada"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Canada" },
        ]}
      />

      <CanadaHeroSection />
      <CanadaContent />
      <CanadaOverview />
      <CanadaSection />
      <CanadaProcess />
      <CanadaFAQ />
    </>
  );
};

export default Canada;