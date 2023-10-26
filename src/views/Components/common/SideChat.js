import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Send,
  Trash2,
  File,
  Image,
  Figma,
  Globe,
  Slack,
  Chrome,
  GitHub,
  Gitlab,
  Twitter,
  Youtube,
  Facebook,
  Linkedin,
  Dribbble,
  FileText,
  Instagram,
  HelpCircle,
} from "react-feather";
import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import Select, { components } from "react-select";
import ContentImage from "../../../assets/images/logo/content.svg";
const arr = [
  {
    id: 1,
    message:
      "Greetings, I'm Ava. I have a talent for crafting witty jokes that are sure to tickle your funny bone!Greetings, I'm Ava. I have a talent for crafting witty jokes that are sure to tickle your funny bone!",
    isAI: true,
    created_date: new Date(),
  },
];
const iconOptions = [
  {
    label: "Social Media",
    options: [
      {
        value: "facebook",
        label: "Facebook",
        icon: Facebook,
      },
      {
        value: "twitter",
        label: "Twitter",
        icon: Twitter,
      },
      {
        value: "linkedin",
        label: "Linkedin",
        icon: Linkedin,
      },
      {
        value: "github",
        label: "Github",
        icon: GitHub,
      },
      {
        value: "instagram",
        label: "Instagram",
        icon: Instagram,
      },
      {
        value: "dribbble",
        label: "Dribbble",
        icon: Dribbble,
      },
      {
        value: "gitlab",
        label: "Gitlab",
        icon: Gitlab,
      },
    ],
  },
  {
    label: "File Types",
    options: [
      { value: "pdf", label: "PDF", icon: File },
      { value: "txt", label: "txt", icon: FileText },
      { value: "image", label: "Image", icon: Image },
    ],
  },
  {
    label: "Others",
    options: [
      { value: "figma", label: "Figma", icon: Figma },
      { value: "chrome", label: "Chrome", icon: Chrome },
      { value: "safari", label: "Safari", icon: Globe },
      { value: "slack", label: "Slack", icon: Slack },
      { value: "youtube", label: "Youtube", icon: Youtube },
    ],
  },
];
const OptionComponent = ({ data, ...props }) => {
  const Icon = data.icon;

  return (
    <components.Option {...props}>
      <Icon className="me-50" size={14} />
      {data.label}
    </components.Option>
  );
};

const SideChat = () => {
  const [inputText, setInputText] = useState("");
  const [convarstionArr, setConvarstionArr] = useState([...(arr || [])]);
  return (
    <>
      <Row>
        <Col lg="4">
          <div className="left-side-box">
            <div>
              <div className="left-header">
                <Select
                  options={iconOptions}
                  className="react-select"
                  classNamePrefix="select"
                  components={{
                    Option: OptionComponent,
                  }}
                />
              </div>
              <div className="left-content align-items-start d-flex gap-1 left-content">
                <img
                  src={ContentImage}
                  alt="content-img"
                  className="img-fluid"
                />
                <div>
                  <h5>Content Improver</h5>
                  <p>
                    Transform a piece of content to be more captivating,
                    appealing and engaging.
                  </p>
                </div>
              </div>
              <hr />
              <div className="description">
                <div className="d-flex justify-content-between align-items-center">
                  <div className=" d-flex gap-50">
                    <Label>Content</Label>
                    <HelpCircle size={16} id="positionTop" />
                    <UncontrolledTooltip placement="top" target="positionTop">
                      Add The content you would like to Improve
                    </UncontrolledTooltip>
                  </div>
                  <div>
                    <small>0/8000</small>
                  </div>
                </div>
                <Input type="textarea" />
              </div>
            </div>

            <div className="d-flex gap-1 justify-content-end left-footer">
              <Button className="secondary-btn">Clear</Button>
              <Button className="primary-btn">Generate</Button>
            </div>
          </div>
        </Col>
        <Col lg="8">
          <div className="chat-box">
            <div className="chat-header">
              <div className="d-flex gap-50">
                <div className="profile-img">
                  <Icon icon="fluent-emoji:panda" width="40" />
                </div>
                <div>
                  <h4 className="profile-name">sumit</h4>
                  <small>@sumit</small>
                </div>
              </div>
              <div className="action">
                <Trash2 />
              </div>
            </div>
            <hr />
            <div className="chat-content">
              {convarstionArr?.map((chat) => (
                <div
                  className={
                    chat?.isAI
                      ? "d-flex justify-content-start"
                      : "justify-content-end d-flex my-2"
                  }
                >
                  <div className={chat?.isAI ? "chat-left" : "chat-right"}>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="ai-name">{chat?.isAI ? "Ava" : "You"}</p>
                      <p className="time">Just Now</p>
                    </div>
                    <div
                      className={
                        chat?.isAI ? "chat-left-box" : "chat-right-box"
                      }
                    >
                      <p>{chat?.message || ""}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="chat-footer">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setConvarstionArr((pre) => [
                    ...pre,
                    {
                      id: pre.length + 1,
                      message: inputText,
                      isAI: false,
                      created_date: new Date(),
                    },
                  ]);
                  setInputText("");
                }}
              >
                <InputGroup>
                  <Input
                    type="text"
                    placeholder="start chat"
                    value={inputText}
                    onChange={(e) => {
                      setInputText(e.target.value);
                    }}
                  />
                  <InputGroupText>
                    <Button
                      className="primary-btn d-sm-block d-none"
                      type="submit"
                    >
                      Send
                    </Button>
                    <Button
                      className="primary-btn d-sm-none d-block"
                      type="submit"
                    >
                      <Send size={16} />
                    </Button>
                  </InputGroupText>
                </InputGroup>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SideChat;
