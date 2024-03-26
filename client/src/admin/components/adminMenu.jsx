import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { URL } from "../../url";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/style.css";

const Menu = () => {
  const { user } = useContext(UserContext);
  const { info } = useContext(UserContext);

  const userDataString = sessionStorage.getItem("userData");
  const userData = JSON.parse(userDataString);
  const { data } = userData;
  console.log(data.name);
  console.log(info)

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(URL + "/user/logout", {
        withCredentials: true,
      });
      console.log(res);
      sessionStorage.removeItem("userData");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-[300px] z-10 flex flex-row items-start absolute t-12 right-10 md:right-32 rounded-md p-6 navitems text-l">
      {!user && (
        <h3 className="text-sm hover:text-gray-500 cursor-pointer">
          <Link to="/">Login</Link>
        </h3>
      )}
      {!user && (
        <h3 className="text-sm hover:text-gray-500 cursor-pointer">
          <Link to="/register">Register</Link>
        </h3>
      )}
      {user && info.role==="admin" && (
        <h3 className=" ">
          <Link to={"/admin-profile/" + data._id}>AdminProfile</Link>
        </h3>
      )}
      {user && info.role==="admin" && (
        <h3 className="">
          <Link to={"/dashboard"}>Dashboard</Link>
        </h3>
      )}
        {user && info.role==="admin" && (
        <h3 className="">
          <Link to={"/trouser-formulae"}>Edit-Formulae</Link>
        </h3>
      )}

      {user && (
        <h3 onClick={handleLogout} className="logout">
          Logout
        </h3>
      )}
    </div>
  );
};

export default Menu;
