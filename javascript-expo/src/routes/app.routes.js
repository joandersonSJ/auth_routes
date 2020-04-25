import React from "react";
import Dashboard from "../pages/Dashboard";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </AppStack.Navigator>
  );
}
