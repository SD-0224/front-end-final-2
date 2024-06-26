import { createContext, useContext, useEffect, useState } from "react";
import { logout } from "../components/authentication/services/AuthenticationService";
import Cookies from "js-cookie";

const AuthenticatedUserContext = createContext();

export const AuthenticatedUserProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => Cookies.get('userData'));
  const [isAuthenticated, setIsAuthenticated] = useState(() => Cookies.get('isAuthenticated'));
  const [token, setToken] = useState(() => Cookies.get('token'));

  const setUserData = (userData, token) => {
    setAuthUser(userData);
    setIsAuthenticated(true);
    setToken(token);
    Cookies.set('token', token, { expires: 7 });
    Cookies.set('userData', JSON.stringify(userData), { expires: 7 });
    Cookies.set('isAuthenticated', true, { expires: 7 });
  };

  const clearUserData = () => {
    console.log('clearing');
    setAuthUser(null);
    setIsAuthenticated(false);
    setToken(null);
    Cookies.remove('token');
    Cookies.remove('userData');
    Cookies.remove('isAuthenticated');
  };


  const logoutUser = async () => {
    try {
      await logout();
      clearUserData();
    } catch (error) {
      console.error('Logout failed', error);
    }
  };


  useEffect(() => {
    console.log(authUser, isAuthenticated, token);
  }, [authUser, isAuthenticated, token]);
  return (
    <AuthenticatedUserContext.Provider value={{ authUser, isAuthenticated, setUserData, logoutUser, token }}>{children}</AuthenticatedUserContext.Provider>
  );
};

export function useAuthenticatedUserContext() {
  return useContext(AuthenticatedUserContext);
}
