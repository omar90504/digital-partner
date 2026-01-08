import React from "react";
import BannerSection from "../Components/HeroSection";
import Account from "../Components/Account";


const MyAccount = () => {
  return (
    <>
      <BannerSection
        title="My Account"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "My Account" },
        ]}
      />
      <Account/>
    </>
  );
};

export default MyAccount;
