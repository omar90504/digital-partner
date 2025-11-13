import React from "react";
import BannerSection from "../Components/HeroSection";
import GuideSection from "../Components/GuideSection";
import ServicesSection from "../Components/ServiceSection";
import PricingPlans from "../Components/PricingPlan";


const ShopNow = () => {
  return (
    <>
      <BannerSection
        title="Services"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Services" },
        ]}
      />
      <ServicesSection/>
    <GuideSection/>
    <PricingPlans/>
    </>
  );
};

export default ShopNow;
