import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import Membership from "../Pages/Membership/Membership";
import PrivetRoute from "./PrivetRoute";
import PostDetails from "../Pages/Home/Post/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/membership",
        element: (
          <PrivetRoute>
            <Membership></Membership>
          </PrivetRoute>
        ),
      },
      {
        path: "/post/:id",
        element: (
          <PrivetRoute>
            <PostDetails></PostDetails>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
