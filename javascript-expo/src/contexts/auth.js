import React, { createContext, useState, useEffect } from "react";
import * as auth from "../sevices/auth"; // Se eu não usar o "* as" da erro
import { AsyncStorage } from "react-native";

const AuthContext = createContext({ signed: true, user: {} });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Verificação se já existe os itens no storage
  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem("@RNAuth:user");
      const storageToken = await AsyncStorage.getItem("@RNAuth:token");

      if (storageUser && storageToken) {

        // Vai passar um header chamado Authorization com o conteudo definido
        // api.defaults.headers['Authorization'] = `Bearer ${storageToken}` 

        setUser(JSON.parse(storageUser));
        setLoading(false);

        //Para não ficar um load infinito
      } else if (!storageUser && !storageToken) {
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);

    // Vai passar um header chamado Authorization com o conteudo definido
    // api.defaults.headers['Authorization'] = `Bearer ${response.token}`

    await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(response.user));
    await AsyncStorage.setItem("@RNAuth:token", response.token);
  }

  function signOut() {
    AsyncStorage.clear().then(() => setUser(null));
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
