import React, { useEffect, useState } from "react";
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
import SuggestionModal from "./SuggestionModal";
import TemplateFilter from "./TemplateFilter";
import { template } from "../../../constant";
const Template = () => {
  const classes = {
    universal: "universal",
    popular: "popular",

  }
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
      <Row className="match-height">
        {template.map((temp, id) => {
          return (
            <Col lg="3" key={id}>
              <Card className="template-card">
                <Link to="/side-chat" className="h-100">
                  <div className="d-flex flex-column h-100 justify-content-between">

                
                  <CardBody className="d-flex flex-column justify-content-between">
                    <div class="d-flex justify-content-between">
                      <img
                        src={temp.image}
                        alt={temp.image}
                        className="img-fluid"
                      />
                      <Heart size={20} color="#6938ef" />
                    </div>

                    <div className="template-content mt-1">
                      <h5>{temp.name}</h5>
                      <p>{temp.description}</p>
                    </div>
                  </CardBody>
                  <CardFooter className="text-end position">
                    <Badge className={temp.department ? temp.department : ""}>{temp.department}</Badge>
                  </CardFooter>
                  </div>
                </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Template;
