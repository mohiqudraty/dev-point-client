import { Link, NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { scaleRotate as Menu } from "react-burger-menu";
import useAuth from "../../../Hooks/useAuth/useAuth";

const NavBar = () => {
  const { user, logoutUser } = useAuth();
  const [isOpen, setOpen] = useState(false);

  // sign out handle -----
  const handleSignOut = () => {
    logoutUser();
  };

  // mene link --
  const navMenu = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive ? "underline" : isPending ? "pending" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/membership"}
          className={({ isActive, isPending }) =>
            isActive ? "underline" : isPending ? "pending" : ""
          }
        >
          Membership
        </NavLink>
      </li>
      <li>
        <Link>Notification</Link>
      </li>
      {!user ? (
        <li>
          <Link to={"/register"}>Join Us</Link>
        </li>
      ) : (
        <li>
          <Link onClick={handleSignOut}>Sign Out</Link>
        </li>
      )}
    </>
  );
  return (
    <nav className="py-5 px-3 flex bg-slate-900 text-white font-bold justify-between items-center">
      {/* hum burger icon */}
      <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <Menu noOverlay>
          <ul className="min-h-screen bg-slate-900 p-10 space-y-4">
            {navMenu}
          </ul>
        </Menu>
      </div>
      {/* logo */}
      <div>
        <img
          className="h-12"
          src="https://i.ibb.co/f0kJTdd/devpoint-logo.png"
          alt="dev point logo"
        />
      </div>
      <div>
        {/* mobile menu  */}

        {/* menu */}
        <div>
          <ul className="hidden md:flex space-x-8 justify-center items-center ">
            {navMenu}
          </ul>
        </div>
      </div>
      {/* profile */}
      <div></div>
    </nav>
  );
};

export default NavBar;
