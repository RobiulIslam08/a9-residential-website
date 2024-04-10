import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
  const {user, logout}  = useContext(AuthContext)
  const handleLogout = ()=>{
    logout()
    .then( ()=>{
      console.log('log out')
    })
    .catch(error =>{
      console.log('error khaiso logout ' ,error)
    })
  }


  const links = <>
    <div className="space-x-9">
      <NavLink>Home</NavLink>
      <NavLink>Update Profile</NavLink>
      <NavLink>Contact</NavLink>
      <NavLink to="login">Login</NavLink>
      <NavLink to="register">Register</NavLink>
    </div>
  </>
  return (
    <div className="mb-8 navbar bg-base-200 shadow-md my-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <h1 className="text-3xl font-bold">Home Vibes</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">

          {/* longin and register */}
         
          
          {
            user? <> <button onClick={handleLogout} className="btn">log out</button>
     
        
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div></>
            : <button  className="btn"><Link to="/login">login</Link></button>
          }
      
      </div>
    </div>
  );
};

export default Navbar;
