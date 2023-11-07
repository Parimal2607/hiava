import React from "react";
import AutoChat from "./AutoChat";
import Hero from "./Hero";
import MeetAva from "./MeetAva";
import MenuBar from "./MenuBar";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="header-section">
        <MenuBar/>
        <Hero />
        <AutoChat />
      </div>
      <MeetAva/>
    </div>
  );
};

export default LandingPage;
