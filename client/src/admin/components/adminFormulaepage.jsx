import axios from "axios";
import { URL } from "../../url";
import { useEffect, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { setformulae } from "../../context/TrouserSlice";
import { useSelector } from "react-redux";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa"; // Import save icon
import "../../styles/style.css";
import AdminNavbar from "../components/adminNavbar";

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

  const handleEditFormula = async (id, key, expression) => {
    try {
      // Send a put request to update the formula
      await axios.put(`${URL}/trouser/edit-formulae/${id}`, { key, expression }, {
        withCredentials: true,
      });
      // Update the UI by fetching the updated list of formulas
      fetchFormulae();
    } catch (error) {
      console.error("Error editing formula:", error);
    }
  };

  const handleDeleteFormula = async (id) => {
    try {
      // Send a delete request to the backend to delete the formula
      await axios.delete(`${URL}/trouser/delete-formulae/${id}`, {
        withCredentials: true,
      });
      // Update the UI by fetching the updated list of formulas
      fetchFormulae();
    } catch (error) {
      console.error("Error deleting formula:", error);
    }
  };

  const [editableRows, setEditableRows] = useState({});

  const handleEditIconClick = (id) => {
    setEditableRows((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the editable state
    }));
  };

  const handleSaveFormula = (id, key, expression) => {
    handleEditFormula(id, key, expression);
    setEditableRows((prevState) => ({
      ...prevState,
      [id]: false, // Set the row as non-editable after saving
    }));
  };

  const renderTableRows = () => {
    return data.map((item) => (
      <tr key={item._id} className="bg-white  p-4">
        <td>
          {editableRows[item._id] ? (
            <input
              type="text"
              value={item.key}
              onChange={(e) => item.key = e.target.value}
            />
          ) : (
            item.key
          )}
        </td>
        <td>
          {editableRows[item._id] ? (
            <input
              type="text"
              value={item.expression}
              onChange={(e) => item.expression = e.target.value}
            />
          ) : (
            item.expression
          )}
        </td>
        <td>
          {editableRows[item._id] ? (
            <button
              className="icon-button"
              onClick={() => handleSaveFormula(item._id, item.key, item.expression)}
            >
              <FaSave />
            </button>
          ) : (
            <button
              className="icon-button"
              onClick={() => handleEditIconClick(item._id)}
            >
              <FaEdit />
            </button>
          )}
          <button
            className="icon-button"
            onClick={() => handleDeleteFormula(item._id)}
          >
            <FaTrash />
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <AdminNavbar />
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
