import { Mail, Home, MessageSquare, File } from "react-feather";

export default [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "template",
    title: "Templates",
    icon: <File size={20} />,
    navLink: "/template",
  },
  {
    id: "chat",
    title: "Chat",
    icon: <MessageSquare size={20} />,
    navLink: "/chat",
  },
];
