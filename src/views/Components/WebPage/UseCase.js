import React from "react";
import { Col, Row } from "reactstrap";
import { UseCaseDetail } from "./UseCaseDetail";

const UseCase = () => {
  return (
    <div className="container" >
      <Row>
        <Col
          lg="6"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="meet-ava">
            <p>Usecases</p>
            <h2>Discover how Ava streamlines your writing workflows</h2>
            <h5>
              With Ava's help, streamline all of your writing needs with ease -
              whether it's brainstorming articles or creating compelling
              marketing emails.
            </h5>
          </div>
        </Col>
      </Row>
      <UseCaseDetail/>
    </div>
  );
};

export default UseCase;
