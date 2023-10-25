import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Icon } from "@iconify/react";
import ContentImage from "../../../assets/images/logo/contetn-improver.svg";
import ChatImage from "../../../assets/images/logo/content-text.svg";
import emailImage from "../../../assets/images/logo/email.svg";
import AvaTemp1 from "../../../assets/images/pages/ava-temp1.png";
import AvaTemp2 from "../../../assets/images/pages/ava-temp2.jpeg";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header mb-2">
        <h1>Dashboard</h1>
        <p>
          Streamline your writing processes with Ava, the AI-powered writing
          assistant.
        </p>
      </div>
      <hr />
      <div className="create-content ">
        <div className="create-content-header my-2">
          <h4>Create content</h4>
        </div>
        <Row>
          <Col lg="6">
            <Card className="dashboard-welcome-cards">
              <CardBody>
                <div className="d-flex gap-1">
                  <div className="card-icon">
                    <div className="inner-div">
                      <Icon icon="line-md:text-box-multiple" width="18" />
                    </div>
                  </div>
                  <div className="card-content">
                    <h5>Explore templates</h5>
                    <p>
                      Trained on industry best practices and proven examples,
                      enabling it to generate high-quality writing for 50+
                      unique use-cases.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="dashboard-welcome-cards">
              <CardBody>
                <div className="d-flex gap-1">
                  <div className="card-icon">
                    <div className="inner-div">
                      <Icon icon="bx:chat" width="18" />
                    </div>
                  </div>
                  <div className="card-content">
                    <h5>Chat with Ava</h5>
                    <p>
                      Ask your friendly AI assistant to generate ideas, revise
                      your content, and even make you laugh.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="create-content ">
        <div className="create-content-header my-2">
          <h4>Popular templates</h4>
        </div>
        <Row className="match-height">
          <Col lg="4">
            <Card className="dashboard-welcome-cards tem-card h-100">
              <CardBody className="align-items-baseline card-body d-flex h-100 flex-column justify-content-between">
                <img
                  src={ContentImage}
                  alt="Content improver"
                  className="img-fluid mb-1"
                />
                <div className="card-content">
                  <h5>Content improver</h5>
                  <p>
                    Transform a piece of content to be more captivating,
                    appealing and engaging.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="dashboard-welcome-cards tem-card h-100">
              <CardBody className="align-items-baseline card-body h-100 d-flex flex-column justify-content-between">
                <img
                  src={ChatImage}
                  alt="Content improver"
                  className="img-fluid mb-1"
                />
                <div className="card-content">
                  <h5>Blog post outline</h5>
                  <p>Generate high-quality content outline for a blog post.</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="dashboard-welcome-cards tem-card h-100">
              <CardBody className="align-items-baseline card-body h-100 d-flex flex-column justify-content-between">
                <img
                  src={emailImage}
                  alt="Content improver"
                  className="img-fluid mb-1"
                />
                <div className="card-content">
                  <h5>AIDA framework</h5>
                  <p>
                    Use the timeless marketing framework of AIDA - Attention,
                    Interest, Desire, and Action.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="create-content ">
        <div className="create-content-header my-2">
          <h4>Learn how to use Ava</h4>
        </div>
        <Row className="match-height">
          <Col lg="6">
            <Card className="ava-use-cards">
              <CardBody className="p-0">
                <div className="img-hover">
                  <img
                    src={AvaTemp2}
                    alt="Content improver"
                    className="img-fluid"
                  />
                </div>
                <div className="ava-content">
                  <span>Announcement</span>
                  <h3 className="my-1">Introducing Ava Templates</h3>
                  <p>
                    Ava's writing templates have been trained industry best
                    practices and proven examples, enabling it to generate
                    high-quality writing for over 100+ unique use-cases.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="ava-use-cards">
              <CardBody className="p-0">
              <div className="img-hover">
                  <img
                    src={AvaTemp2}
                    alt="Content improver"
                    className="img-fluid"
                  />
                </div>
                <div className="ava-content">
                  <span>Announcement</span>
                  <h3 className="my-1">Introducing Ava Chat</h3>
                  <p>
                    Say Hell to Ava chat: Your helpful AI writing assistant that
                    helps you write your first draft in seconds.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
