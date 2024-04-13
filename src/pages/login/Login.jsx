import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGithub, FaGoogle  } from "react-icons/fa";





const Login = () => {
 

  const { loginUser, signWithGoogle, signWithGithub } = useContext(AuthContext)
  const {
    register,
    handleSubmit,


    // formState: { errors },
  } = useForm()

  const [loginError, setLoginError] = useState("")

  const onSubmit = async (data) => {
    const { email, password} = data;
    setLoginError("")
    try {
      // Perform login operation
      const result = await loginUser(email, password);

      toast("Successful Login");
      console.log(result.user);
    } catch (error) {
      // Handle login error
      setLoginError("Invalid email or password."); // Set login error message
      toast.error("please valid information")
    }
  };

  const handleGoogleSignin = () =>{
   
    signWithGoogle()
    .then(()=>{
      console.log('successful')
    })
    .catch(error =>{
      console.log("error khaiso vai", error)
    })
    
  }
  const handleGithubLogin = () =>{
    signWithGithub()
    .then(()=>{
      console.log('successful')
    })
    .catch(error =>{
      console.log("error khaiso vai", error)
    })
  }
  return (
    <div className="hero my-16 ">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card shrink-0 w-[400px] max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-2xl font-semibold text-center">Please Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            {loginError && <p className="text-red-500">{loginError}</p>} {/* Display login error message */}

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="text-sm flex items-center justify-center ">
              <p>New here?</p>
              <p className="text-blue-500"><Link to="/register">Create an account</Link></p>
            </div>
            <p className="text-center text-sm mt-6">or sign up using</p>
            <div className="flex justify-center items-center gap-4 ">
            <FaGoogle onClick={handleGoogleSignin}  className="text-2xl"/>
            <FaGithub onClick={handleGithubLogin}  className="text-2xl"></FaGithub>
            </div>

          </form>

        </div>
      </div>
      <ToastContainer position="top-center"></ToastContainer>
    </div>
  );
};

export default Login;
