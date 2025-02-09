import { useContext } from "react";
import { IoLocationSharp, IoTimeOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthenticationContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, setUser , logOut } = useContext(AuthenticationContext);
  const handleLogout = () =>{
    logOut()
    .then(result => {
      console.log(result.user);
      setUser(result.user)
    })
    .catch(error => console.log(error))
  }
  const navlinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#0076ed]" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#0076ed]" : "")}
          to="/allTreatments"
        >
          All Treatments
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#0076ed]" : "")}
          to="/profile"
        >
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#0076ed]" : "")}
          to="/myAppointments"
        >
          My Appointments
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <nav className="flex justify-end gap-12 mt-3">
        <p className="text-[#ffb507] flex items-center font-medium">
          <IoTimeOutline className="text-[#00bcf7] mr-1" /> Monday to Friday
          8AM-9PM
        </p>
        <p className="text-[#ffb507] flex items-center font-medium">
          <IoLocationSharp className="text-[#00bcf7] mr-1" />{" "}
          <span>Address</span>Rangpur, Dhaka, Bangladesh
        </p>
      </nav>
      <div className="border border-gray-100 my-4"></div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2"
            >
              {navlinks}
            </ul>
          </div>
          <a className="text-2xl cursor-pointer font-bold text-[#00bcf7]">
            Dent<span className="text-[#ffb507]">Care</span>
            <span className="text-[#00bcf7]">.</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-base">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link to="/">
              <button onClick={handleLogout} className="px-8 py-3 cursor-pointer hover: rounded-2xl font-medium text-white bg-gradient-to-r from-[#00bcf7] to-[#0076ed] )">
                Log Out
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="px-8 py-3 cursor-pointer hover: rounded-2xl font-medium text-white bg-gradient-to-r from-[#00bcf7] to-[#0076ed] )">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
