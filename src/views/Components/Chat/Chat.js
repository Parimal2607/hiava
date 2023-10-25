import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Trash2 } from "react-feather";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";
const arr = [
  {
    id: 1,
    message:
      "Greetings, I'm Ava. I have a talent for crafting witty jokes that are sure to tickle your funny bone!Greetings, I'm Ava. I have a talent for crafting witty jokes that are sure to tickle your funny bone!",
    isAI: true,
    created_date: new Date(),
  },
];
const chat = () => {
  const [inputText, setInputText] = useState("");
  const [convarstionArr, setConvarstionArr] = useState([...(arr || [])]);
  return (
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
          <div className={chat?.isAI ? "d-flex justify-content-start" : "justify-content-end d-flex my-2"}>
            <div className={chat?.isAI ? "chat-left" : "chat-right"}>
              <div className="d-flex justify-content-between align-items-center">
                <p className="ai-name">Ava</p>
                {/* <p className="time">{chat?.created_date?.toString()}</p> */}
                <p className="time">Just Now</p>
              </div>
              <div className={chat?.isAI ? "chat-left-box" : "chat-right-box"}>
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
              <Button className="primary-btn" type="submit">
                Send
              </Button>
            </InputGroupText>
          </InputGroup>
        </form>
      </div>
    </div>
  );
};

export default chat;
