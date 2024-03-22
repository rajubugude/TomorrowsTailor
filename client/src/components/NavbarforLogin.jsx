// import { FaBars } from "react-icons/fa";

import "../styles/style.css";
import logo from "../assets/logo.jpg";

const NavbarLogin = () => {
  //   const [menu, setMenu] = useState(false);

  // console.log(prompt)

  //   const showMenu = () => {
  //     setMenu(!menu);
  //   };

  return (
    <div className="nav">
      <img src={logo} className="logo" />
    </div>
  );
};

export default NavbarLogin;
