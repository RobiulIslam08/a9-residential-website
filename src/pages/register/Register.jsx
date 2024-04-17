// import { useContext, useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";

// const Register = () => {
// const navigate = useNavigate()
// const { createUser, updateUserProfile, setReload } = useContext(AuthContext)
// const [showPass, setShowPass] = useState(false)
// const {
//     register,
//     handleSubmit,

//     formState: { errors },
// } = useForm()
// // Regular expression patterns for each password requirement
// const passwordLengthPattern = /.{6,}/;
// const passwordLowercasePattern = /[a-z]/;
// const passwordUppercasePattern = /[A-Z]/;

// const onSubmit = (data) => {
//     const { email, password, name, photo } = data;
//     console.log(name)
//     createUser(email, password)
//         .then(() => {

//             updateUserProfile(name, photo)
//                 .then(() => {
//                     setReload(true)
//                     toast('registration successufl')

//                     navigate("/")
//                 })
//         })
//         .catch(error => {
//             console.log("eror khaiso ", error)
//         })
// }

//     return (

//         <div>
// <Helmet>
//     <title>Register Page</title>
// </Helmet>
//             <div className="hero my-16">

//                 <div className="hero-content">


//                     <div className="card shrink-0 w-[400px] max-w-sm shadow-2xl bg-base-100">
//                         <h1 className="text-center text-2xl font-semibold mt-3">create your accout</h1>

//                         <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>
//                                 <input type="name" {...register("name")} placeholder="your name" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Photo URL</span>
//                                 </label>
//                                 <input {...register("photo")} type="text" placeholder="photo url" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>

// <input  {...register("password", {
//     validate: {
//         length: value => passwordLengthPattern.test(value) || "Password must be at least 6 characters",
//         lowercase: value => passwordLowercasePattern.test(value) || "Password must contain at least one lowercase letter",
//         uppercase: value => passwordUppercasePattern.test(value) || "Password must contain at least one uppercase letter"
//     }
// })} type={showPass ? "text" : "password"} placeholder="password" className=" input input-bordered" required />

// <span className="relative -top-8 left-[290px]" onClick={() => setShowPass(!showPass)}>


    // {
    //     showPass ? <FaEye></FaEye>
    //         : <FaEyeSlash></FaEyeSlash>
    // }
// </span>

// {/* Indicate the error messages for password validation */}
// {errors.password && (
//     <>
//         {errors.password.type === "length" && <span className="text-red-500 font-semibold text-sm">{errors.password.message}</span>}
//         {errors.password.type === "lowercase" && <span className="text-red-500 font-semibold text-sm">{errors.password.message}</span>}
//         {errors.password.type === "uppercase" && <span className="text-red-500 font-semibold text-sm">{errors.password.message}</span>}
//     </>
// )}

//                             </div>

//                             <div className="form-control mt-6">
//                                 <button className="btn btn-primary">Register</button>
//                             </div>
//                             <div className="flex">
//                                 <p>Have an account?</p>
//                                 <p className="text-blue-500"><Link to="/login">please login</Link></p>
//                             </div>

//                         </form>

//                     </div>
//                 </div>

//             </div>
//         </div>

//     );
// };

// export default Register;
// import React from 'react';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    const { createUser, updateUserProfile, setReload } = useContext(AuthContext)
    // const [showPass, setShowPass] = useState(false)
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()
    // Regular expression patterns for each password requirement
    const passwordLengthPattern = /.{6,}/;
    const passwordLowercasePattern = /[a-z]/;
    const passwordUppercasePattern = /[A-Z]/;

    const onSubmit = (data) => {
        const { email, password, name, photo } = data
        console.log(name)
        createUser(email, password)
            .then(() => {

                updateUserProfile(name, photo)
                    .then(() => {
                        setReload(true)
                        toast('registration successufl')

                        navigate("/")
                    })
            })
            .catch(error => {
                console.log("eror khaiso ", error)
            })
    }

    return (
        <div className="mt-8 lg:mb-12">
            <Helmet>
                <title>Register Page</title>
            </Helmet>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Register Now !</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Name</label>
                        <input type="text" {...register("name")} placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Email</label>
                        <input type="email" {...register("email")} placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Photo URL</label>
                        <input type="text" {...register("photo")} placeholder="your email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        {/* <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input  {...register("password", {
                            validate: {
                                length: value => passwordLengthPattern.test(value) || "Password must be at least 6 characters",
                                lowercase: value => passwordLowercasePattern.test(value) || "Password must contain at least one lowercase letter",
                                uppercase: value => passwordUppercasePattern.test(value) || "Password must contain at least one uppercase letter"
                            }
                        })} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" /> */}


                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input  {...register("password", {
                                validate: {
                                    length: value => passwordLengthPattern.test(value) || "Password must be at least 6 characters",
                                    lowercase: value => passwordLowercasePattern.test(value) || "Password must contain at least one lowercase letter",
                                    uppercase: value => passwordUppercasePattern.test(value) || "Password must contain at least one uppercase letter"
                                }
                            })}  type={showPass ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg> */}
                            
                            <span className=" left-[290px]" onClick={() => setShowPass(!showPass)}>
                            {
        showPass ? <FaEye></FaEye>
            : <FaEyeSlash></FaEyeSlash>
    }
                            </span>
                        </label>


                        {/* Indicate the error messages for password validation */}
                        {errors.password && (
                            <>
                                {errors.password.type === "length" && <span className="text-red-500 font-semibold text-sm">{errors.password.message}</span>}
                                {errors.password.type === "lowercase" && <span className="text-red-500 font-semibold text-sm">{errors.password.message}</span>}
                                {errors.password.type === "uppercase" && <span className="text-red-500 font-semibold text-sm">{errors.password.message}</span>}
                            </>
                        )}

                    </div>
                    <button className="block w-full p-3 text-center rounded-lg dark:text-gray-50 hover:bg-violet-800 transition dark:bg-violet-600">Registration</button>
                </form>


                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have accoutn?
                    <Link to="/login" rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Login</Link>
                    {/* <p className="text-blue-500"><Link to="/login">please login</Link></p> */}
                </p>
            </div>
        </div>
    );
};

export default Register;