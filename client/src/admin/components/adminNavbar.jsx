import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import { useContext } from "react";
import AdminMenu from "../components/adminMenu";
import { UserContext } from "../../context/UserContext";
import "../../styles/style.css";
const Navbar = () => {
  //   const [menu, setMenu] = useState(false);

  // console.log(prompt)

  //   const showMenu = () => {
  //     setMenu(!menu);
  //   };

  const { user } = useContext(UserContext);

  return (
    <div className="nav">
      <img src={logo} />
      <div className="navitems">
        {user ? (
          <AdminMenu />
        ) : (
          <h3>
            <Link to="/">Login</Link>
          </h3>
        )}
      </div>
    </div>
  );
};

export default Navbar;
