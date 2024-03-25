import "../../styles/style.css";
import AdminNavbar from "../components/adminNavbar"

const AdminHome = () => {
  return (
    <>
    <AdminNavbar/>
      <div className="homecontainer">
        <h3>Welcome Home Admin!</h3>
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

export default AdminHome;
