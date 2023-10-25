import React from "react";
import { Filter, Mail, Search } from "react-feather";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";
import MessageImage from "../../../assets/images/logo/message.svg";
import TemplateFilter from "./TemplateFilter";
const Template = () => {
  return (
    <div className="template">
      <div className="template-header mb-2">
        <h1>Templates</h1>
        <p>
          Unlock the power of AI-generated content to streamline your workflows
        </p>
      </div>
      <hr />
      <div className="template-filters">
        <Card>
          <CardHeader className="p-1">
            <InputGroup>
              <InputGroupText>
                <Search size={18} />
              </InputGroupText>
              <Input type="text" placeholder="Search" />
            </InputGroup>
            <TemplateFilter/>
          </CardHeader>
        </Card>
      </div>
      <Row>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
          <Col lg="3">
            <Card className="template-card">
              <CardBody>
                <img src={MessageImage} alt="message" className="img-fluid" />
                <div className="template-content mt-2">
                  <h5>Email Responder</h5>
                  <p>Answer any email in seconds.</p>
                </div>
              </CardBody>
              <CardFooter className="text-end">
                <Badge  className="universal">universal</Badge>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Template;
