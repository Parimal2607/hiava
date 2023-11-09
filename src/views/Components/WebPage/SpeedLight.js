import React from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { template } from "../../../constant";
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
            <div className="parallax-effect">          
            <Row className="match-height">
                
                {template.map((item, id) => 
                <Col lg="4" key={id}>
                   <Card>
                    <CardBody className="text-center">
                       <img src={item.image}/>
                       <div className="template-content mt-1">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                    </CardBody>
                   </Card>
                </Col>
                )}
            </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
