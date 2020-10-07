import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopRestaurants from "../screens/TopRestaurants";

const Stack = createStackNavigator();

export default function TopRestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={TopRestaurants}
        options={{
          title: "Los Mejores Restaurantes",
          headerStyle: {
            backgroundColor: "#00a680",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
