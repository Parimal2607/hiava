import React from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { template } from "../../../constant";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
export const SpeedLight = () => {
  return (
    <div className="container my-4">
      <div className="light overflow-hidden">
        <Row>
          <Col lg="4" className="pt-4 pb-4 ps-4">
            <div className="meet-ava">
              <h2>Ready to write at the speed of light?</h2>
              <h5 className="my-2">
                See how easy it can be to write amazing content. Sign up now and
                never stare at a blank page again!
              </h5>
              <Button className="primary-btn">Get Started</Button>
            </div>
          </Col>
          <Col lg="8">
              <ParallaxProvider>
                <Parallax speed={10} rotate={[40, 0]}>
            <div className="parallax-effect d-flex gap-3">
                  <ParallaxProvider>
                    <Parallax
                      speed={5}
                      className="match-height"
                      translateY={40}
                    >
                      {template.map((item, id) => (
                        <Col lg="12" key={id}>
                          <Card>
                            <CardBody className="text-center">
                              <img src={item.image} />
                              <div className="template-content mt-1">
                                <h5>{item.name}</h5>
                                <p>{item.description}</p>
                              </div>
                            </CardBody>
                          </Card>
                        </Col>
                      ))}
                    </Parallax>
                  </ParallaxProvider>

                  <ParallaxProvider>
                    <Parallax
                      speed={5}
                      className="match-height"
                      translateY={-40}
                    >
                      {template.map((item, id) => (
                        <Col lg="12" key={id}>
                          <Card>
                            <CardBody className="text-center">
                              <img src={item.image} />
                              <div className="template-content mt-1">
                                <h5>{item.name}</h5>
                                <p>{item.description}</p>
                              </div>
                            </CardBody>
                          </Card>
                        </Col>
                      ))}
                    </Parallax>
                  </ParallaxProvider>
                  <ParallaxProvider>
                    <Parallax
                      speed={5}
                      className="match-height"
                      translateY={-20}
                    >
                      {template.map((item, id) => (
                        <Col lg="12" key={id}>
                          <Card>
                            <CardBody className="text-center">
                              <img src={item.image} />
                              <div className="template-content mt-1">
                                <h5>{item.name}</h5>
                                <p>{item.description}</p>
                              </div>
                            </CardBody>
                          </Card>
                        </Col>
                      ))}
                    </Parallax>
                  </ParallaxProvider>
            </div>
                </Parallax>
              </ParallaxProvider>
          </Col>
        </Row>
      </div>
    </div>
  );
};
