import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "reactstrap";
const Hero = () => {
  return (
    <div
      class="container"
      
    >
      <div class="hero-section" data-aos="fade-down"
      data-aos-offset="300"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine">
        <div>
          <TypeAnimation
            sequence={[
              "Your personal AI assistant that helps you write blog post",
              1000,
              "Your personal AI assistant that helps you write sales emails",
              1000,
              "Your personal AI assistant that helps you write facbook ads",
              1000,
              "Your personal AI assistant that helps you write poems",
              1000,
              "Your personal AI assistant that helps you write job description",
              1000,
              "Your personal AI assistant that helps you write social media post",
              1000,
              "Your personal AI assistant that helps you write content writing",
              1000,
            ]}
            wrapper="span"
            speed={50}
            cursor={true}
            className="typing-text"
            repeat={Infinity}
          />
        </div>
        <h2
          class="subheading subheading--hero"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          — Ava is an AI-powered writing assistant that helps you write your
          first draft in seconds, enabling you to get more done in less time!
        </h2>
        <div
          className="action"
          data-aos="fade-down"
         
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <Button className="cta-btn">View templates</Button>
          <Button className="primary-btn">Try for free</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
