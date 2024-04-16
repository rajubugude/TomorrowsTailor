import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { URL } from "../url";
import "../styles/style.css";
import NavbarLogin from "./NavbarforLogin";
import { useDispatch,useSelector } from "react-redux";
import { setUserInfo } from "../context/user/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.userInfo);
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        URL + "/user/login",
        { email, password },
        { withCredentials: true }
      );
      console.log(res.data);
      dispatch(setUserInfo(res.data));
      sessionStorage.setItem("userData", JSON.stringify(res));
      localStorage.setItem("user",JSON.stringify(res));
      // window.location.reload();
      console.log(data.role)
      if (res.data.role==="admin"){
        navigate("/admin-home");
      }else {
        navigate("/home")
      }
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <NavbarLogin />
      </div>
      <div className="logincontainer">
        <div className="flex items-center justify-between px-6 md:px-[200px] py-4 ">
          <p className="text-lg md:text-xl font-extrabold">
            {/* <h1 className="heading">Welcome to Tomorrow&apos;s Tailor!</h1> */}
          </p>
        </div>
        <div className="container flex flex-col">
          <div>
            <div>
              <h2 className="heading">Login to account!</h2>
              <div className="inputf">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="inptext"
                  type="text"
                  placeholder="Enter your email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="inptext"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <button onClick={handleLogin} className="bi">
                  Log in
                </button>
              </div>
              {error && <h3 className="error ">Something went wrong!</h3>}
              <div className="down">
                <p className="smt">New here?</p>
                <p className="black">
                  <Link to="/register">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
