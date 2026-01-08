import React from 'react';
import BannerSection from '../Components/HeroSection';
import BlogSection from '../Components/BlogSection';
import BlogList from "../Components/BlogList";
import posts from "../Data/Posts";


const Blogs = () => {
    return (
        <>

  <BannerSection
        title="Our Blog"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Blog" },
        ]}
      />    
      <BlogList posts={posts} />
    </>
    );
}


export default Blogs;
