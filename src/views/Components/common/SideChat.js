import React, { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { template } from "../../../constant";

const arr = [
  {
    id: 1,
    message:
      "Greetings, I'm Ava. I have a talent for crafting witty jokes that are sure to tickle your funny bone!Greetings, I'm Ava. I have a talent for crafting witty jokes that are sure to tickle your funny bone!",
    isAI: true,
    created_date: new Date(),
  },
];

const OptionComponent = ({ data, ...props }) => {
  const Icon = data.icon;

  return (
    <components.Option {...props}>
      <img src={Icon} alt="icon" className="social-icon" />
      {data.label}
    </components.Option>
  );
};

const SideChat = () => {
  const [inputText, setInputText] = useState("");
  const [convarstionArr, setConvarstionArr] = useState([...(arr || [])]);
  const [dataId, setDataId] = useState(template);
  const [value, setValue] = useState(template);

  const data = useParams();
  const navigate = useNavigate();
  
  const filterId = dataId.filter((user) => user.id == data.id);
  const MediaOption = () => {
    let arr = [];
    template?.map((item) => {
      arr.push({
        label: item?.name,
        value: item?.name,
        icon: item?.image,
        id: item?.id,
      });
    });
    return arr;
  };

  let iconOptions = MediaOption();

  const halndelChange = (e) => {
    navigate(`/side-chat/${e.id}`);
    setValue(e.id);
  };

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
                  isSearchable
                  components={{
                    Option: OptionComponent,
                  }}
                  value={iconOptions.find(
                    (item) => item.id === Number(data?.id)
                  )}
                  onChange={(e) => halndelChange(e)}
                  getOptionLabel={(data) => (
                    <div className="select-option m-0">
                      <img src={data.icon} alt="icon" className="social-icon" />
                      {data.label}
                    </div>
                  )}
                />
              </div>
              {filterId.map((user, id) => (
                <div
                  className="left-content align-items-start d-flex gap-1 left-content"
                  key={id}
                >
                  <img
                    src={user.image}
                    alt={user.image}
                    className="img-fluid"
                  />
                  <div>
                    <h5>{user.name}</h5>
                    <p>{user.description}</p>
                  </div>
                </div>
              ))}

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
