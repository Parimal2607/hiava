// ** React Imports
import { lazy } from "react";

const Login = lazy(() => import("../../views/Login"));
const Error = lazy(() => import("../../views/Error"));
const Register = lazy(() => import("../../views/Register"))
const ForgotPassWord = lazy(() => import("../../views/ForgotPassword"))


const AuthenticationRoutes = [
  {
    path: "/login",
    element: <Login />,
    meta: {
      layout: "blank",
      publicRoute: true,
    },
  },
  {
    path: "/error",
    element: <Error />,
    meta: {
      layout: "blank",
      publicRoute: true,
    },
  },
  {
    path: "/register",
    element: <Register />,
    meta: {
      layout: "blank",
      publicRoute: true,
    },
  },
  {
    path: "/forgot-password",
    element: <ForgotPassWord />,
    meta: {
      layout: "blank",
      publicRoute: true,
    },
  },
];

export default AuthenticationRoutes;
