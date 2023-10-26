import React from "react";
import { Filter, Heart, Mail, Search } from "react-feather";
import { Link } from "react-router-dom";
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
import SuggestionModal from "./SuggestionModal";
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
            <div className="d-flex gap-1 align-items-center">
              <InputGroup>
                <InputGroupText>
                  <Search size={18} />
                </InputGroupText>
                <Input type="text" placeholder="Search" />
              </InputGroup>
              <SuggestionModal />
            </div>

            <TemplateFilter />
          </CardHeader>
        </Card>
      </div>
      <Row>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
          <Col lg="3">
            <Link to="/side-chat">
            <Card className="template-card">
              <CardBody>
                <div class="d-flex justify-content-between">
                  <img src={MessageImage} alt="message" className="img-fluid" />
                  <Heart size={20} color="#6938ef" />
                </div>

                <div className="template-content mt-2">
                  <h5>Email Responder</h5>
                  <p>Answer any email in seconds.</p>
                </div>
              </CardBody>
              <CardFooter className="text-end">
                <Badge className="universal">universal</Badge>
              </CardFooter>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Template;
