/* eslint-disable react/prop-types */
import {  createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext('')
const AuthProvider = ({children}) => {
   const [user, setUser] = useState('')

   useEffect(()=>{
    const unSubscribe=  onAuthStateChanged(auth, currentUser =>{
        console.log(currentUser)
        setUser(currentUser)
    })
    return ()=> unSubscribe()
   },[])
    
   const createUser = (email, password) =>{

    return createUserWithEmailAndPassword(auth, email, password)
   }




    const authInfo = {
     user,
     createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;