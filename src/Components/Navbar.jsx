import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../Contexts/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser, payAmount } = useContext(AuthContext);

  // console.log(user);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("signout succesfull");
        toast("SignOut Successfull");
        setTimeout(() => {}, 1200);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bills"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-500"
          }
        >
          Bills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-500"
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <img className="w-20 h-14" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-3">
        {user ? (
          <>
            <div className="tooltip tooltip-left" data-tip={user.displayName}>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} className="avatar cursor-pointer">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow z-50"
                >
                  <li>
                    <h4>{user.displayName}</h4>
                  </li>
                  <li>
                    <h4>{user.email}</h4>
                  </li>
                  <li>
                    <p>{payAmount}</p>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="btn btn-sm w-full"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className="space-x-3">
            <Link to="/login" className="btn bg-base-100">
              Login
            </Link>
            <Link to="/register" className="btn bg-base-100">
              Register
            </Link>
          </div>
        )}
      </div>
      {/* <ToastContainer position="top-center" autoClose={4000} /> */}
    </div>
  );
};

export default Navbar;
