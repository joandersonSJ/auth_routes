import React, { createContext, useState } from "react";
import * as auth from "../sevices/auth"; // Se eu não usar o "* as" da erro

const AuthContext = createContext({ signed: true, user: {} });

export function AuthProvider({ children }) {

  const [ user, setUser ] = useState(null)

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user)
  }

  function signOut() {
    setUser(null)
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
