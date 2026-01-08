import React from "react";
import { Helmet } from "react-helmet"; // 👈 SEO META
import BannerSection from "../Components/HeroSection";
import ProfessionalHeroSection from "../Components/ProfessionalHeroSection";
import ProfessionalOverview from "../Components/ProfessionalOverview";
import ProfessionalContent from "../Components/ProfessionalContent";
import ProfessionalProcess from "../Components/ProfessionalProcess";
import ProfessionalFAQ from "../Components/ProfessionalFAQ";
import ProfessionalServicesSection from "../Components/ProfessionalServicesSection";

const ProfessionalSEOServices = () => {
  return (
    <>
      {/* SEO TITLE & DESCRIPTION */}
      <Helmet>
        <title>Professional SEO Services | Drive More Traffic & Rankings</title>
        <meta
          name="description"
          content="Get professional SEO services that boost rankings, traffic, and visibility. We offer on-page, technical SEO, backlinks, local SEO, and monthly reporting."
        />
      </Helmet>

      {/* Banner */}
      <BannerSection
        title="Professional SEO Services"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Services", link: "/our-services" },
          { name: "SEO", link: "/our-services/seo" },
          { name: "Professional SEO Services" }
        ]}
      />

      <ProfessionalHeroSection />
      <ProfessionalContent />
      <ProfessionalOverview />
      <ProfessionalServicesSection />
      <ProfessionalProcess />
      <ProfessionalFAQ />
    </>
  );
};

export default ProfessionalSEOServices;
