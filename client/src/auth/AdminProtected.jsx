import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function AdminProtected({ children }) {
  //const user = ses sionStor age.getItem("userData");
  const { user } = useContext(UserContext);
  console.log(user)

  if (!user) {
    return <Navigate to="/" replace={true}></Navigate>;
  }  
  if (user && user.role!=="admin") {
    return <Navigate to="/home" replace={true}></Navigate>;
  }
  return children;
}

export default AdminProtected;