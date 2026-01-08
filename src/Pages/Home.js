import React from 'react';
import { Helmet } from "react-helmet";

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
import BlogList from "../Components/BlogList";
import posts from "../Data/Posts";

const Home = () => {
    return (
        <>
            {/* SEO TITLE & DESCRIPTION */}
            <Helmet>
                <title>
                    Best Digital Marketing & SEO Services | Grow Your Business
                </title>

                <meta
                    name="description"
                    content="We provide top-notch SEO, web design, and digital marketing services to help your business grow. Get more leads, more traffic, and real results."
                />

                <meta
                    name="keywords"
                    content="SEO services, digital marketing, web design, PPC, content marketing, website development"
                />
            </Helmet>

            <Banner />
            <ExpertiseSection />
            <PartnerSection />
            <WhyChooseUs />
            <GuideSection />
            <ServicesSection />
            <CaseStudies />
            <TestimonialSection />
            <DigitalProcess />
            <PricingPlans />
            <NewsletterSection />
            <BlogList posts={posts} />
        </>
    );
};

export default Home;
