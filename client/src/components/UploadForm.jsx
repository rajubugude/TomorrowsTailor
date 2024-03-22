// src/components/UploadForm.js
import { URL } from "../url";
import axios from "axios";
import { useState } from "react";
import "../styles/style.css";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [submit, setSubmit] = useState(false);

  const handleUploadChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    // Handle upload form submission
    const data = new FormData(); //formdata object
    data.append("file", file);
    // console.log(data)
    //img upload
    try {
      const imgUpload = await axios.post(URL + "/user/api/upload", data);
      console.log("image uploaded", file, imgUpload);
    } catch (err) {
      console.log(err);
    }
    setSubmit(true);
  };

  return (
    <>
      <form onSubmit={handleUploadSubmit}>
        <div>
          {/* <label
            htmlFor="image"
            className="block text-black-700 text-sm font-bold mb-2"
          >
            Image
          </label> */}
        </div>
        <div className="mb-4">
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleUploadChange}
            accept="image/*"
            className="shadow appearance-none border rounded w-full py-2 px-10 ml-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button type="submit" className="bi">
          Upload Image
        </button>
      </form>
      {submit && (
        <p className="smalltext">
          Image upload successfully check your profile!
        </p>
      )}
    </>
  );
};

export default UploadForm;
