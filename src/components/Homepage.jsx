import React from "react";
import LatestNews from "./homepage/LatestNews";
import QuickLinks from "./homepage/QuickLinks";
import HomeNotice from "./homepage/HomeNotice";
import HomeAbout from "./homepage/HomeAbout";

const Homepage = () => {
  return (
    <>
      <LatestNews />
      <QuickLinks />
      <HomeNotice />
      <HomeAbout />
    </>
  );
};

export default Homepage;
