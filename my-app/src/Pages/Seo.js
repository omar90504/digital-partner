import React from "react";
import BannerSection from "../Components/HeroSection";
import SingleService from "../Components/SingleServiceSection";


const SEO = () => {
  return (
    <>
      <BannerSection
        title="SEO"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Services", link: "/Services" },
          { name: "SEO" },
        ]}
      />
    <SingleService/>
    </>
  );
};

export default SEO;
