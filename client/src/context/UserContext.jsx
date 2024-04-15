/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState, useCallback } from "react";
import { URL } from "../url";
import {setUserInfo} from "./user/userSlice";
import { useDispatch } from "react-redux";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  ///const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [info, setInfo] = useState({});
  const dispatch = useDispatch();
  
  // Define getUser as a useCallback to fix the warning
  const getUser = useCallback(async () => {
    try {
      const res = await axios.get(URL + "/user/refetch", {
        withCredentials: true,
      });
      console.log(res.data);
      setUser(res.data._id);
      setInfo(res.data); // Set user info here
      dispatch(setUserInfo(res.data));
      setIsLoading(false)
      
    } catch (err) {
      console.log(err);
    } 
  }, [dispatch]);

  useEffect(() => {
    // Fetch user data only if it's not already fetched
    if ( !user) {
      getUser();
    }
  }, [user, getUser, info]);

  return (
    <UserContext.Provider value={{ user, setUser , info, setInfo }}>
      {/* Render children only when data is loaded */}
      {!isLoading && children}
    </UserContext.Provider>
  );
}
