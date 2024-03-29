import axios from "axios";
import { URL } from "../../url";
import { useEffect, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { setformulae } from "../../context/TrouserSlice";
import { useSelector } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import edit and delete icons
import "../../styles/style.css"
import AdminNavbar from "../components/adminNavbar"
const AdminFormulaepage = () => {
  const dispatch = useDispatch();
  const dataObject = useSelector((state) => state.trouser.formulae);
  const [data, setData] = useState([]);

  const fetchFormulae = useCallback(async () => {
    try {
      const res = await axios.get(URL + "/trouser/formulae", {
        withCredentials: true,
      });
      dispatch(setformulae(res.data));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchFormulae();
    const dataArray = Object.values(dataObject);
    setData(dataArray);
  }, [fetchFormulae, dataObject]);

  // Function to render table rows
  const renderTableRows = () => {
    return data.map((item) => (
      <tr key={item._id} className="bg-white ">
        <td>{item.key}</td>
        <td>{item.expression}</td>
        <td>
          <button className="icon-button">
            <FaEdit />
          </button>
          <button className="icon-button">
            <FaTrash />
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
    <AdminNavbar/>
      <h1 className="mt-40 mb-5">This is formulae edit page</h1>
      <table className="styled-table">
        <thead>
          <tr className="bg-gray">
            <th>Point</th>
            <th>Expression</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </>
  );
};

export default AdminFormulaepage;
