import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { URL } from "../url";
import "../styles/style.css";
import NavbarLogin from "./NavbarforLogin";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(URL + "/user/register", {
        name,
        email,
        password,
      });
      console.log(res);
      setname(res.data.name);
      setEmail(res.data.email);
      setPassword(res.data.password);
      sessionStorage.setItem("userData", JSON.stringify(res));
      setError(false);
      navigate("/");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <NavbarLogin />
      <div className="logincontainer">
        <div className="flex items-center justify-between px-6 md:px-[200px] py-4 ">
          <p className="text-lg md:text-xl font-extrabold">
            {/* <h1 className="heading">Welcome to Tomorrow&apos;s Tailor!</h1> */}
          </p>
        </div>
        <div className="container flex flex-col">
          <div className="">
            <h2 className="heading">Create an account</h2>
            <div className="inputf">
              <input
                onChange={(e) => setname(e.target.value)}
                className="inptext"
                type="text"
                placeholder="Enter your username"
              />
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
            <button onClick={handleRegister} className="bi">
              Register
            </button>
            {error && <h3 className="error ">Something went wrong!</h3>}
            <div className="down">
              <p className="smt">Already have an account?</p>
              <p className="text-gray-500 hover:text-black">
                <Link to="/">Login</Link>
              </p>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Register;
