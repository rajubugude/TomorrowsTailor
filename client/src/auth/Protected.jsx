import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Protected({ children }) {
  //const user = ses sionStor age.getItem("userData");
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/" replace={true}></Navigate>;
  }
  return children;
}

export default Protected;
