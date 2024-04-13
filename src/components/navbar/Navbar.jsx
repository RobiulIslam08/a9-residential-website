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
      <NavLink  className={({ isActive }) =>
              isActive ? "font-bold text-primary" : "font-semibold"
            } to="/">Home</NavLink>
      <NavLink className={({ isActive }) =>
              isActive ? "font-bold text-primary" : "font-semibold"
            } to="/update">Update Profile</NavLink>
      <NavLink className={({ isActive }) =>
              isActive ? "font-bold text-primary" : "font-semibold"
            } to="/contact">Contact</NavLink>
   
      
    </div>
  </>
  return (
    <div className="mb-8 navbar bg-base-200 shadow-md px-12 my-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" btn btn-ghost lg:hidden">
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
      <div className="navbar-end space-x-5">

          {/* longin and register */}
         
          
          {
            user? <> 
     
{/*         
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div> */}
            
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar"> <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div></div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu bg-base-100 rounded-box w-36">
                {/* <li><a></a></li> */}
                {user.displayName}
                
              </ul>
            </div>
            <button onClick={handleLogout} className="btn btn-accent">log out</button>
            </>
            : <button  className="btn btn-accent"><Link to="/login">login</Link></button>
          }
      
      </div>
    </div>
  );
};

export default Navbar;
