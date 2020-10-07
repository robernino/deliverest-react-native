import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account/Account";
import Login from "../screens/Account/Login";
import Register from "../screens/Account/Register";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{
          title: "Mi cuenta",
          headerStyle: {
            backgroundColor: "#00a680",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: "Iniciar Sesión",
          headerStyle: {
            backgroundColor: "#00a680",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{
          title: "Registro",
          headerStyle: {
            backgroundColor: "#00a680",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
