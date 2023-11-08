import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { tempData } from "../../../constant";
import CustomSvg from "../common/CustomSvg";
const MainTemplate = () => {
  return (
    <div className="container my-5">
      <div
        className="meet-ava"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <p>Templates</p>
        <h2>Your first draft, made in seconds</h2>
        <h5>
          Generate high-quality articles, blogs, landing pages, Google ads,
          Facebook ads, emails, product descriptions, tweets, Instagram
          captions, and more in seconds.
        </h5>
      </div>
      <Row className="match-height my-4">
        {tempData.map((item, id) => (
          <Col
            key={id}
            lg="4"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <Card className="temp-card">
              <CardBody className="p-0">
                <div className="temp-card-header">
                  <CustomSvg icon={item.image} />
                </div>
                <div className="temp-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <div
        className="text-center"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <Link to="/template">
          <Button className="primary-btn">See All Templates</Button>
        </Link>
      </div>
    </div>
  );
};

export default MainTemplate;
