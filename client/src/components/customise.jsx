import "../styles/style.css";
import pant from "../assets/1.png";
import { Link } from "react-router-dom";

const Customise = () => {
  return (
    <>
      <div>
        <p>
          &quot;Discover endless possibilities for personalization with
          Tomorrow&apos;s Tailor. From selecting fabrics and styles to providing
          your measurements, our intuitive customization process allows you to
          create clothing that reflects your individuality and fits you
          perfectly.&quot;
        </p>
      </div>
      <div className="custcomp">
        <div className="custcon">
          <Link to={"/customfill"}>
            <img src={pant} />
          </Link>
        </div>
        <div className="custcon">
          <p>Upcomming!!</p>
        </div>
        <div className="custcon">
          <p>Upcomming!!</p>
        </div>
      </div>
    </>
  );
};

export default Customise;
