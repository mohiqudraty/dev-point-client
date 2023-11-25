import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";
import useAuth from "../Hooks/useAuth/useAuth";
import Loader from "../Components/Shared/Spinner/Loader";

const Root = () => {
  const { loading } = useAuth();
  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <NavBar></NavBar>
          <Outlet></Outlet>
        </>
      )}
    </div>
  );
};

export default Root;
