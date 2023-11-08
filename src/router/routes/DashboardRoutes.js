import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Dashboard = lazy(() =>
  import("../../views/Components/Dashboard/Dashboard.js")
);
const ChatPage = lazy(() => import("../../views/Components/Chat/Chat"));
const Template = lazy(() =>
  import("../../views/Components/Templates/Template.js")
);
const SideChat = lazy(() => import("../../views/Components/common/SideChat"));
const Profile = lazy(() => import("../../views/Components/Profile/Profile"));
const WebPage = lazy(() =>
  import("../../views/Components/WebPage/LandingPage")
);

const DefaultRoute = "/login";

const DashboardRoutes = [
  {
    path: "/",
    index: true,
    element: <Navigate replace to={DefaultRoute} />,
  },
  {
    path: "/home",
    element: <Dashboard />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
  {
    path: "/side-chat/:id",
    element: <SideChat />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/template",
    element: <Template />,
  },
  {
    path: "/web-page",
    element: <WebPage />,
    meta: {
      layout: "blank",
    },
  },
];

export default DashboardRoutes;
