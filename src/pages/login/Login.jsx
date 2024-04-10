import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Login = () => {
  const { loginUser } = useContext(AuthContext)
  const {
    register,
    handleSubmit,

    // formState: { errors },
  } = useForm()

  const [loginError, setLoginError] = useState("")

  const onSubmit = async (data) => {
    const { email, password } = data;
    setLoginError("")
    try {
      // Perform login operation
      const result = await loginUser(email, password);
      console.log(result.user);
    } catch (error) {
      // Handle login error
      console.log("error khaiso ", error);
      setLoginError("Invalid email or password."); // Set login error message
    }
  };

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
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default Login;

