import { Link, NavLink } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import Hamburger from "hamburger-react";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const navLink = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive
              ? "font-semibold hover:font-black border-white border-2 "
              : isPending
              ? "pending"
              : "hover:font-black "
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/membership"}
          className={({ isActive, isPending }) =>
            isActive
              ? " font-semibold hover:font-black border-white border-2 "
              : isPending
              ? "pending"
              : "hover:font-black"
          }
        >
          Membership
        </NavLink>
      </li>
      <li>
        <Link>
          <button className="">
            <IoIosNotificationsOutline className="inline w-5 h-5" />
            <div className="badge">0</div>
          </button>
        </Link>
      </li>
      <li>
        <Link to={"/register"}>Join US</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-slate-950 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </label>
          <ul
            tabIndex={0}
            className={`menu ${
              !isOpen && "hidden"
            } bg-slate-950  dropdown-content  z-[1] p-2 shadow  w-52 min-h-screen`}
          >
            {navLink}
          </ul>
        </div>
        <img
          className="h-10 sm:h-12    "
          src="https://i.ibb.co/f0kJTdd/devpoint-logo.png"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
