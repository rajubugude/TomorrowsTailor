import { useContext } from "react";
import Navbar from "../components/Navbar";
// import axios from "axios";
import { UserContext } from "../context/UserContext";
// import { useParams } from "react-router-dom";
import "../styles/style.css";

const Profile = () => {
  //   const param = useParams().id;
  const { user } = useContext(UserContext);
  const userDataString = sessionStorage.getItem("userData");
  const userData = JSON.parse(userDataString);
  console.log(user);
  const { data } = userData;
  console.log(data.name);

  return (
    <div>
      <Navbar />
      <div className="profile"></div>
    </div>
  );
};

export default Profile;
