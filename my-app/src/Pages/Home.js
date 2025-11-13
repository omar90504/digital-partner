import React from 'react';
import Banner from '../Components/Home-Hero-Section';
import ExpertiseSection from '../Components/Our-Expertise';
import PartnerSection from '../Components/PartnerSection';
import WhyChooseUs from '../Components/WhyChooseUs';
import GuideSection from '../Components/GuideSection';
import ServicesSection from '../Components/ServiceSection';
import CaseStudies from '../Components/CaseStudies';
import TestimonialSection from '../Components/TestimonialSection';
import DigitalProcess from '../Components/DigitalProcessSection';
import PricingPlans from '../Components/PricingPlan';
import NewsletterSection from '../Components/NewsletterSection';
import BlogSection from '../Components/BlogSection';

const Home = () => {
    return (
        <>
    <Banner/>
    <ExpertiseSection/>
    <PartnerSection/>
    <WhyChooseUs/>
    <GuideSection/>
    <ServicesSection/>
    <CaseStudies/>
    <TestimonialSection/>
    <DigitalProcess/>
    <PricingPlans/>
    <NewsletterSection/>
    <BlogSection/>
    </>
    );
}


export default Home;
