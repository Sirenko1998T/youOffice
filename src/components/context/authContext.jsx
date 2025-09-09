import { AuthService } from "../../js/authService";
import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export function AuthProvider({ children }) {
   let [user, setuser] = useState(null);
   useEffect(() => {
      let unsubscribe = AuthService.onAuthChange((currentUser) => {
         setuser(currentUser);
      });
      return () => unsubscribe();
   }, []);
   let value = {
      user,
      login: AuthService.login,
      register: AuthService.register,
      logout: AuthService.logout,
   };
   return (
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   )
}