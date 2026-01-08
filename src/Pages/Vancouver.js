import React from "react";
import { Helmet } from "react-helmet"; // 👈 Add this
import BannerSection from "../Components/HeroSection";
import VancouverHeroSection from "../Components/VancouverHeroSection";
import VancouverOverview from "../Components/VancouverOverview";
import VancouverSection from "../Components/VancouverSection";
import VancouverProcess from "../Components/VancouverProcess";
import VancouverFAQ from "../Components/VancouverFAQ";
import VancouverContent from "../Components/VancouverContent";

const Vancouver = () => {
  return (
    <>
      {/* SEO Meta Title + Description */}
      <Helmet>
     <title>Digital Marketing Services in Vancouver | Digital Partner</title>

<meta
  name="description"
  content="Digital Partner provides professional digital marketing services in Vancouver including SEO, PPC, social media marketing & web marketing to help local businesses grow online."
/>


      </Helmet>

      <BannerSection
        title="Vancouver"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Canada", link: "/canada" },
          { name: "Vancouver" },
        ]}
      />

      <VancouverHeroSection />
      <VancouverContent />
      <VancouverOverview />
      <VancouverSection />
      <VancouverProcess />
      <VancouverFAQ />
    </>
  );
};

export default Vancouver;