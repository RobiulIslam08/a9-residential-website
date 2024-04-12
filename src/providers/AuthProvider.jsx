/* eslint-disable react/prop-types */
import {  createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();
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
   const loginUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
   }
   const logout = () => {
    return signOut(auth)
   }
   const signWithGoogle = ()=> {
    return signInWithPopup(auth, googleProvider)
   }
   const signWithGithub = () =>{
    return signInWithPopup(auth, githubProvider)
   }




    const authInfo = {
        signWithGithub,
        signWithGoogle,
     user,
     createUser,
     loginUser,
     logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;