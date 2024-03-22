// import { URL } from "../url";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import "../styles/style.css";
import Navbar from "./Navbar";
// import trouser from "../assets/2.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homecontainer">
        <h3>Welcome Home!</h3>
      </div>
      <p className="home">
        &quot;Welcome to Tomorrow&apos;s Tailor, where style meets precision
        craftsmanship. Explore our curated collection of personalized and
        custom-fit clothing, designed to elevate your wardrobe with
        sophistication and individuality.&quot;
      </p>
      {/* <div>
        <img src={trouser} />
      </div> */}
    </>
  );
};

export default Home;
