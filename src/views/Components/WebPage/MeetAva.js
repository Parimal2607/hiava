import React from "react";
import { Col, Row } from "reactstrap";
import BannerImage from "../../../assets/images/pages/banner.png";
const MeetAva = () => {
  return (
    <div className="container mt-5">
      <Row>
        <Col
          lg="6"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div className="meet-ava">
            <p>Meet Ava</p>
            <h2>Generate content in seconds using AI</h2>
            <h5>
              Streamlines your writing process from content ideation to
              co-creating entire campaigns with AI.
            </h5>
          </div>
        </Col>
        <Col
          lg="6"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div className="meet-ava-right">
            <div className="d-flex gap-1">
              <div className="icon-outline">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17.5H3.5M6.5 12H2M9 6.5H4M17 3L10.4036 12.235C10.1116 12.6438 9.96562 12.8481 9.97194 13.0185C9.97744 13.1669 10.0486 13.3051 10.1661 13.3958C10.3011 13.5 10.5522 13.5 11.0546 13.5H16L15 21L21.5964 11.765C21.8884 11.3562 22.0344 11.1519 22.0281 10.9815C22.0226 10.8331 21.9514 10.6949 21.8339 10.6042C21.6989 10.5 21.4478 10.5 20.9454 10.5H16L17 3Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <h3>Get more done in less time</h3>
                <p>
                  Ava helps you whip up a draft in seconds – freeing up more
                  time to tackle other important tasks and increase your
                  productivity
                </p>
              </div>
            </div>
            <div className="d-flex gap-1">
              <div className="icon-outline">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 10L14.5657 13.4343C14.3677 13.6323 14.2687 13.7313 14.1545 13.7684C14.0541 13.8011 13.9459 13.8011 13.8455 13.7684C13.7313 13.7313 13.6323 13.6323 13.4343 13.4343L10.5657 10.5657C10.3677 10.3677 10.2687 10.2687 10.1545 10.2316C10.0541 10.1989 9.94591 10.1989 9.84549 10.2316C9.73133 10.2687 9.63232 10.3677 9.43431 10.5657L6 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <h3>Take your writing to the next level</h3>
                <p>
                  Having studied Shakespeare and 10% of the internet, Ava knows
                  quality writing. Get help to elevate your writing to new
                  heights.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div
        className="banner my-5"
        data-aos="zoom-in"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="2000"
      >
        <img src={BannerImage} alt="banner-img" className="img-fluid" />
      </div>
    </div>
  );
};

export default MeetAva;
