/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const BlogsProtect = ({children}) => {
    const location = useLocation()
    console.log(location)
   
    const {user,loading} =useContext(AuthContext) 
    if(loading){
        return <><span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span></>
    }
    if(user){
        return children
    }
    return <Navigate  to="/login" state={location.pathname}></Navigate>;
};

export default BlogsProtect;