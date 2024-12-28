
import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import AppRouts from "../constant/constant";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null); // Initialize user state
  const [token, setToken] = useState(Cookies.get("token") || null); // Initialize token state

  useEffect(() => {
    if (token && !user) {
      getUserInfo(token); // Fetch user info if token is present(means user is login)
    }
  }, [token, user]);

  const getUserInfo = async (token) => {
    await axios
      .get(AppRouts.getCurrentUserProfile, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.users.email);
        // console.log(res);
        setUser(res.data.users);
      })
      .catch((err) => console.log(err));
  };
  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
      {console.log(user)}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;