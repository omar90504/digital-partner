import React from 'react';
import BannerSection from '../Components/HeroSection';
import BlogSection from '../Components/BlogSection';


const Blogs = () => {
    return (
        <>

  <BannerSection
        title="Our Blog"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Blog" },
        ]}
      />    <BlogSection/>
    </>
    );
}


export default Blogs;
