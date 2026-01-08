import React from "react";
import BannerSection from "../Components/HeroSection";
import ProductList from "../Components/ProductList";


const ShopNow = () => {
  return (
    <>
      <BannerSection
        title="Shop Now"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Shop Now" },
        ]}
      />
<ProductList/>
    </>
  );
};

export default ShopNow;
