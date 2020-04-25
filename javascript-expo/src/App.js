import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import { AuthProvider } from "./contexts/auth";
import Routes from "./routes";

export default function App() {
  return (
    // Provedor do contexto para permitir que todos os componentes possam usar
    // as mesmas informações que estão dentro do contexto
    <AuthProvider value={{ signed: true }}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}
