import React, { useEffect } from "react";
import AutoChat from "./AutoChat";
import Hero from "./Hero";
import MeetAva from "./MeetAva";
import MenuBar from "./MenuBar";
import AOS from "aos";
import "aos/dist/aos.css";
import UseCase from "./UseCase";
import MainTemplate from "./MainTemplate";
import AutoType from "./AutoType";
const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="landing-page">
      <div className="header-section">
        <MenuBar />
        <Hero />
        <AutoChat />
      </div>
      <MeetAva />
      <UseCase/>
      <MainTemplate/>
      <AutoType/>
    </div>
  );
};

export default LandingPage;
