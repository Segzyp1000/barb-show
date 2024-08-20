import { createContext, useState, useEffect } from "react";
import { auth } from "./config/Firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const signin = () => {
    setIsAuthenticated(true);
  };

  const signout = () => {
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = auth.currentUser;
      if (user) {
        const token = await user.getIdTokenResult();
        if (token.claims.admin) {
          setIsAdmin(true);
        }
        setUser(user);
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signin, signout, user, isAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };

// import { auth } from '../config/Firebase';

// const AuthContext = React.createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const user = auth.currentUser;
//       if (user) {
//         const token = await user.getIdTokenResult();
//         if (token.claims.admin) {
//           setIsAdmin(true);
//         }
//         setUser(user);
//       }
//     };
//     fetchUser();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, isAdmin }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
