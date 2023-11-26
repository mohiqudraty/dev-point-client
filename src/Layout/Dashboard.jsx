import { BiHome, BiPen, BiUserCircle } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const navMenu = (
    <>
      <li>
        <NavLink
          to={"/dashboard/my-profile"}
          className={({ isActive, isPending }) =>
            isActive ? "underline" : isPending ? "pending" : ""
          }
        >
          <span className="flex  items-center gap-2">
            {" "}
            <BiUserCircle></BiUserCircle> My Profile
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/add-post"}
          className={({ isActive, isPending }) =>
            isActive ? "underline" : isPending ? "pending" : ""
          }
        >
          <span className="flex  items-center gap-2">
            {" "}
            <MdAdd></MdAdd> Add Post
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/my-posts"}
          className={({ isActive, isPending }) =>
            isActive ? "underline" : isPending ? "pending" : ""
          }
        >
          <span className="flex items-center gap-2">
            <BiPen></BiPen> My Posts
          </span>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex">
      {/* sidebar  */}
      <div className="w-[20%] min-h-screen bg-slate-900">
        <h2 className="text-3xl font-black p-5 m-2 text-white border-2">
          Dashboard
        </h2>
        <ul className="p-10 space-y-5 text-white font-bold">{navMenu}</ul>
        <div className="divider w-[90%] mx-auto h-1 bg-white"></div>
        <ul className="p-10 space-y-5 text-white font-bold">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isActive ? "underline" : isPending ? "pending" : ""
              }
            >
              <span className="flex items-center gap-2">
                {" "}
                <BiHome></BiHome> Home
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content  */}
      <div className="flex-1 bg-gray-300">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
