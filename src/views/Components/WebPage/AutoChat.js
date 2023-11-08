import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Send, Trash2 } from "react-feather";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";
import { TypeAnimation } from "react-type-animation";
const arr = [
  {
    id: 0,
    message: "Write a joke about cycling",
    isAI: false,
    time: 1000,
  },
  {
    id: 1,
    message: "Why did the bicycle fall over? Because it was two-tired.",
    isAI: true,
    time: 2000,
  },
  {
    id: 2,
    message: "Sell me this pen",
    isAI: false,
    time: 500,
  },
  {
    id: 3,
    message:
      "This pen is an essential tool for every professional. It's the perfect way to make your mark on the world. Its sleek design and smooth ink flow make it a must-have for anyone looking to make their signature stand out. So, don't wait - get this pen today and start writing your way to success!",
    isAI: true,
    time: 2000,
  },
  {
    id: 4,
    message:
      "Write a short speech thanking the team for their work on creating our new website",
    isAI: false,
    time: 1500,
  },
  {
    id: 5,
    message:
      "Dear team,<br><br>I want to take a moment to express my sincere gratitude for all the hard work and dedication that you've put into creating our new website. Your tireless efforts and unwavering commitment have resulted in a website that is not only visually stunning but also incredibly user-friendly and informative.<br><br>The countless hours of brainstorming, designing, and testing have truly paid off, and I'm confident that our new website will help us better serve our customers and reach new heights in our industry.<br><br>I want to extend a special thank you to each and every one of you for your contributions, no matter how big or small. Your passion for excellence and your willingness to go above and beyond the call of duty have truly made a difference.<br><br>Once again, thank you for your hard work and dedication to this project. Your efforts have not gone unnoticed, and I look forward to seeing all that we will achieve together in the future.<br><br>Best regards",
    isAI: true,
    time: 4000,
  },
  {
    id: 6,
    message: "Write an excel formula that removes everything before ':'",
    isAI: false,
    time: 1000,
  },
  {
    id: 7,
    message: "=RIGHT(A1,LEN(A1)-FIND(':',A1))",
    isAI: true,
    time: 2000,
  },
  {
    id: 8,
    message: "Explain 'Subprime Mortages' in layman's terms",
    isAI: false,
  },
  {
    id: 9,
    message:
      "A subprime mortgage is a type of loan that is given to someone with a lower credit score than what would typically be considered acceptable. It usually comes with a higher interest rate than a standard mortgage and involves a greater risk for the lender. In simple terms, it is a loan for people who have difficulty getting approved for other loans.",
    isAI: true,
    time: 2000,
  },
  {
    id: 10,
    message:
      "Improve this sentence for me: Slack is an app that helps people talk to each other.",
    isAI: false,
  },
  {
    id: 11,
    message:
      "Slack is an intuitive messaging platform that facilitates real-time communication and enhances productivity within teams.",
    isAI: true,
    time: 2000,
  },
  {
    id: 12,
    message:
      "Translate this into Norwegian: Generative AI is a type of artificial intelligence that focuses on creating data or content, rather than simply analyzing existing data.",
    isAI: false,
    time: 3000,
  },
  {
    id: 13,
    message:
      "Generativ AI er en type kunstig intelligens som fokuserer på å skape data eller innhold, i stedet for å bare analysere eksisterende data.",
    isAI: true,
    time: 2000,
  },
  {
    id: 14,
    message:
      "Create an instagram caption for a post that features our new CMO, John Doe",
    isAI: false,
  },
  {
    id: 15,
    message:
      "Meet John Doe, our new Chief Marketing Officer! 🤩  We can’t wait to see what he brings to the table. #WelcomeJohnDoe #TeamCMO",
    isAI: true,
    time: 2000,
  },
  {
    id: 16,
    message: "Turn this sentence into emojis: Wolf of Wall Street?",
    isAI: false,
  },
  {
    id: 17,
    message: "🐺💼💰💵📈🏢",
    isAI: true,
  },
  {
    id: 18,
    message:
      "Summarize this text: Mickey Mouse is an animated cartoon character co-created in 1928 by Walt Disney and Ub Iwerks. The longtime mascot of The Walt Disney Company, Mickey is an anthropomorphic mouse who typically wears red shorts, large yellow shoes, and white gloves. Taking inspiration from silent film personalities such as Charlie Chaplin's Tramp, Mickey is traditionally characterized as a sympathetic underdog who gets by on pluck and ingenuity….",
    isAI: false,
  },
  {
    id: 19,
    message:
      "Mickey Mouse is one of the world’s most beloved and recognizable cartoon characters. He was co-created in 1928 by Walt Disney and Ub Iwerks and has been the mascot of the Walt Disney Company ever since. He typically wears red shorts, large yellow shoes, and white gloves and is an anthropomorphic mouse.",
    isAI: true,
    time: 2000,
  },
  {
    id: 20,
    message:
      "Check this sentence for grammar errors: Ain't nobody got time for that.",
    isAI: false,
  },
  {
    id: 21,
    message: "Nobody has time for that.",
    isAI: true,
  },
];
const AutoChat = () => {
  const [inputText, setInputText] = useState("");
  const [convarstionArr, setConvarstionArr] = useState([]);
  const [tempArr, setTempArr] = useState([...(arr || [])]);
  const [seqArr, setSeqArr] = useState([]);
  
  const divRef = useRef();
  console.log(divRef);
  /**
   * The scrollToBottom function scrolls a div element into view smoothly.
   */
  // const scrollToBottom = () => {
  //   if (divRef.current) {
  //     divRef?.current?.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  useEffect(() => {
    if (convarstionArr.length !== tempArr.length) {
      const arr = [...tempArr];
      setTimeout(() => {
        setConvarstionArr([...convarstionArr, arr[convarstionArr.length]]);
      }, 2000);
    }
  }, [convarstionArr]);
  useEffect(() => {
    setTimeout(() => {
      scrollToBottom();
    }, 700);
  }, [convarstionArr]);


  useEffect(() => {
  const arrForChat = []
  arr.map((item)=>{
    if(!item.isAI){
      arrForChat.push(item.message)
      arrForChat.push(2500)
    }
  })
  setSeqArr(arrForChat)
  console.log('arrForChat: ', arrForChat);
  }, [])
  
  return (
    <div className="container pb-4">
      <div
        className="chat-box"
        data-aos="flip-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="chat-header">
          <div className="d-flex gap-1 align-items-center">
            <div className="profile-img">
              <Icon icon="fluent-emoji:panda" width="40" />
            </div>
            <div>
              <h4 className="profile-name">Ava</h4>
            </div>
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
              <div
                className={chat?.isAI ? "chat-left" : "chat-right"}
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <p className="ai-name">{chat?.isAI ? "Ava" : "You"}</p>
                  {/* <p className="time">{chat?.created_date?.toString()}</p> */}
                  <p className="time">Just Now</p>
                </div>
                <div
                  className={chat?.isAI ? "chat-left-box" : "chat-right-box"}
                >
                  <p>{chat?.message || ""}</p>
                </div>
              </div>
              {/* <div ref={divRef}></div> */}
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
            
            <div className="input-box">
              <div>
          { seqArr.length>0&&   <TypeAnimation
            sequence={seqArr}
            wrapper="span"
            speed={80}
            cursor={true}
            className="typing-text"
            omitDeletionAnimation
            ref={divRef}
          />}
              </div>
              <div>
                <Button className="primary-btn d-sm-block d-none" type="submit">
                  Send
                </Button>
                <Button className="primary-btn d-sm-none d-block" type="submit">
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AutoChat;
