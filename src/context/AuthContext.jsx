import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  token: null,
  setToken: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [token, _setToken] = useState(sessionStorage.getItem('Token'));

  const setToken = (token) => {
    _setToken(token);

    if (token) {
      sessionStorage.setItem('Token', token);
    } else {
      sessionStorage.removeItem('Token');
    }
  };

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
