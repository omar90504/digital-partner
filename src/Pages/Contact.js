import React from 'react';
import BannerSection from '../Components/HeroSection';
import ContactSection from '../Components/ContactSection';
import MapSection from '../Components/MapSection';


const Contact = () => {
    return (
        <>
   <BannerSection
        title="Contact Us"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Contact" },
        ]}
      /> 
  <ContactSection/>
  <MapSection/>
    </>
    );
}


export default Contact;
