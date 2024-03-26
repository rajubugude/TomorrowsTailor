import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useSelector } from "react-redux";


function AdminProtected({ children }) {
  const { user} = useContext(UserContext);
  const data = useSelector((state) => state.user.userInfo);
  console.log(data)
  
  if (!user || !data) {
    // If user or info is not available, redirect to login page
    return <Navigate to="/" replace={true} />;
  } 
  if (data.role !== "admin") {
    // If user is an admin, redirect to admin home page
    <Navigate to="/home" replace={true} />;
  } 

  return children;
}

export default AdminProtected;
