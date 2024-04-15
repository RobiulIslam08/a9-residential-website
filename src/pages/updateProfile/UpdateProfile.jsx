import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { register } from "swiper/element";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
    const { updateUserProfile } = useContext(AuthContext)
    const {
        register,
        handleSubmit,

        // formState: { errors },
    } = useForm()

    const navigate = useNavigate()
    const onSubmit = (data) => {
        const { name,photo} = data
        console.log(name)
        updateUserProfile(name,photo)
        .then(() =>{
            console.log("update name",name)
            navigate("/")
            console.log()
            toast("Successful update");
        })
        .catch(error =>{
            console.log("eror khaiso ", error)
        })
    }
    return (
        <div>
             <Helmet>
                <title>update profile</title>
            </Helmet>
            <div className="hero my-16">

<div className="hero-content">


    <div className="card shrink-0 w-[400px] max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-center text-2xl font-semibold mt-3">Want to update your profile?</h1>

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
                <input disabled {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input {...register("photo")} type="text" placeholder="photo url" className="input input-bordered" required />
            </div>
           

            <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
            </div>
           

        </form>

    </div>
</div>
<ToastContainer position="top-center"></ToastContainer>

</div>
        </div>
    );
};

export default UpdateProfile;