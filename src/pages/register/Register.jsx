import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye,FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false)
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
        const { email, password} = data
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            toast("Successful Register");
        })
        .catch(error =>{
            console.log("eror khaiso ", error)
        })
    }

    return (

        <div className="hero my-16">

            <div className="hero-content">


                <div className="card shrink-0 w-[400px] max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-center text-2xl font-semibold mt-3">create your accout</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" {...register("name")} placeholder="your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input {...register("photo")} type="text" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            
                            <input  {...register("password", {
                                validate: {
                                    length: value => passwordLengthPattern.test(value) || "Password must be at least 6 characters",
                                    lowercase: value => passwordLowercasePattern.test(value) || "Password must contain at least one lowercase letter",
                                    uppercase: value => passwordUppercasePattern.test(value) || "Password must contain at least one uppercase letter"
                                }
                            })} type={showPass?"text":"password"} placeholder="password" className=" input input-bordered" required />
                           
                            <span className="relative -top-8 left-[290px]" onClick={()=>setShowPass(!showPass)}>
                                
                                
                            {
                                showPass?<FaEye></FaEye>
                                :<FaEyeSlash></FaEyeSlash>
                            }
                            </span>

                            {/* Indicate the error messages for password validation */}
                            {errors.password && (
                                <>
                                    {errors.password.type === "length" && <span className="text-red-500 font-semibold text-sm">{errors.password.message}</span>}
                                    {errors.password.type === "lowercase" && <span className="text-red-500 font-semibold text-sm">{errors.password.message}</span>}
                                    {errors.password.type === "uppercase" && <span className="text-red-500 font-semibold text-sm">{errors.password.message}</span>}
                                </>
                            )}

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="flex">
                            <p>Have an account?</p>
                            <p className="text-blue-500"><Link to="/login">please login</Link></p>
                        </div>

                    </form>

                </div>
            </div>
            <ToastContainer position="top-center"></ToastContainer>

        </div>

    );
};

export default Register;
