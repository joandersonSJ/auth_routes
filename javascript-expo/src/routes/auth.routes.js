import React from "react";
import SignIn from "../pages/SignIn";
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </AuthStack.Navigator>
  );
}
