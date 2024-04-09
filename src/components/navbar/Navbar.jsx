import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
         <NavLink className="no-underline"><li>Home</li></NavLink>
            <NavLink className="no-underline"><li>Update Profile</li></NavLink>
            <NavLink className="no-underline"><li>Contact</li></NavLink>
    </>
    return (
        <div className="navbar mb-5 bg-base-100 shadow-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Home Vibes</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <p  className="menu  space-x-12 menu-horizontal px-1">
     {links}
    </p>
  </div>
  <div className="navbar-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
  </div>
</div>
    );
};

export default Navbar;