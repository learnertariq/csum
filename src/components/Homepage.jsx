import React from "react";
import LatestNews from "./homepage/LatestNews";
import QuickLinks from "./homepage/QuickLinks";
import HomeNotice from "./homepage/HomeNotice";
import HomeAbout from "./homepage/HomeAbout";
import HomeCommitteInfo from "./homepage/HomeCommitteInfo";

const Homepage = () => {
  return (
    <>
      <LatestNews />
      <QuickLinks />
      <HomeNotice />
      <HomeAbout />
      <HomeCommitteInfo />
    </>
  );
};

export default Homepage;
