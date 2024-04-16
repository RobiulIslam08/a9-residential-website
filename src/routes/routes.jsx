import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../pages/errroPage/ErrorPage";
import Details from "../pages/details/Details";
import PrivetRoute from "../components/privetRoute/PrivetRoute";
import UpdateProfileProtected from "../components/privetRoute/updateProfle/UpdateProfileProtected";
import Blogs from "../pages/blogs/Blogs";
import BlogsProtect from "../components/privetRoute/blogProtect/BlogsProtect";

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
          element: <UpdateProfileProtected><UpdateProfile></UpdateProfile></UpdateProfileProtected>
        },
        {
          path: "contact",
          element: <Contact></Contact>
        },
        {
          path: "/details/:id",
          element: <PrivetRoute><Details></Details></PrivetRoute>
        },
        {
          path: "blogs",
          element: <BlogsProtect><Blogs></Blogs></BlogsProtect>
        }

      ]
    },
  ]);
  export default router