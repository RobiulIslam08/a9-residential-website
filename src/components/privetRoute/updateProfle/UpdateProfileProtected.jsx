/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const UpdateProfileProtected = ({children}) => {
    
   
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
    return <Navigate  to="/login"></Navigate>;
};

export default UpdateProfileProtected;