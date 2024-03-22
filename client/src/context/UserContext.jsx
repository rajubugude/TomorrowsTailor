/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../url";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Fetch user data only if it's not already fetched
    if (!user) {
      getUser();
    }
  }, [user]);

  const getUser = async () => {
    try {
      const res = await axios.get(URL + "/user/refetch", {
        withCredentials: true,
      });
      console.log(res.data.id);
      setUser(res.data.id);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false); // Update loading state regardless of success or failure
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* Render children only when data is loaded */}
      {!isLoading && children}
    </UserContext.Provider>
  );
}
