import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../pages/errroPage/ErrorPage";
import Details from "../pages/details/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "login",
            element:<Login></Login>
        },
        {
            path: "register",
            element: <Register></Register>
        },
        {
          path: "update",
          element: <UpdateProfile></UpdateProfile>
        },
        {
          path: "contact",
          element: <Contact></Contact>
        },
        {
          path: "/details/:id",
          element: <Details></Details>
        }

      ]
    },
  ]);
  export default router